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
