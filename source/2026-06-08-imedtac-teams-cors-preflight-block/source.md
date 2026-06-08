---
id: 2026-06-08-imedtac-teams-cors-preflight-block
title: "imedtac Teams CORS Preflight Block During Formal-Machine Test"
date: 2026-06-08
topic: ai-triage
type: source
status: active
channel: Microsoft Teams
confidentiality: engineering-coordination-local-only
source_note: user-provided Microsoft Teams screenshots on 2026-06-08
related:
  - ../../handoff/2026-05-21-imedtac-two-endpoint-api-reply.md
  - ../../handoff/2026-05-25-imedtac-integration-next-steps.md
  - ../../handoff/2026-05-25-render-rehearsal-api-deployment-runbook.md
  - ../../decisions/2026-05-22-api-contract-freeze-and-change-control.md
  - ../../workstreams/08-june-demo-case-and-integration-plan.md
  - ../../docs/source-index.md
---

# imedtac Teams CORS Preflight Block During Formal-Machine Test

## Source Boundary

This note preserves the Microsoft Teams report Jason provided on `2026-06-08`.
The report includes one Teams screenshot and one enlarged browser/devtools
screenshot from imedtac's test. It is a screenshot-based engineering incident
record, not a native Teams export.

This incident does not contain a visible bearer token, API key, private patient
identifier, or live credential. The visible API URL and browser origin are
technical integration evidence for the demo CORS path.

## Channel

- Platform: Microsoft Teams
- Chat name: `AI Triage 討論 w/ 陽交大`
- Organization marker visible in Teams: `imedtac.com`
- Participants visible / referenced:
  - Johnny Fang 方偉翰, imedtac Corp.
  - Jason Lin
  - 多寶 許

## Visible Conversation Transcript

The following transcript is reconstructed from the screenshots. Line breaks
preserve meaning rather than Teams UI wrapping.

```text
[Earlier visible context]

多寶 許:
所以沒有特別的儀器嘛
?

Johnny Fang 方偉翰, imedtac Corp.:
恩恩 對 聽力的部分傾向用原本的喇叭，從範例中有的是需要耳機，所以需要醫師的專業判斷評估是否一定要這個我們可以再討論

多寶 許:
聽力可能只能測個大概，因為詳細要測其實蠻嚴格的

Johnny Fang 方偉翰, imedtac Corp.:
恩恩 了解

[Today 1:20 PM; 2026-06-08]

Johnny Fang 方偉翰, imedtac Corp.:
Hi Jason Lin 剛剛我們在測試的時候發現量完數據會出現錯誤，無法進入Triage流程，想請你們檢查一下，感謝

[Johnny attached screenshot]

[Jason Lin]
好的，收到
```

## Screenshot Evidence

The enlarged browser/devtools screenshot shows:

- iMVS UI is at measurement Step 3, `SpO2`.
- The UI shows a modal:

```text
Oops! Something went wrong
You can choose to skip all questions or restart.
Skip / Restart
```

- Chrome DevTools Network tab shows a failed `sessions` XHR request.
- Console logs show:

```text
Error in measure(), user: , device: O2, error:
Error: SERVICE TIMEOUT
```

- Console then shows a browser CORS error:

```text
Access to XMLHttpRequest at
'https://nycu-imedtac-triage-demo-api.onrender.com/api/triage-demo/sessions'
from origin 'http://127.0.0.1:5174' has been blocked by CORS policy:
Response to preflight request doesn't pass access control check:
No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

- Console shows:

```text
Failed to initialize triage session:
AxiosError: Network Error
...
POST https://nycu-imedtac-triage-demo-api.onrender.com/api/triage-demo/sessions
net::ERR_FAILED
```

## Confirmed Technical Reading

The visible failure is a browser CORS preflight block.

The imedtac frontend origin in this test was:

```text
http://127.0.0.1:5174
```

The NYCU rehearsal API currently allows only these browser origins in code:

```text
http://localhost
http://localhost:5174
```

The relevant runtime file is:

```text
api/lib/triage-demo-contract.js
```

Current code:

```js
const ALLOWED_ORIGINS = new Set(["http://localhost", "http://localhost:5174"]);
```

Because browsers treat `localhost` and `127.0.0.1` as different origins, a page
loaded from `http://127.0.0.1:5174` is not covered by
`http://localhost:5174`. The Render API therefore did not set
`Access-Control-Allow-Origin` for this preflight request, and the browser
blocked the `POST /api/triage-demo/sessions` request before the NYCU API
session could start.

## What Happened

1. imedtac completed or attempted a vital-sign measurement step in the formal
   machine / local frontend flow.
2. The frontend attempted to initialize the NYCU triage session by calling:

```text
POST https://nycu-imedtac-triage-demo-api.onrender.com/api/triage-demo/sessions
```

3. The browser sent a CORS preflight request because the frontend was making a
   cross-origin XHR with JSON / authorization-style headers.
