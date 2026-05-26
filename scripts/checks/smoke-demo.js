const fs = require("node:fs");
const http = require("node:http");
const net = require("node:net");
const path = require("node:path");
const { spawn } = require("node:child_process");

const ROOT = path.resolve(__dirname, "../..");
const REQUIRED_FILES = [
  "package.json",
  "vercel.json",
  "scripts/build-vercel.js",
  "app/index.html",
  "app/triage-kiosk/index.html",
  "app/triage-kiosk/triage-kiosk.js",
  "app/summary-review/index.html",
  "app/summary-review/SummaryReview.tsx",
  "app/summary-review/fallback.html",
  "app/summary-review/assets/review-your-information-fallback.svg",
  "app/shared/styles.css",
  "core/triage_engine/index.js",
  "api/lib/triage-demo-contract.js",
  "api/triage-demo/sessions.js",
  "api/triage-demo/sessions/[session_key]/answers.js",
  "tests/contract/triage-demo-api.test.js",
  "demo/fixtures/chest-pain-high-bp-low-spo2.json",
  "demo/fixtures/fever-urinary.json",
  "demo/fixtures/respiratory-low-spo2-early-handoff.json",
  "demo/fixtures/tachycardia-live-demo.json"
];

function read(relativePath) {
  return fs.readFileSync(path.join(ROOT, relativePath), "utf8");
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getFreePort() {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.on("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const { port } = server.address();
      server.close(() => resolve(port));
    });
  });
}

function requestLocal(port, requestPath, options = {}) {
  const body = options.body || "";
  return new Promise((resolve, reject) => {
    const req = http.request({
      hostname: "127.0.0.1",
      port,
      path: requestPath,
      method: options.method || "GET",
      headers: {
        ...(options.headers || {}),
        ...(body ? { "Content-Length": Buffer.byteLength(body) } : {})
      }
    }, (res) => {
      const chunks = [];
      res.on("data", (chunk) => chunks.push(chunk));
      res.on("end", () => resolve({
        statusCode: res.statusCode,
        headers: res.headers,
        body: Buffer.concat(chunks).toString("utf8")
      }));
    });

    req.on("error", reject);
    if (body) req.write(body);
    req.end();
  });
}

async function waitForServer(port, childProcess) {
  const deadline = Date.now() + 5000;
  while (Date.now() < deadline) {
    if (childProcess.exitCode !== null) {
      throw new Error(`Mock API server exited early with code ${childProcess.exitCode}`);
    }

    try {
      const response = await requestLocal(port, "/healthz");
      if (response.statusCode === 200) return;
    } catch {
      await delay(100);
    }
  }

  throw new Error("Timed out waiting for mock API server.");
}

async function stopServer(childProcess) {
  if (childProcess.exitCode !== null) return;
  childProcess.kill("SIGTERM");
  await new Promise((resolve) => {
    childProcess.once("exit", resolve);
    setTimeout(resolve, 1000);
  });
}

for (const relativePath of REQUIRED_FILES) {
  assert(fs.existsSync(path.join(ROOT, relativePath)), `Missing required demo file: ${relativePath}`);
}

const html = read("app/triage-kiosk/index.html");
const summaryReviewHtml = read("app/summary-review/index.html");
const summaryReviewTsx = read("app/summary-review/SummaryReview.tsx");
const summaryFallbackHtml = read("app/summary-review/fallback.html");
const summaryFallbackSvg = read("app/summary-review/assets/review-your-information-fallback.svg");
const script = read("app/triage-kiosk/triage-kiosk.js");
const sharedStyles = read("app/shared/styles.css");
const packageJson = JSON.parse(read("package.json"));
const mockApiServer = read("scripts/mock-api-server.js");
const contractSource = read("api/lib/triage-demo-contract.js");
const engine = require(path.join(ROOT, "core/triage_engine/index.js"));
const contract = require(path.join(ROOT, "api/lib/triage-demo-contract.js"));

