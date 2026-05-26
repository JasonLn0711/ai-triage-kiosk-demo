---
id: 2026-05-26-imedtac-teams-summary-preview-followup
title: "imedtac Teams Summary Preview Follow-Up"
date: 2026-05-26
topic: ai-triage
type: source
status: active
channel: Microsoft Teams
confidentiality: engineering-coordination-local-only
source_note: user-provided Microsoft Teams screenshots and local summary-review image archive on 2026-05-26
related:
  - ../2026-05-23-to-2026-05-25-imedtac-teams-ui-api-followup/source.md
  - ../../handoff/2026-05-25-imedtac-integration-next-steps.md
  - ../../handoff/2026-05-26-summary-review-ui-cloud-hosting-assessment.md
  - ../../app/summary-review/index.html
  - ../../app/summary-review/SummaryReview.tsx
  - ../../docs/source-index.md
---

# imedtac Teams Summary Preview Follow-Up

## Source Boundary

This note preserves the Microsoft Teams conversation visible in the screenshots
provided by Jason on `2026-05-26`, including the demo summary page image sent to
慧誠智醫（imedtac Co., Ltd.）through Teams at `2026-05-26 13:52` Asia/Taipei.
It is a screenshot-based working record, not a native Teams export. Treat it as
engineering coordination evidence for the June demo summary-display surface.

The archived PNG in `assets/` is a local rendering of the same NYCU
summary-review screen shown in the Teams attachment, exported at the visible
Teams-posted image dimensions for long-term repo traceability.

This is not a clinical source, regulatory source, production HIS integration
approval, final API acceptance, real patient-data approval, or permission to
store credentials or live hospital integration details.

## Channel

- Platform: Microsoft Teams
- Chat name: `AI Triage 討論 w/ 陽交大`
- Organization marker visible in Teams: `imedtac.com`
- Participants visible in the screenshot:
  - Johnny Fang 方偉翰, imedtac Corp.
  - Jason Lin
- New outgoing message visible in the `2026-05-26` screenshot:
  - Jason sent the NYCU demo summary page image and wrote
    `畫面大致呈現如上`.

## Visible Conversation Transcript

The following transcript is reconstructed from the visible screenshot. Prior
messages already preserved in
`../2026-05-23-to-2026-05-25-imedtac-teams-ui-api-followup/source.md` are
included only where visible as context for the new reply.

```text
[Earlier visible Jason Lin group reply, 2026-05-25]

完整 endpoint 是：
POST https://nycu-imedtac-triage-demo-api.onrender.com/api/triage-demo/sessions
POST https://nycu-imedtac-triage-demo-api.onrender.com/api/triage-demo/sessions/{session_key}/answers

我們已把 http://localhost 與 http://localhost:5174 加入 CORS allowlist。Demo auth 採簡單 bearer-token gate，request header 格式如下：

Content-Type: application/json
Authorization: Bearer <demo token>

我們已把第一版 tachycardia preset questions 切齊許醫師今天提供的 case。

[Jason Lin, 2026-05-25 20:19; visible as quote context]

嗨 Johnny，考量畫面設計的美觀與一致性，不知道如果由我們這邊提供 ui，會不會影響設備操作的完整性，這可能要再討論一下

[Today 9:53 AM]

Johnny Fang 方偉翰, imedtac Corp.:
[replying to Jason Lin, 2026-05-25 20:19]
嗨 Johnny，考量畫面設計的美觀與一致性，不知道如果由我們這邊提供 ui，會不會影響設備操作的完整性，這可能要再討論一下

由於實際的情境是摘要內容會進 HIS 沒有預覽內容，這個需求是因為為 demo 方便會用來介紹，所以傾向用原本已經有的畫面呈現即可
先前有看到你提供的 prototype，可以先用這些素材輔助，暫不需要另刻畫面

[Today 1:52 PM]

Jason Lin:
了解，謝謝！

[Today 1:52 PM]

Jason Lin:
[replying to Johnny Fang 方偉翰, imedtac Corp., 2026-05-25 17:27]
嗨嗨，我們有現成可以用的預覽頁嗎?

[attached image: NYCU demo summary review page, archived below]
畫面大致呈現如上

[Today after 1:52 PM; exact minute not visible]

Johnny Fang 方偉翰, imedtac Corp.:
這樣沒問題，足夠我們進行說明 謝謝

[Today 2:21 PM]

Ben Siu 蕭銳輝, imedtac Corp.:
收到, 那我們用 iframe 的方式嵌入 summary 頁
再麻煩 Jason Lin 提供 iframe 的 url
感謝

[Today 2:31 PM]

Johnny Fang 方偉翰, imedtac Corp.:
[replying to Ben Siu 蕭銳輝, imedtac Corp., 2026-05-26 14:21]
收到, 那我們用 iframe 的方式嵌入 summary 頁 再麻煩 Jason Lin 提供 iframe 的 url 感謝

Ben Siu 蕭銳輝, imedtac Corp. 你覺得這次demo的做法直接取代QRcode那一頁會比較方便嗎?
就不用有 iframe 的工

[Today after 2:31 PM; exact minute not visible]

Ben Siu 蕭銳輝, imedtac Corp.:
[replying to Johnny Fang 方偉翰, imedtac Corp., 2026-05-26 14:31]
Ben Siu 蕭銳輝, imedtac Corp. 你覺得這次demo的做法直接取代QRcode那一頁會比較方便嗎?
就不用有 iframe 的工

好的
```

