---
id: 2026-05-26-summary-review-ui-cloud-hosting-assessment
title: "Summary Review UI Cloud Hosting Assessment"
date: 2026-05-26
topic: ai-triage
type: handoff
status: option-b-live-verified-dynamic-handoff-live
audience: internal NYCU / Jason; selective imedtac engineering follow-up
source:
  - ../source/2026-05-26-imedtac-teams-summary-preview-followup/source.md
  - ../source/2026-05-27-duobao-line-implementation-sync/source.md
  - ../source/2026-05-27-imedtac-teams-summary-rwd-qr-followup/source.md
  - ./2026-05-25-imedtac-integration-next-steps.md
  - ../scripts/mock-api-server.js
  - ../app/triage-kiosk/index.html
  - ../app/triage-kiosk/triage-kiosk.js
---

# Summary Review UI Cloud Hosting Assessment

## Recommendation

Yes, NYCU can provide a final summary review UI from the same Render API server.
The selected path is **Option B**: serve a safe static demo-only summary review
surface from `/demo-ui/summary-review/` while keeping the existing two POST API
endpoints unchanged.

Implemented static screen:

```text
app/summary-review/index.html
app/summary-review/fallback.html
app/summary-review/assets/review-your-information-fallback.svg
```

The screen now uses a saved 4:3 SVG image as the deployable fallback artwork.
It does not run browser JavaScript, does not call the token-protected API, and
does not store credentials.

For the next rehearsal, keep the API contract unchanged:

```text
POST /api/triage-demo/sessions
POST /api/triage-demo/sessions/{session_key}/answers
```

The summary UI is an additional demo visual surface, not a third API endpoint
that imedtac must integrate.

## Current Technical State

- The Render service currently starts `node scripts/mock-api-server.js`.
- That server exposes `/healthz`, CORS preflight, `POST /api/triage-demo/sessions`,
  and `POST /api/triage-demo/sessions/{session_key}/answers`.
- It now serves the summary-review static surface under
  `/demo-ui/summary-review/` from a narrow allowlist of files.
- It also serves the required shared stylesheet at `/demo-ui/shared/styles.css`.
- It does not serve arbitrary `app/` files.
- The repo already has a static frontend prototype under `app/triage-kiosk/`.
- `npm run build` copies `app/`, `core/`, and `demo/` into `dist/` for static
  hosting, and `vercel.json` is already configured for `dist/`.

## Live Verification On 2026-05-26

Current result: the demo summary review page is **live on Render**.

Verified URLs:

| URL | Result | Reading |
| --- | --- | --- |
| `https://nycu-imedtac-triage-demo-api.onrender.com/healthz` | HTTP `200` JSON | Render API service is live. |
| `https://nycu-imedtac-triage-demo-api.onrender.com/app/summary-review/` | HTTP `404` JSON | Render API server does not serve `app/summary-review/`. |
| `https://nycu-imedtac-triage-demo-api.onrender.com/app/summary-review/index.html` | HTTP `404` JSON | Static summary-review HTML is not exposed on Render. |
| `https://nycu-imedtac-triage-demo-api.onrender.com/demo-ui/summary-review/` | HTTP `200` HTML | The same-Render summary review UI route is live. |
| `https://nycu-imedtac-triage-demo-api.onrender.com/demo-ui/summary-review/assets/review-your-information-fallback.svg` | HTTP `200` SVG | The saved fallback artwork is live. |
| `https://nycu-imedtac-triage-demo-api.onrender.com/api/triage-demo/summary-review/` | HTTP `404` JSON | No API route serves the summary review page. |
| `https://nycu-imedtac-triage-demo-api.onrender.com/source/` | HTTP `404` JSON | Source folders are not exposed. |

The current Vercel deployment referenced in older README material returns HTTP
`401 Authentication Required`, including for `/app/summary-review/`. It should
not be treated as the current external summary-review URL for imedtac. Use the
same-Render `/demo-ui/summary-review/` URL instead.

Local build status:

```text
npm run build
-> dist/app/summary-review/index.html
-> dist/app/summary-review/fallback.html
-> dist/app/summary-review/SummaryReview.tsx
-> dist/app/summary-review/assets/review-your-information-fallback.svg
```