4. The frontend page origin was `http://127.0.0.1:5174`.
5. The NYCU API CORS allowlist did not include `http://127.0.0.1:5174`.
6. The preflight response did not include `Access-Control-Allow-Origin`.
7. The browser blocked the request and reported `net::ERR_FAILED`.
8. The imedtac UI surfaced a generic service timeout / error modal and could
   not enter the AI Triage question flow.

## What This Does Not Yet Prove

This screenshot does not prove that:

- the two-endpoint API contract is wrong;
- the tachycardia question logic failed;
- bearer-token authentication failed;
- the Render service was down;
- the API returned an application-level validation error;
- the iMVS vital payload fields are invalid;
- the `staff_review_summary` or dynamic question flow failed.

The request was blocked at the browser CORS layer before the normal
start-session path could complete.

The "SERVICE TIMEOUT" wording appears to be the imedtac frontend's user-facing
or internal error wrapper after the browser-level CORS failure. It should be
interpreted as a blocked network/API initialization event in this evidence, not
as proof of backend timeout until Render logs or direct API checks show an
actual server-side timeout.

## Relationship To Existing Contract

The existing integration documents already anticipated this exact class of
issue. The first rehearsal CORS origins were:

```text
http://localhost
http://localhost:5174
```

The existing notes also say that if imedtac tests from `127.0.0.1`, LAN IP,
another port, HTTPS domain, or WebView custom origin, imedtac should provide the
actual `Origin` header and NYCU should add that exact origin to the allowlist.

This incident confirms that imedtac's formal-machine frontend used:

```text
http://127.0.0.1:5174
```

Therefore adding this origin is a compatibility update to the CORS allowlist.
It does not require changing endpoint paths, request/response schema,
idempotency behavior, answer payload shape, summary schema, or the
`post_measurement_only` workflow.

## Recommended Fix

Add the confirmed imedtac origin to the NYCU API CORS allowlist:

```text
http://127.0.0.1:5174
```

Implementation update on `2026-06-08`: NYCU added
`http://127.0.0.1:5174` to `ALLOWED_ORIGINS` in
`api/lib/triage-demo-contract.js` and added a contract test covering all three
current browser origins. The remaining steps are Render redeploy, remote
preflight verification, and imedtac retest on the same formal-machine path.

After deployment, verify:

```bash
curl -i -X OPTIONS \
  https://nycu-imedtac-triage-demo-api.onrender.com/api/triage-demo/sessions \
  -H "Origin: http://127.0.0.1:5174" \
  -H "Access-Control-Request-Method: POST" \
  -H "Access-Control-Request-Headers: content-type,authorization"
```

Expected verification:

```text
HTTP/2 204
Access-Control-Allow-Origin: http://127.0.0.1:5174
Access-Control-Allow-Methods: GET, POST, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization
```

After that, run a start-session browser/API check from the same frontend origin
with the existing bearer-token header.

## Immediate Follow-Up Items

| Item | Owner | Target | Status | Note |
| --- | --- | --- | --- | --- |
| Add `http://127.0.0.1:5174` to CORS allowlist. | NYCU / Jason | immediate | code fixed | Compatibility update added in `api/lib/triage-demo-contract.js`. |
| Redeploy Render after the CORS change. | NYCU / Jason | immediate | pending | Required for the public API to send the new CORS header. |
| Verify preflight from `http://127.0.0.1:5174`. | NYCU / Jason | after deploy | pending | Use `OPTIONS /api/triage-demo/sessions`. |
| Ask imedtac whether any other formal-machine origins exist. | Jason / imedtac | before next rehearsal | open | Include LAN IP, HTTPS domain, WebView origin, or other port if used. |
| Ask imedtac to retry the same measurement-to-triage transition after CORS deploy. | Jason / imedtac | after verify | open | Confirms that the flow can reach API-level behavior. |
| If failure remains after CORS fix, inspect Render logs and request payload. | NYCU / Jason | after retry only if needed | open | Next debugging layer: auth, payload validation, timeout, or app error. |

## Suggested Reply

```text
Johnny 好，我看截圖裡 DevTools 的錯誤，這次主要是 CORS preflight 被瀏覽器擋住。

你們這次正式機 frontend 的 Origin 是 `http://127.0.0.1:5174`，但我們前一次依照討論先開的是 `http://localhost` 和 `http://localhost:5174`。瀏覽器會把 localhost 和 127.0.0.1 當成不同 origin，所以這次 request 在進入 NYCU triage session API 前就被 browser 擋掉了。

我們會把 `http://127.0.0.1:5174` 加進 CORS allowlist，重新部署後再用 OPTIONS preflight 驗證一次。這不需要改 endpoint 或 API schema。更新完成後再請你們用同一台正式機重測一次。

如果 CORS 修正後還有錯，我們再看下一層的 Render log / request payload / token / validation error。
```