## Archived Demo Summary Image

- File:
  `assets/2026-05-26-nycu-summary-review-page-sent-via-teams.png`
- Dimensions: `1492 x 995`
- SHA-256:
  `84fcb79b0fa9aa85699e3b1d5c0d547198812f7a9c193e7ad85d699451fa56d9`
- Render source:
  - `../../app/summary-review/index.html`
  - `../../app/summary-review/SummaryReview.tsx`
- Purpose: preserve the visual demo summary page that Jason sent to imedtac in
  Teams as the approximate final-screen support material.

Visible content inventory:

- Page title: `Review Your Information`
- Patient-facing support copy:
  `Please review your symptoms and measurements.`
- Privacy / sharing block:
  `Your information is secure` and
  `This summary will be shared with our care team.`
- Primary message:
  `Your heart rate was higher than expected.`
- Staff-review guidance:
  `A staff member may review your symptoms and measurements.`
  and `If you feel worse, tell a staff member right away.`
- Measurements shown:
  - Heart Rate: `130 bpm`, status `High`, normal range `60-100 bpm`
  - Oxygen: `98%`, normal range `95-100%`
  - Blood Pressure: `102/68 mmHg`, normal range `< 120/80 mmHg`
  - Temperature: `36.5 °C`, normal range `36.0-37.5 °C`
- Reported symptoms:
  - `Palpitations`: `Feeling your heart racing or pounding`
  - `Chest tightness`: `Pressure or tightness in the chest`
  - `No shortness of breath`
  - `No dizziness`
  - `No fainting`
- Confirmation panel:
  `Please confirm your information with staff.`
  and button label `I will speak with staff`

Scope controls:

- The image uses synthetic demo values from the tachycardia lane.
- The image is visual support for introducing the Endpoint 2 summary result.
- The image does not store credentials, tokens, private links, or real patient
  data.
- The image does not create a production HIS / EMR / FHIR writeback claim.

## Working Extraction

### Confirmed / Actionable

- imedtac clarified that, in the real-world target context, summary content
  would go into HIS and there would not necessarily be separate preview content.
- The preview/display request exists because the demo needs a convenient way to
  introduce the result to viewers.
- Johnny has already seen NYCU-provided prototype material and suggests using
  those materials as support for the demo introduction.
- imedtac does not currently need to build a separate new preview page on its
  side.
- Johnny's practical direction is that the demo can use the NYCU-provided
  prototype / final screen material as the visual support for introducing the
  summary result.
- Jason sent the NYCU demo summary review page image in Teams at
  `2026-05-26 13:52` with the message `畫面大致呈現如上`.
- The sent image should now be treated as the externally communicated visual
  support direction for the demo summary/result explanation.
- Johnny confirmed the image is acceptable and sufficient for imedtac to explain
  the demo summary result.
- Ben asked NYCU / Jason to provide a URL so imedtac can embed the summary page
  with an iframe.
- Johnny then raised that replacing the QR code page directly may be more
  convenient than iframe embedding, and Ben replied `好的`.
- The implementation path should therefore provide one stable hosted summary
  page URL, suitable either for iframe embedding or direct replacement of the QR
  code page, while preserving the original two-endpoint API contract.

## Jason External Statement And Action Record

These items are already communicated to 慧誠智醫（imedtac Co., Ltd.）through
Teams, so they are no longer private draft intentions.