This means the static page is buildable and now reachable through the Render
API service's safe demo UI route.

External-commitment reading:

- Jason has already shown the summary-review image to imedtac.
- The image is archived and reproducible locally.
- The live URL is now verified and can be communicated to imedtac as a
  demo-only visual support URL.

## Local Option B Verification On 2026-05-26

Option B has been implemented locally and verified before push.

Local test server:

```text
PORT=4197 DEMO_BEARER_TOKEN=local-smoke node scripts/mock-api-server.js
```

Verified local URLs:

| URL | Result | Reading |
| --- | --- | --- |
| `http://127.0.0.1:4197/healthz` | HTTP `200` JSON | Existing health check remains live. |
| `http://127.0.0.1:4197/demo-ui/summary-review/` | HTTP `200` HTML | Summary-review page is served by the API server. |
| `http://127.0.0.1:4197/demo-ui/shared/styles.css` | HTTP `200` CSS | Required stylesheet is exposed through a safe `demo-ui` path. |
| `http://127.0.0.1:4197/demo-ui/summary-review/assets/review-your-information-fallback.svg` | HTTP `200` SVG | Fallback artwork is exposed. |
| `http://127.0.0.1:4197/source/` | HTTP `404` JSON | Source folders are not exposed. |
| `http://127.0.0.1:4197/handoff/` | HTTP `404` JSON | Handoff folders are not exposed. |
| `POST http://127.0.0.1:4197/api/triage-demo/sessions` without bearer token | HTTP `401` | Protected POST API behavior is unchanged. |

`npm run smoke` now starts the mock API server on a temporary port and checks
the same summary-review HTML/SVG routes plus token-required POST behavior.

## Post-Push Render Verification On 2026-05-26

NYCU pushed the Option B implementation and commitment record to GitHub `main`:

| Commit | Purpose |
| --- | --- |
| `9a46992` | Serve the summary review UI from the Render API server and add smoke coverage. |
| `d13b5c3` | Record the imedtac Teams summary-review commitments and archive the demo image. |

Remote `origin/main` was verified at `d13b5c3`.

Public checks from `2026-05-26 16:08` through `16:20` Asia/Taipei showed:

| URL | Result | Reading |
| --- | --- | --- |
| `https://nycu-imedtac-triage-demo-api.onrender.com/healthz` | HTTP `200` JSON | Existing Render service remains live. |
| `https://nycu-imedtac-triage-demo-api.onrender.com/demo-ui/summary-review/` | HTTP `404` JSON | Render has not yet served the pushed Option B route. |
| `https://nycu-imedtac-triage-demo-api.onrender.com/demo-ui/summary-review/index.html` | HTTP `404` JSON | The latest static-route code is not active on the public service. |
| `https://nycu-imedtac-triage-demo-api.onrender.com/source/` | HTTP `404` JSON | Source folders remain unexposed. |

Interpretation:

```text
GitHub main contains the implementation.
The public Render service is still running the previous deployed code, or the
new deploy has not completed successfully.
Do not notify imedtac that the summary URL is ready until this route returns
HTTP 200.
```

Follow-up public checks at `2026-05-26 16:29` Asia/Taipei showed the route
became live:

| URL | Result | Reading |
| --- | --- | --- |
| `https://nycu-imedtac-triage-demo-api.onrender.com/demo-ui/summary-review/` | HTTP `200`, `text/html`, `10267` bytes | Summary review HTML is live and contains `Review Your Information`. |
| `https://nycu-imedtac-triage-demo-api.onrender.com/demo-ui/summary-review/assets/review-your-information-fallback.svg` | HTTP `200`, `image/svg+xml`, `13940` bytes | Fallback artwork is live and contains `Review Your Information`. |
| `https://nycu-imedtac-triage-demo-api.onrender.com/healthz` | HTTP `200` JSON | API service remains live. |
| `https://nycu-imedtac-triage-demo-api.onrender.com/source/` | HTTP `404` JSON | Source folders remain unexposed. |

External message gate:

```text
The URL is ready to share as demo-only visual support.
The API contract remains the original two POST endpoints.
This URL is not a third API endpoint.
```