assert(html.includes("AI Triage Kiosk Demo"), "Demo HTML should expose the English product title.");
assert(summaryReviewHtml.includes("Review Your Information"), "Summary review screen should expose the patient-facing title.");
assert(summaryReviewHtml.includes("review-your-information-fallback.svg"), "Summary review screen should render the saved fallback image.");
assert(summaryReviewHtml.includes("SummaryReview.tsx"), "Summary review page should mount the React TSX component.");
assert(summaryReviewHtml.includes("createRoot"), "Summary review page should initialize the React renderer.");
assert(summaryReviewHtml.includes("Babel.transform"), "Summary review page should transpile the TSX component for static hosting.");
assert(summaryFallbackHtml.includes("review-your-information-fallback.svg"), "Fallback page should render the saved fallback image.");
assert(summaryFallbackSvg.includes("Review Your Information"), "Fallback SVG should preserve the visual title.");
assert(summaryReviewTsx.includes("Your heart rate was higher than expected."), "Summary review component should lead with the patient-facing clinical finding.");
assert(summaryFallbackSvg.includes("Your heart rate was higher than expected."), "Fallback SVG should include the main clinical finding.");
assert(summaryFallbackSvg.includes("Please confirm your information with staff."), "Fallback SVG should include clear confirmation guidance.");
assert(summaryReviewHtml.includes("summary-review-page"), "Summary review screen should use the no-scroll page shell.");
assert(summaryReviewHtml.includes("summary-review-frame"), "Summary review screen should use a fixed 4:3 frame.");
assert(summaryReviewTsx.includes("export default function SummaryReview"), "Summary review React component should export a default component.");
assert(summaryReviewTsx.includes("FallbackBoundary"), "Summary review component should include a render-failure fallback boundary.");
assert(!summaryReviewTsx.includes("Staff-review summary"), "Summary review screen should not show the removed title.");
assert(!summaryReviewTsx.includes("Staff-review summary is ready"), "Summary review screen should not use the old ready-state title.");
assert(!summaryReviewTsx.includes("4:3 static screen") && !summaryReviewTsx.includes("Synthetic data") && !summaryReviewTsx.includes("Staff review</span>"), "Summary review screen should not show removed header badges.");
assert(!summaryReviewTsx.includes("Endpoint 2 summary fields used by this screen"), "Summary review screen should not show API debug field headings.");
assert(!summaryReviewTsx.includes("Demo operating scope"), "Summary review screen should not show the removed operating-scope block.");
assert(!summaryReviewTsx.includes("Demo note"), "Summary review screen should not show the removed demo-note block.");
assert(!summaryReviewTsx.includes("Status:") && !summaryReviewTsx.includes("Progress:") && !summaryReviewTsx.includes("Visibility:"), "Summary review screen should not show the removed response status block.");
assert(sharedStyles.includes(".summary-review-page"), "Shared styles should include summary review page rules.");
assert(sharedStyles.includes("aspect-ratio: 4 / 3"), "Summary review frame should preserve a 4:3 ratio.");
assert(sharedStyles.includes("overflow: hidden"), "Summary review page/frame should prevent scrolling.");
assert(sharedStyles.includes(".primary-status-panel"), "Summary review styles should define the dominant primary status panel.");
assert(sharedStyles.includes(".measurement-card-primary"), "Summary review styles should emphasize the HR measurement card.");
assert(html.includes("../../core/triage_engine/index.js"), "Demo HTML should load the triage engine.");
assert(script.includes("AiTriageKioskEngine"), "Demo script should bind to the triage engine.");
assert(script.includes("Selected #"), "Multi-choice selections should show visible selection order.");
assert(script.includes("markVitalsReady"), "Demo script should expose the two-phase vitals-ready transition.");
assert(script.includes("loadTachycardia"), "Demo script should expose a tachycardia live-case load control.");
assert(script.includes("demoModeSelect"), "Demo script should expose the live/synthetic/local fallback mode control.");
assert(engine.CASES.length >= 3, "At least three synthetic cases are required.");
assert(engine.QUESTION_BANK.length >= 8, "The governed question bank is too small for the demo.");
assert(engine.CASES.every((demoCase) => demoCase.profile && demoCase.profile.age && demoCase.profile.sex), "Every case should include synthetic patient profile metadata.");
assert(engine.CASES.some((demoCase) => demoCase.id === "respiratory-low-spo2-early-handoff"), "Respiratory handoff case should be wired into the runtime.");
assert(engine.CASES.some((demoCase) => demoCase.id === "demo-tachycardia-live-001"), "Tachycardia live case should be wired into the runtime.");
assert(contract.expectedTotal === 7, "Contract API should expose the tachycardia expected_total denominator.");
assert(contract.questionSequence.some((question) => question.id === "tachy-post-vital-heart-rate-cue"), "Contract API should include the post-vital HR cue question.");
assert(packageJson.scripts["render:start"] === "node scripts/mock-api-server.js", "Render start script should launch the API server, not the static frontend.");
assert(packageJson.scripts["render:build"].includes("npm test"), "Render build script should run contract tests before deploy.");
assert(mockApiServer.includes('req.method === "GET" && req.url === "/healthz"'), "Render API server should expose GET /healthz for HTTP health checks.");
assert(mockApiServer.includes("process.env.PORT"), "Render API server should bind to the PORT environment variable.");
assert(contractSource.includes("DEMO_BEARER_TOKEN"), "Contract API should support env-controlled demo bearer token auth.");
assert(mockApiServer.includes("requireDemoBearerAuth"), "Render API server should enforce demo bearer token auth when configured.");
assert(engine.CASES.every((demoCase) => !demoCase.questionLimit || demoCase.questionLimit <= 7), "June demo cases should keep visible questions under 8.");
assert(!html.includes("<textarea"), "Demo runtime should stay choice-only and not expose free-text input.");
assert(engine.QUESTION_BANK.every((question) => question.type !== "text"), "Question bank should not include free-text questions.");
assert(engine.VERSION.boundary.includes("not diagnosis"), "Safety boundary must reject diagnosis claims.");