| Time | Jason said / did | External reading | Must preserve unless changed with imedtac |
| --- | --- | --- | --- |
| `2026-05-25 20:09` | Stated that Endpoint 2 returns `status=summary` and `staff_review_summary`. | Summary payload is the stable machine contract for the final demo result. | Do not rename `status=summary` or `staff_review_summary` without a recorded change notice. |
| `2026-05-25 20:09` | Suggested the lowest-engineering path may be iMVS showing the payload in an existing result / preview page, and NYCU could provide a demo-only preview / mock page for fast visual validation. | Summary preview was framed as demo support, not a new production page requirement. | Do not imply imedtac must build a new preview page; do not turn NYCU preview into a third required API integration path without discussion. |
| `2026-05-25 after 20:09` | Told Johnny that NYCU-provided UI may affect visual consistency and device-operation completeness and may need discussion. | UI ownership and display route are coordination-sensitive. | Do not unilaterally replace imedtac's flow with NYCU UI without explicitly aligning with imedtac. |
| `2026-05-26 13:52` | Replied `了解，謝謝！`. | NYCU acknowledged Johnny's direction that the summary display is for demo introduction and that imedtac does not need a separate new preview page right now. | Keep the next step aligned to demo-introduction support, not a new imedtac implementation burden. |
| `2026-05-26 13:52` | Sent the NYCU demo summary review page image in Teams. | The image is now the externally communicated approximate visual direction for the demo summary page. | Preserve the visual support path or notify imedtac before materially changing the final-screen concept, wording surface, or demo image. |
| `2026-05-26 13:52` | Wrote `畫面大致呈現如上`. | The image was communicated as approximate, not pixel-final production UI. | Minor visual polishing is acceptable; material content or workflow changes require explicit notice. |
| `2026-05-26 after 13:52` | Johnny wrote `這樣沒問題，足夠我們進行說明 謝謝`. | imedtac accepted the visual as sufficient for demo explanation. | Provide a hosted page that preserves the same visual support concept. |
| `2026-05-26 14:21` | Ben wrote that imedtac would embed the summary page by iframe and asked Jason to provide the iframe URL. | imedtac now expects a URL from NYCU for the summary page. | Provide a stable URL before telling imedtac the page is ready; do not change this URL later without notice. |
| `2026-05-26 14:31` | Johnny asked whether replacing the QR code page directly would be more convenient than iframe, and Ben replied `好的`. | The hosted page should support either iframe use or direct navigation/replacement in the iMVS demo flow. | Do not make the page depend on iframe-only behavior; keep it as a normal standalone URL. |

Practical implementation rule:

```text
Build and rehearse what Jason already communicated.
If NYCU needs to change the summary payload, display route, visual surface,
auth/CORS assumptions, endpoint behavior, or demo handoff wording after the
Teams messages, record the current commitment, proposed change, reason,
compatibility impact, owner, and target date, then tell imedtac before either
side implements against the new behavior.
```

## 2026-05-26 Option B Decision

NYCU decided to implement the hosted summary page as a same-Render fixed visual
route:

```text
https://nycu-imedtac-triage-demo-api.onrender.com/demo-ui/summary-review/
```

This route is intended to satisfy Ben's request for an embeddable summary page
URL while also supporting Johnny's direct replacement / QR-code-page replacement
direction. It is a demo-only visual support URL. It does not create a third API
endpoint, does not change the two POST endpoint contract, and does not expose
credentials or source/handoff/docs/decision folders.

Compatible dynamic rendering direction:

```text
Fixed URL remains /demo-ui/summary-review/.
Endpoint 2 remains the source of status=summary / staff_review_summary.
If iMVS uses direct page replacement instead of iframe, it can pass the Endpoint
2 summary response through a one-time browser window.name handoff before
navigating to the fixed URL. The page reads and clears that handoff, then
renders the summary values without placing vital signs or answers in the URL.
```

### Commitment / Change-Control Reading

The summary display surface should now be treated as:

```text
Endpoint 2 returns status=summary and staff_review_summary.
The demo may use previously provided NYCU prototype materials to help introduce
or explain the summary/result concept.
imedtac does not need to separately implement a new preview screen right now.
Jason has sent an approximate NYCU summary-review page image to the Teams group
as visual support for that demo explanation.
NYCU may provide this final demo screen / prototype surface for the summary
review view, as long as it remains demo support and does not change the API
contract without explicit coordination.
```

Because Jason previously suggested that NYCU-provided UI could affect visual
consistency and device-operation completeness, Johnny's reply is a useful
alignment point: the lowest-risk path is to keep imedtac from having to build a
new page, while NYCU provides the stable summary payload and final prototype
screen that can support the demo explanation.

## Recommended Next Step

Do not ask imedtac to build a new summary preview page. Instead:

1. Treat Jason's `2026-05-26 13:52` Teams message and the archived PNG as the
   current visual-support record for the demo summary page.

2. If a follow-up clarification is needed, keep it concise:

```text
了解，summary 這段先以 demo 介紹需求處理，慧誠智醫這邊暫不需要另刻新的預覽畫面。
NYCU 會整理 Endpoint 2 的 status=summary / staff_review_summary payload、欄位名稱、範例與 wording，並把先前 prototype / final screen 素材整理成可輔助介紹的畫面。若後續要調整 summary payload 或展示路徑，我們再另外明確對齊。
```

3. Prepare a summary-rendering handoff packet for imedtac engineering:
   - one final tachycardia answer path,
   - one exact Endpoint 2 `status=summary` JSON response,
   - staff-review summary fields and display-order recommendation,
   - scope-control wording for the staff-only demo surface,
   - the archived demo summary page image as the static prototype reference.

4. In the first rehearsal, verify that the NYCU-provided final summary screen
   or prototype material is sufficient for demo explanation, and that it does
   not create a new production UI or HIS-writeback claim.