Dynamic handoff update:

```text
GitHub main now contains fixed-URL dynamic handoff support in commits
32dca85 and 722ca72. Public Render checks at 2026-05-26 17:44 Asia/Taipei
confirmed the deployed HTML now contains nycu_summary_review_payload and
window.name. The dynamic fixed-URL handoff is active on the public service and
ready for the imedtac direct-navigation snippet.
```

Current dynamic-handoff public verification:

| URL | Result | Reading |
| --- | --- | --- |
| `https://nycu-imedtac-triage-demo-api.onrender.com/demo-ui/summary-review/` | HTTP `200`, `text/html`, `11682` bytes | Summary review HTML is live and contains `nycu_summary_review_payload` plus `window.name`. |
| `https://nycu-imedtac-triage-demo-api.onrender.com/demo-ui/summary-review/SummaryReview.tsx` | HTTP `200`, `text/plain`, `23743` bytes | Dynamic rendering component is live and contains `summaryPayload` plus `buildReviewModel`. |
| `https://nycu-imedtac-triage-demo-api.onrender.com/demo-ui/summary-review/assets/review-your-information-fallback.svg` | HTTP `200`, SVG | Fallback artwork remains live. |
| `https://nycu-imedtac-triage-demo-api.onrender.com/healthz` | HTTP `200` JSON | API service remains live. |
| `https://nycu-imedtac-triage-demo-api.onrender.com/source/` | HTTP `404` JSON | Source folders remain unexposed. |

## Mobile RWD / QR Follow-Up On 2026-05-27

Johnny asked in Teams whether the final result preview page currently has basic
RWD because imedtac will scan a QR code to view the result. Jason asked whether
the demo day needs mobile preview and whether NYCU needs to coordinate any
specific process. Johnny clarified:

```text
如果不動到我們原先的流程，會是用QRCode掃描，所以才想確認mobile顯示是否沒問題

另外我們也在討論是否可以demo時，直接點QRCode開新網頁介紹

因為是連接到陽交大開發的服務，只需要線上stand by，如果測試時如果有問題可以聯繫就好
我們敲定時間後會再通知大家
```

Implementation reading:

- The summary-review page must support QR-code direct navigation as a normal web
  page, not only iframe embedding.
- Basic mobile/tablet RWD is part of the demo support path.
- NYCU's default demo-day role is online standby troubleshooting after imedtac
  confirms the time.

Jason then replied in Teams that three phone/tablet layouts had been tested
without bleeding / overflow, attached three screenshots, and summarized the
related option-label and partial-vitals work:

```text
目前測試三種手機與平板的版面，都沒有出血情形，再請 Johnny 確認

另外：
1. 已依照 Johnny 提供的 human factor / UI 規格，縮短 tachycardia demo flow 中部分較長的選項文字，讓選項更符合 3x3 版面與字數限制。
2. 這次只調整畫面顯示的 option label，其他結構維持不變。
3. 也已補上 partial vital sign 情境的測試，若只有部分量測資料，流程仍可繼續完成問答；缺少或跳過的 vital sign 不會被用來產生題目判斷或 summary 中的量測事實。（問答修正的部分，會再與許醫師討論是否修改）
```

Committed implementation:

| Commit | Purpose |
| --- | --- |
| `ba41739` | Add the mobile summary-review layout and preserve the desktop review canvas. |

Local verification before push:

| Viewport | Result | Reading |
| --- | --- | --- |
| `390 x 844` | pass; no horizontal overflow | phone QR viewing path can read the page by vertical scroll. |
| `412 x 915` | pass; no horizontal overflow | larger phone QR viewing path can read the page by vertical scroll. |
| `768 x 1024` | pass; no horizontal overflow | tablet layout uses the responsive measurement grid. |
| `1366 x 900` | pass; no horizontal overflow | desktop keeps the existing fixed demo visual direction. |

Change-control boundary:

- Keep `/demo-ui/summary-review/` suitable for QR-code direct navigation.
- Preserve mobile/tablet support after future visual edits.
- Treat any future removal of RWD, URL changes, or QR-path behavior changes as
  external-commitment changes that require notice to imedtac.
