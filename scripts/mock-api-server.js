#!/usr/bin/env node

const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const {
  createSession,
  demoBearerAuthChallenge,
  errorResult,
  requireDemoBearerAuth,
  sendResult,
  setCorsHeaders,
  submitAnswer
} = require("../api/lib/triage-demo-contract");

const PORT = Number(process.env.PORT || 4193);
const ROOT = path.resolve(__dirname, "..");

const SUMMARY_REVIEW_ROUTE_PREFIX = "/demo-ui/summary-review";
const SUMMARY_REVIEW_FILES = new Map([
  ["/", { path: "app/summary-review/index.html", type: "text/html; charset=utf-8" }],
  ["/index.html", { path: "app/summary-review/index.html", type: "text/html; charset=utf-8" }],
  ["/fallback.html", { path: "app/summary-review/fallback.html", type: "text/html; charset=utf-8" }],
  ["/SummaryReview.tsx", { path: "app/summary-review/SummaryReview.tsx", type: "text/plain; charset=utf-8" }],
  ["/assets/review-your-information-fallback.svg", {
    path: "app/summary-review/assets/review-your-information-fallback.svg",
    type: "image/svg+xml; charset=utf-8"
  }]
]);
const DEMO_UI_SHARED_FILES = new Map([
  ["/demo-ui/shared/styles.css", { path: "app/shared/styles.css", type: "text/css; charset=utf-8" }]
]);

function sendHealth(res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify({
    status: "ok",
    service: "nycu-imedtac-triage-demo-api",
    mode: "synthetic-data-rehearsal-api"
  }));
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("error", reject);
    req.on("end", () => {
      const raw = Buffer.concat(chunks).toString("utf8").trim();
      if (!raw) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(raw));
      } catch (error) {
        reject(error);
      }
    });
  });
}

function sendText(res, statusCode, body, contentType = "text/plain; charset=utf-8") {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", contentType);
  res.setHeader("Content-Length", Buffer.byteLength(body));
  res.end(body);
}

function getSummaryReviewStaticFile(urlPath) {
  if (urlPath === SUMMARY_REVIEW_ROUTE_PREFIX) {
    return { redirect: `${SUMMARY_REVIEW_ROUTE_PREFIX}/` };
  }

  if (!urlPath.startsWith(`${SUMMARY_REVIEW_ROUTE_PREFIX}/`)) {
    return null;
  }

  const relativeRoute = urlPath.slice(SUMMARY_REVIEW_ROUTE_PREFIX.length) || "/";
  return SUMMARY_REVIEW_FILES.get(relativeRoute) || false;
}

function sendSummaryReviewStatic(req, res) {
  const urlPath = new URL(req.url || "/", "http://localhost").pathname;
  const sharedFile = DEMO_UI_SHARED_FILES.get(urlPath);
  if (sharedFile) {
    sendStaticFile(res, sharedFile);
    return true;
  }

  const staticFile = getSummaryReviewStaticFile(urlPath);

  if (staticFile === null) return false;

  if (staticFile && staticFile.redirect) {
    res.statusCode = 302;
    res.setHeader("Location", staticFile.redirect);
    res.end();
    return true;
  }

  if (!staticFile) {
    sendText(res, 404, "Not found");
    return true;
  }

  sendStaticFile(res, staticFile);
  return true;
}

function sendStaticFile(res, staticFile) {
  const absolutePath = path.join(ROOT, staticFile.path);
  const body = fs.readFileSync(absolutePath);
  res.statusCode = 200;
  res.setHeader("Content-Type", staticFile.type);
  res.setHeader("Content-Length", body.length);
  res.setHeader("Cache-Control", "no-store");
  res.end(body);
}

const server = http.createServer(async (req, res) => {
  setCorsHeaders(req, res);
  if (req.method === "GET" && req.url === "/healthz") {
    sendHealth(res);
    return;
  }

  if (req.method === "GET" && sendSummaryReviewStatic(req, res)) {
    return;
  }

  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    res.end();
    return;
  }

  try {
    if (req.method === "POST" && req.url === "/api/triage-demo/sessions") {
      const authError = requireDemoBearerAuth(req);
      if (authError) {
        res.setHeader("WWW-Authenticate", demoBearerAuthChallenge());
        sendResult(res, authError);
        return;
      }
      sendResult(res, createSession(await readJsonBody(req)));
      return;
    }

    const answerMatch = String(req.url || "").match(/^\/api\/triage-demo\/sessions\/([^/?#]+)\/answers$/);
    if (req.method === "POST" && answerMatch) {
      const authError = requireDemoBearerAuth(req);
      if (authError) {
        res.setHeader("WWW-Authenticate", demoBearerAuthChallenge());
        sendResult(res, authError);
        return;
      }
      sendResult(res, submitAnswer(decodeURIComponent(answerMatch[1]), await readJsonBody(req)));
      return;
    }

    sendResult(res, errorResult(404, {}, "not_found", "Use POST /api/triage-demo/sessions or POST /api/triage-demo/sessions/{session_key}/answers.", { retryable: false }));
  } catch (error) {
    sendResult(res, errorResult(400, {}, "invalid_json", "Request body must be valid JSON.", { retryable: false }));
  }
});

server.listen(PORT, () => {
  console.log(`AI triage demo mock API listening on http://localhost:${PORT}`);
});