const vercelConfig = JSON.parse(read("vercel.json"));
assert(vercelConfig.outputDirectory === "dist", "Vercel should deploy only the sanitized dist directory.");

const serializedDemo = [html, script, read("core/triage_engine/index.js")].join("\n");
const forbiddenTerms = [
  "\u6ccc\u5c3f",
  "\u9810\u8a3a",
  "\u5c3f\u5c3f",
  "\u91ab\u5e2b",
  "\u75c5\u4eba",
  "\u8b77\u7406",
  ["Uro", "Previsit"].join("")
];
for (const term of forbiddenTerms) {
  assert(!serializedDemo.includes(term), `Demo runtime still contains urology/source-language term: ${term}`);
}

const expertForbiddenPhrases = [
  "plan_support",
  "AI diagnosis",
  "ESI level",
  "emergency severity",
  "likely pneumonia",
  "likely sepsis",
  "needs emergency treatment",
  "needs emergency care",
  "safe to go home",
  "safe to wait",
  "FDA-cleared",
  "FDA-ready",
  "510(k)-cleared",
  "510(k)-ready",
  "predicate-equivalent",
  "clinical-grade triage"
];
const runtimeAndApiExamples = [
  serializedDemo,
  summaryReviewHtml,
  summaryReviewTsx,
  ...fs.readdirSync(path.join(ROOT, "demo/fixtures")).filter((file) => file.endsWith(".json")).map((file) => read(path.join("demo/fixtures", file))),
  ...fs.readdirSync(path.join(ROOT, "handoff/api-examples")).filter((file) => file.endsWith(".json")).map((file) => read(path.join("handoff/api-examples", file)))
].join("\n");
for (const phrase of expertForbiddenPhrases) {
  assert(!runtimeAndApiExamples.includes(phrase), `Runtime/API examples contain expert-forbidden phrase: ${phrase}`);
}

async function runRenderStaticRouteSmoke() {
  const port = await getFreePort();
  const childProcess = spawn(process.execPath, ["scripts/mock-api-server.js"], {
    cwd: ROOT,
    env: {
      ...process.env,
      PORT: String(port),
      DEMO_BEARER_TOKEN: "smoke-token"
    },
    stdio: ["ignore", "pipe", "pipe"]
  });

  let output = "";
  childProcess.stdout.on("data", (chunk) => {
    output += chunk.toString("utf8");
  });
  childProcess.stderr.on("data", (chunk) => {
    output += chunk.toString("utf8");
  });

  try {
    await waitForServer(port, childProcess);

    const summaryPage = await requestLocal(port, "/demo-ui/summary-review/");
    assert(summaryPage.statusCode === 200, "Summary review UI route should return HTTP 200.");
    assert(String(summaryPage.headers["content-type"]).includes("text/html"), "Summary review UI route should return HTML.");
    assert(summaryPage.body.includes("Review Your Information"), "Summary review UI route should serve the final-screen HTML.");

    const sharedCss = await requestLocal(port, "/demo-ui/shared/styles.css");
    assert(sharedCss.statusCode === 200, "Summary review UI route should expose shared CSS through the safe demo-ui path.");
    assert(String(sharedCss.headers["content-type"]).includes("text/css"), "Shared CSS route should return text/css.");

    const fallbackSvg = await requestLocal(port, "/demo-ui/summary-review/assets/review-your-information-fallback.svg");
    assert(fallbackSvg.statusCode === 200, "Summary review fallback SVG route should return HTTP 200.");
    assert(String(fallbackSvg.headers["content-type"]).includes("image/svg+xml"), "Summary review fallback route should return SVG.");
    assert(fallbackSvg.body.includes("Review Your Information"), "Summary review fallback SVG should preserve the visual title.");

    const protectedPost = await requestLocal(port, "/api/triage-demo/sessions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: "{}"
    });
    assert(protectedPost.statusCode === 401, "Protected POST endpoints should still require the demo bearer token.");
    assert(protectedPost.body.includes("demo_bearer_token_required"), "Protected POST endpoint should preserve the token-required error code.");
  } catch (error) {
    error.message = `${error.message}\nMock server output:\n${output}`;
    throw error;
  } finally {
    await stopServer(childProcess);
  }
}

runRenderStaticRouteSmoke()
  .then(() => {
    console.log("AI triage kiosk demo smoke check passed.");
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