- Keep option-label shortening as display-only unless a recorded change request
  updates option IDs, answer payload shape, or question-flow semantics.
- Keep missing vital signs out of routing and summary facts unless imedtac and
  許醫師 review a revised behavior.

Internal LINE synchronization with 多寶 on `2026-05-27` aligns with this
boundary:

- Jason told 多寶 that the current imedtac-facing integration surface is the
  Render API / demo service, while the code repo itself has not been shared with
  imedtac.
- 多寶 asked whether future modifications can be sent as PRs; Jason agreed to
  coordinate that path.
- 多寶 raised the future idea of AI automatically generating suitable options.
  That remains an internal design topic, not an external API or demo-runtime
  commitment.
- Jason told 多寶 that question-answer corrections will still be discussed with
  許醫師 before changing the externally used wording.

## Ben QR Session-Key Request On 2026-05-27

Ben replied in Teams that one PM requirement is to let users scan a QR code on a
phone to open the summary page. He noted that the current `window.name` handoff
does not fit QR-code scanning from another device/browser context, and that the
full summary response is too large to put into a QR-code URL. He asked whether
the URL can carry only a `session_key` to display the summary page, and how long
the `session_key` would remain valid.

First-principles reading:

- The user need is a small QR URL, not a new question flow.
- The shared trust boundary is stable integration behavior. The existing two
  POST endpoints should remain unchanged.
- `window.name` remains the lightest direct-click / same-tab handoff.
- QR scanning from a phone needs a server-side lookup key because the phone does
  not inherit the kiosk browser's `window.name`.

Recommended lightweight design:

```text
iMVS completes Endpoint 1 / Endpoint 2 as already agreed.
Endpoint 2 reaches status=summary and includes session_key + session_expires_at.
iMVS builds a QR URL:
  /demo-ui/summary-review/?session_key=<session_key>
The summary page reads the session_key.
The summary page calls a read-only NYCU route:
  GET /api/triage-demo/sessions/{session_key}/summary
NYCU returns the existing status=summary payload only if the session is summary_ready and not expired.
```

Why this is the smallest compatible bridge:

- It avoids putting the full payload in the QR code.
- It keeps the current `status=summary` response shape.
- It does not change Endpoint 1 or Endpoint 2.
- It reuses the existing summary-review page and `SummaryReview.tsx` renderer.
- It uses the existing `session_expires_at` value as the answer to Ben's expiry
  question. Current demo runtime TTL is `30` minutes from session creation.

Implemented bridge:

```text
GET /api/triage-demo/sessions/{session_key}/summary
/demo-ui/summary-review/?session_key=<session_key>
```

Runtime behavior:

- Endpoint 1 / Endpoint 2 remain the question-loop contract.
- The QR route is a read-only display helper for already completed demo
  sessions.
- The backend now generates non-guessable URL-safe random `session_key` values
  instead of sequential demo keys.
- The summary page first supports the existing same-tab `window.name` handoff;
  if no handoff exists, it reads `?session_key=` and fetches the read-only
  summary route from the same Render origin.
- The route returns summary content only when the session is `summary_ready`.
- The route returns a clear error state when the session is active, missing,
  expired, or unknown.
- The `session_key` validity remains aligned to `session_expires_at`; current
  demo runtime validity is `30` minutes from session creation.
- Current demo storage is the Node process in-memory session map. This is
  sufficient for rehearsal and QR demo use while the Render instance remains
  alive; a Render restart invalidates in-memory sessions. If the workflow needs
  persistence across restarts or multiple instances, move the summary store to
  Redis / KV / DB as a separate deployment decision.
- Bearer tokens and full payloads stay out of the QR URL.
- For synthetic demo data, this `session_key` URL lookup is the lightest
  compatible bridge. For any real patient-data path, URL-based summary access
  needs a stronger access-control decision.

Communication control:

- Tell Ben / imedtac that this is an added read-only QR-display helper before
  they implement against it as a shared integration dependency.
- Keep describing the two POST endpoints as the unchanged question-loop API.

Suggested reply:

```text
Ben 你好，理解，QR code 這個情境用 window.name 確實不適合，因為手機掃 QR code 會是另一個 browser context，也不適合把完整 payload 放進 URL。

最輕量的做法是：保留目前 Endpoint 1 / Endpoint 2 不變，另外補一個 read-only 的 summary lookup 給 QR code 使用。iMVS 在拿到 status=summary 後，用 session_key 產生：

https://nycu-imedtac-triage-demo-api.onrender.com/demo-ui/summary-review/?session_key=<session_key>

summary page 再用這個 session_key 向 NYCU backend 讀取已完成的 staff_review_summary 來顯示。這樣 QR code 只需要放短 URL，不需要塞完整 payload。

session_key 是由 NYCU backend 產生的 URL-safe random token，不是 Render 生成，也不是 sequential id。有效期跟目前 API 回傳的 session_expires_at 對齊；現在 demo runtime 是 session 建立後 30 分鐘。

這個方式會是額外的 read-only 顯示橋接，不會改目前兩個 POST endpoint、answer payload、option id 或 summary response shape。summary 只有在 session_state=summary_ready 且 session_key 未過期時才會顯示。現在 demo 版本的 session 存在 NYCU backend runtime 記憶體中，足夠支援 rehearsal / demo QR 使用；若之後要支援跨重啟或更長時間保存，再升級到 Redis / KV / DB。
```

Local verification on `2026-05-27`:

| Check | Result | Reading |
| --- | --- | --- |
| `npm test` | pass | Unit and contract tests include random session key and read-only summary lookup behavior. |
| `npm run smoke` | pass | Mock server exposes the summary UI and rejects unknown summary session keys. |
| `npm run build` | pass | Static UI remains buildable. |
| `git diff --check` | pass | No whitespace errors in the patch. |
| QR-style page at `390 x 844` | pass | `?session_key=` summary page renders without horizontal overflow. |

## Feasible Hosting Options

### Option A: Keep Render API, host UI as static site

Use Vercel or another static host for the summary review UI, and let it call the
Render API.

Best for:

- fastest low-risk demo screen,
- preserving the current Render API service unchanged,
- avoiding accidental changes to the API rehearsal environment.

Controls:

- add the UI origin to the Render CORS allowlist,
- do not put the bearer token in a Git-tracked file,
- if a browser UI calls the token-required API directly, treat the token as a
  demo credential only and rotate it after rehearsal.

### Option B: Serve API and UI from the same Render service

Extend `scripts/mock-api-server.js` to serve static files such as:

```text
/demo-ui/
/demo-ui/summary-review/
```

Best for:

- one public base URL for both API and review UI,
- avoiding cross-origin friction,
- quick internal rehearsal.

Controls:

- keep existing API routes unchanged,
- do not expose source, handoff, docs, planning, decisions, or credentials,
- label the page as `demo-only staff-review summary`,
- keep POST endpoints protected by bearer token if `DEMO_BEARER_TOKEN` is set.

### Option C: Static final screen only

Export the final summary review screen as static HTML or screenshots, using the
known tachycardia summary payload.

Best for:

- customer-demo backup,
- no token exposure in browser code,
- simplest path if imedtac only needs visual support.

Controls:

- clearly label as synthetic-data demo,
- avoid diagnosis, treatment, final triage level, or production HIS / EMR /
  FHIR writeback claims.

## Product Reading

Johnny's `2026-05-26` Teams clarification means:

```text
The real product path may send summary content into HIS.
The demo needs a visible final screen only for explanation.
imedtac does not need to build a separate preview page now.
NYCU-provided prototype / final-screen material can support the demo.
```

So the right next action is not to ask imedtac to implement a new UI. The right
next action is for NYCU to provide one polished final summary review surface,
plus the exact JSON payload behind it.

## External Commitment Boundary

Jason has already sent the summary-review image in Teams at `2026-05-26 13:52`
and wrote `畫面大致呈現如上`. Treat that as the approximate visual-support
baseline for the demo summary page.

Implementation implications:

- Keep Endpoint 2 as `status=summary` plus `staff_review_summary`.
- Keep the summary page positioned as demo introduction / staff-review support,
  not a production HIS / EMR / FHIR writeback surface.
- Keep the visible content aligned with the tachycardia demo values already
  shown unless imedtac is notified of a different first rehearsal case.
- If NYCU changes the display route from static prototype support to an
  interactive hosted page, or materially changes the wording / visual structure
  already shown, record the change and notify imedtac before either side
  implements against the new route.

## Selected Implementation Choice

Current selected choice: Option B.

```text
Same Render service
-> existing API remains under /api/triage-demo/
-> summary visual support page is served at /demo-ui/summary-review/
-> Endpoint 2 summary payload can be handed to that fixed page by same-tab
   window.name before navigation; the page clears the handoff after reading
-> required shared stylesheet is served at /demo-ui/shared/styles.css
-> source, handoff, docs, planning, decisions, credentials, and arbitrary app
   files are not exposed
```

Target public URL after Render redeploy:

```text
https://nycu-imedtac-triage-demo-api.onrender.com/demo-ui/summary-review/
```

Implemented tasks:

1. Extended `scripts/mock-api-server.js` to serve only the safe static summary UI
   under `/demo-ui/summary-review/`.
2. Served required assets from `app/summary-review/` and `app/shared/styles.css`;
   do not expose `source/`, `handoff/`, `docs/`, `planning-bridge/`,
   `decisions/`, `.git/`, credentials, or arbitrary filesystem paths.
3. Kept existing POST API routes and bearer-token behavior unchanged.
4. Added smoke coverage for:
   - `GET /demo-ui/summary-review/` returns `text/html`;
   - `GET /demo-ui/summary-review/assets/review-your-information-fallback.svg`
     returns SVG;
   - protected POST endpoints still require bearer token when configured.
5. Added fixed-URL dynamic rendering support:
   - iMVS can set `window.name` to a JSON envelope before navigating to the
     fixed summary URL;
   - the page accepts only a `status=summary` payload with
     `staff_review_summary`;
   - the page clears `window.name` immediately after reading;
   - the page does not put vital signs or answers in the URL query string.

Recommended direct-navigation handoff:

```javascript
if (response.status === "summary") {
  window.name = JSON.stringify({
    type: "nycu_summary_review_payload",
    payload: response
  });
  window.location.href =
    "https://nycu-imedtac-triage-demo-api.onrender.com/demo-ui/summary-review/";
}
```

This keeps the URL fixed, avoids iframe-only dependency, avoids query-string
data exposure, and preserves the two POST endpoint API contract.

Remaining deployment tasks:

1. Commit and push the change to `main`, the branch Render deploys from.
   - Completed with `9a46992` and `d13b5c3`.
2. Trigger or wait for Render redeploy.
   - Completed; public route returned HTTP `200` at `2026-05-26 16:29`
     Asia/Taipei.
3. Verify:

```text
curl -I https://nycu-imedtac-triage-demo-api.onrender.com/demo-ui/summary-review/
curl -I https://nycu-imedtac-triage-demo-api.onrender.com/demo-ui/summary-review/assets/review-your-information-fallback.svg
curl https://nycu-imedtac-triage-demo-api.onrender.com/healthz
```

4. After verification, notify imedtac that this is a demo-only visual support
   URL for the summary-review screen and that the API contract remains the same
   two endpoint paths.
   - Ready to send.

Use Option A if we want separation between the stable API service and the visual
demo screen:

```text
Render: API
Vercel/static host: summary review UI
```

For immediate demo reliability, prepare Option C as a fallback screenshot or
static HTML copy even if Option A or B is implemented.

## Acceptance Criteria

- The page displays the final tachycardia staff-review summary from the same
  field names used in Endpoint 2.
- The fixed URL can render dynamic content from a one-time `status=summary` /
  `staff_review_summary` browser handoff without adding a third API endpoint.
- The page states `staff-review intake support`, `human review workflow`, and
  `synthetic-data demo context`.
- The page does not display diagnosis, treatment advice, final triage level, ECG
  order, disposition, or production HIS / EMR / FHIR writeback claims.
- The page does not store or expose bearer tokens, API keys, private links, or
  real patient data in Git, screenshots, logs, or visible browser code.
- If the page calls the API directly from a browser, CORS and demo-token handling
  are explicitly rehearsed and the token is rotated afterward if needed.
