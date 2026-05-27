---
id: 2026-05-27-imedtac-teams-summary-rwd-qr-followup
title: "imedtac Teams Summary RWD And QR Follow-Up"
date: 2026-05-27
topic: ai-triage
type: source
status: active
channel: Microsoft Teams
confidentiality: engineering-coordination-local-only
source_note: user-provided Microsoft Teams screenshots on 2026-05-27
related:
  - ../2026-05-26-imedtac-teams-summary-preview-followup/source.md
  - ../2026-05-27-imedtac-teams-ui-option-human-factor/source.md
  - ../../handoff/2026-05-26-summary-review-ui-cloud-hosting-assessment.md
  - ../../decisions/2026-05-22-api-contract-freeze-and-change-control.md
  - ../../docs/source-index.md
---

# imedtac Teams Summary RWD And QR Follow-Up

## Source Boundary

This note preserves the Microsoft Teams discussion provided by Jason on
`2026-05-27` about summary-preview responsive layout, QR-code access, rehearsal
standby expectations, and Jason's already-sent implementation update. It is a
screenshot-based working record, not a native Teams export.

Treat this as an external engineering-commitment record. Jason has already
replied in the Teams channel, so the implementation should follow the committed
statements unless NYCU records the proposed change and explicitly discusses it
with imedtac first.

This record does not add a new clinical claim, a production HIS / EMR / FHIR
writeback commitment, a diagnostic function, or permission to store credentials
or private links in tracked files.

## Channel

- Platform: Microsoft Teams
- Chat name: `AI Triage 討論 w/ 陽交大`
- Organization marker visible in Teams: `imedtac.com`
- Participants visible / referenced:
  - Johnny Fang 方偉翰, imedtac Corp.
  - Ben Siu 蕭銳輝, imedtac Corp.
  - Jason Lin
  - 多寶 許
  - Lauren Wang 王瑋蓉, imedtac Corp.

## Visible / User-Provided Conversation Transcript

The following transcript is reconstructed from the visible screenshots. Line
breaks preserve the communicated meaning rather than Teams UI wrapping.

```text
[Johnny Fang 方偉翰, imedtac Corp.; Today 3:08 PM context visible above]

Lauren Wang 王瑋蓉, imedtac Corp.:
我測試完API整個流程，目前沒有大問題 但還沒看過整合到UI中，若有需要調整再煩請各位協助~ 感謝

[Johnny Fang 方偉翰, imedtac Corp.]

Jason Lin 想問最後的結果預覽頁目前有基本的RWD嗎? 我們會掃QRcode看結果 @

[Jason Lin; 2026-05-27 3:42 PM]

了解，當天需要用 mobile 來預覽嗎？

[Jason Lin; 2026-05-27 3:43 PM]

另外想請問，當天有沒有我們需要配合的流程？

[Johnny Fang 方偉翰, imedtac Corp.; reply to Jason's 3:42 PM message]

如果不動到我們原先的流程，會是用QRCode掃描，所以才想確認mobile顯示是否沒問題

另外我們也在討論是否可以demo時，直接點QRCode開新網頁介紹

[Johnny Fang 方偉翰, imedtac Corp.; reply to Jason's 3:43 PM message]

因為是連接到陽交大開發的服務，只需要線上stand by，如果測試時如果有問題可以聯繫就好
我們敲定時間後會再通知大家

[Jason Lin]

目前測試三種手機與平板的版面，都沒有出血情形，再請 Johnny 確認

[Jason Lin attached three mobile/tablet summary review screenshots]

[Jason Lin]

另外：
1. 已依照 Johnny 提供的 human factor / UI 規格，縮短 tachycardia demo flow 中部分較長的選項文字，讓選項更符合 3x3 版面與字數限制。
2. 這次只調整畫面顯示的 option label，其他結構維持不變。
3. 也已補上 partial vital sign 情境的測試，若只有部分量測資料，流程仍可繼續完成問答；缺少或跳過的 vital sign 不會被用來產生題目判斷或 summary 中的量測事實。（問答修正的部分，會再與許醫師討論是否修改）

[Jason Lin]

這兩週適逢學校的期末考，我們回覆可能會稍慢，如有需要，請直接 tag 我們，謝謝大家

[Johnny Fang 方偉翰, imedtac Corp.; edited reply quoting Jason's mobile/tablet message]

太棒了 謝謝 辛苦了~~

[Ben Siu 蕭銳輝, imedtac Corp.; visible timestamp: 5:55 PM, quoting Jason's 2026-05-26 5:52 PM summary-review URL message]

Jason Lin 你好, PM 的其中一個需求是用 QR Code 讓使用者用手機 scan 來打開 summary 頁
目前利用 window.name 來帶資料這個做法好像沒辦法用 QR Code 來實現, 而且 QR Code 也沒辦法把整個 payload 放進去, 因為 response 實在是太大了

有沒有可能在 url 裡帶 session key 就可以顯示 summary 頁?

如果可以, 請問 session key 的有效期是多久?

[Jason Lin; Teams reply after Ben's QR / session_key question]

hi Ben,

目前思考，保留 Endpoint 1 / Endpoint 2 不變，另外補一個 read-only 的 summary lookup 給 QR code 使用。iMVS 在拿到 status=summary 後，用 session_key 產生：

https://nycu-imedtac-triage-demo-api.onrender.com/demo-ui/summary-review/?session_key=<session_key>

summary page 再用這個 session_key 向 NYCU backend 讀取已完成的 staff_review_summary 來顯示。

session_key 有效期跟目前 API 回傳的 session_expires_at 對齊（現在 demo runtime 是 session 建立後 30 分鐘）。 summary 只有在 session_state=summary_ready 且 session_key 未過期時才會顯示。

Ben 覺得這樣如何？
```

## Working Extraction

### Confirmed / Actionable

- imedtac expects the result preview page to work through QR-code scanning in
  the original flow.
- Johnny's reason for asking about RWD is that the user may scan a QR code and
  view the result on a mobile device.
- imedtac is also discussing whether, during the demo, they can directly click
  the QR code and open a new web page for explanation.
- For the rehearsal/demo support workflow, imedtac does not ask NYCU to operate
  the kiosk flow directly. NYCU should be online and available for standby
  support, and imedtac will notify the team after the time is finalized.
- Jason replied that three phone/tablet layouts had been tested and showed no
  bleeding / overflow.
- Jason attached three responsive summary-review screenshots in Teams for
  Johnny to confirm.
- Jason also reported that NYCU shortened some long tachycardia demo-flow
  option labels according to Johnny's human-factor / UI specification.
- Jason stated that the option-label update only changes visible display labels
  and keeps the other structure unchanged.
- Jason stated that NYCU added partial-vital-sign testing. When only partial
  measurement data is available, the flow can still complete the Q&A; missing
  or skipped vital signs are not used to generate question-routing judgments or
  measurement facts in the summary.
- Jason explicitly added that question-answer wording corrections will still be
  discussed with 許醫師 before modification.
- Jason notified imedtac that NYCU may respond more slowly during the school
  final-exam period and asked them to tag the team directly if needed.
- Johnny acknowledged the update positively and thanked the team.
- Ben raised a QR implementation constraint: `window.name` works for same-tab
  browser handoff, but it does not map cleanly to a QR-code scan from another
  device.
- Ben also identified that putting the full summary response payload into a QR
  URL is not feasible because the response is too large.
- Ben asked whether the summary page can be displayed by putting only
  `session_key` in the URL.
- Ben asked how long the `session_key` remains valid if that path is possible.
- Jason replied that NYCU's current direction is to preserve Endpoint 1 /
  Endpoint 2 and add a read-only summary lookup for QR-code use.
- Jason told Ben that after iMVS receives `status=summary`, iMVS can generate
  `/demo-ui/summary-review/?session_key=<session_key>`.
- Jason told Ben that the summary page would use `session_key` to read the
  completed `staff_review_summary` from NYCU backend.
- Jason told Ben that `session_key` validity follows the API-returned
  `session_expires_at`, currently `30` minutes after session creation in demo
  runtime.
- Jason told Ben that the summary displays only when
  `session_state=summary_ready` and the `session_key` is not expired.
- Jason ended the message by asking Ben whether this approach works for him.

### External Commitments Created By Jason's Replies

The Teams replies create the following implementation commitments:

1. The summary review page should keep basic mobile/tablet RWD support for the
   QR-code viewing path.
2. NYCU should preserve the reported result that tested phone/tablet layouts do
   not show bleeding / horizontal overflow. If a later change breaks this, it is
   a regression against a stated Teams reply.
3. The human-factor label update should remain a display-label change only:
   stable option IDs, answer payload structure, API fields, and question-flow
   semantics should not change silently.
4. Partial-vital support should preserve the committed behavior: missing or
   skipped vital-sign values do not drive question routing and do not appear as
   measured facts in the summary.
5. Any future question-answer wording correction tied to the clinical content
   should be discussed with 許醫師 before changing the externally used wording.
6. NYCU's demo-day role is online standby support unless imedtac later requests
   a different support workflow.
7. NYCU should answer Ben's `session_key` / QR-code question without changing
   the already shared two-POST API contract silently. A URL-session-key summary
   path would be an added read-only summary-display bridge, not a replacement
   for Endpoint 1 / Endpoint 2.
8. Jason has now externally proposed the QR `session_key` bridge to Ben in
   Teams. NYCU should preserve the proposed shape unless a later Teams reply or
   recorded change request updates it: Endpoint 1 / Endpoint 2 remain unchanged;
   QR uses a read-only summary lookup; iMVS builds the summary-review URL from
   `session_key` after `status=summary`; TTL follows `session_expires_at`
   (`30` minutes in the current demo runtime); display requires
   `session_state=summary_ready` and an unexpired `session_key`.

### Change-Control Reading

Because Jason already replied in Teams, NYCU should not contradict these points
in later code, docs, or external messages. If a change becomes necessary, record
the current commitment, the proposed change, reason, compatibility impact,
affected tests/artifacts, owner, and target date; then notify and discuss the
change with imedtac before either side implements against the new behavior.

Material changes that require discussion include:

- changing the public summary-review URL or making it unsuitable for QR-code
  direct navigation;
- removing mobile/tablet support from the summary-review page;
- changing option IDs, answer payload shape, question-flow semantics, or API
  field names while presenting the change as a display-label-only update;
- using missing vital-sign values for question routing or summary facts;
- changing clinical question wording without 許醫師 review when the wording has
  already been shared or used for the demo flow;
- expanding NYCU's demo-day role beyond online standby without confirming the
  revised flow with imedtac.
- changing the implemented read-only `session_key` summary bridge scope,
  expiry, data boundary, or QR behavior after Ben / imedtac has been notified.

## First-Principles Reading Of Ben's QR Question

The scarce resource is integration simplicity under a stable trust boundary.
Ben is not asking NYCU to redesign the question loop; he is asking for a QR
handoff that avoids putting a large JSON payload in the URL and works when the
phone opening the QR code is not the same browser tab that received Endpoint 2.

The current `window.name` handoff is still valid for direct same-tab replacement
or demo-button navigation. It is lightweight because it does not add another
backend read path and does not expose summary data in the URL.

For QR scanning from a separate device, `window.name` is not enough. The
QR-friendly path needs a server-side lookup key:

```text
Endpoint 2 returns status=summary + session_key.
iMVS generates QR URL:
https://nycu-imedtac-triage-demo-api.onrender.com/demo-ui/summary-review/?session_key=<session_key>
Phone opens the URL.
Summary page asks NYCU backend for the summary attached to that session_key.
NYCU backend returns the same demo staff_review_summary if the session is summary_ready and not expired.
```

This should be treated as an optional read-only summary-display bridge. It
should not change the two POST endpoints, answer payloads, option IDs,
idempotency, progress semantics, or `status=summary` response shape.

## Lightweight Recommendation

The smallest convenient path for both teams is:

1. Keep the existing `window.name` handoff as the immediate same-tab/direct-click
   path.
2. Add a read-only summary lookup route for QR use:

```text
GET /api/triage-demo/sessions/{session_key}/summary
```

3. Let the existing summary page accept:

```text
/demo-ui/summary-review/?session_key=<session_key>
```

4. The page fetches the read-only summary route from the same Render origin and
   renders it with the existing `SummaryReview.tsx` component.
5. The `session_key` validity should match the existing `session_expires_at`
   value returned by Endpoint 1 / Endpoint 2. Current demo runtime TTL is `30`
   minutes from session creation.

Implementation status after Jason's follow-up direction:

- The repo now implements this read-only summary bridge locally.
- The bridge preserves Endpoint 1 and Endpoint 2 as the question-loop contract.
- This should be communicated to Ben / imedtac as an added QR-display helper
  before they implement against it as a shared integration dependency.

Implementation controls:

- Return summary only when the session has reached `session_state=summary_ready`.
- Return the existing `invalid_session` / expired-session style error when the
  key is missing, unknown, expired, or not summary-ready.
- Do not put full payload, patient identifiers, bearer tokens, or private values
  in the QR URL.
- Keep this demo-only and synthetic-data scoped. If real patient data is ever
  used, URL-based summary access needs a stronger access-control decision.
- Use non-guessable URL-safe random `session_key` values before relying on
  public QR URLs, even in demo mode.
- Current demo storage is the Node process in-memory session map. This supports
  rehearsal / demo QR use while the Render instance remains alive; a Render
  restart invalidates active demo sessions. Redis / KV / DB should be a separate
  deployment decision only if imedtac needs persistence across restarts or a
  longer retrieval window.

## Suggested Reply To Ben

Status: superseded by Jason's actual Teams reply recorded above. Keep this
section as the internal longer-form reference; the external commitment is the
shorter message Jason actually sent.

```text
Ben 你好，理解，QR code 這個情境用 window.name 確實不適合，因為手機掃 QR code 會是另一個 browser context，也不適合把完整 payload 放進 URL。

最輕量的做法是：保留目前 Endpoint 1 / Endpoint 2 不變，另外補一個 read-only 的 summary lookup 給 QR code 使用。iMVS 在拿到 status=summary 後，用 session_key 產生：

https://nycu-imedtac-triage-demo-api.onrender.com/demo-ui/summary-review/?session_key=<session_key>

summary page 再用這個 session_key 向 NYCU backend 讀取已完成的 staff_review_summary 來顯示。這樣 QR code 只需要放短 URL，不需要塞完整 payload。

session_key 是由 NYCU backend 產生的 URL-safe random token，不是 Render 生成，也不是 sequential id。有效期跟目前 API 回傳的 session_expires_at 對齊；現在 demo runtime 是 session 建立後 30 分鐘。

這個方式會是額外的 read-only 顯示橋接，不會改目前兩個 POST endpoint、answer payload、option id 或 summary response shape。summary 只有在 session_state=summary_ready 且 session_key 未過期時才會顯示。現在 demo 版本的 session 存在 NYCU backend runtime 記憶體中，足夠支援 rehearsal / demo QR 使用；若之後要支援跨重啟或更長時間保存，再升級到 Redis / KV / DB。
```

## Implementation Evidence Already Produced

- Summary-review mobile layout was implemented and pushed in commit
  `ba41739 fix: add mobile summary review layout`.
- The local responsive verification tested:
  - `390 x 844`
  - `412 x 915`
  - `768 x 1024`
  - desktop `1366 x 900`
- The mobile/tablet screenshots preserved locally for Jason's review were saved
  under the user's `Downloads` folder with names beginning
  `ai-triage-summary-rwd-*`.
- Before the push, the repo passed:
  - `npm test`
  - `npm run smoke`
  - `npm run build`
  - `git diff --check`
- QR/session-key bridge implemented in the repo:
  - `GET /api/triage-demo/sessions/{session_key}/summary`
  - `/demo-ui/summary-review/?session_key=<session_key>`
  - backend-generated URL-safe random session keys
  - `30` minute validity aligned to `session_expires_at`
  - `409` before summary readiness, `404` for unknown keys, and `410` for
    expired sessions
- Local verification on `2026-05-27` passed:
  - `npm test`
  - `npm run smoke`
  - `npm run build`
  - `git diff --check`
  - QR-style summary rendering at `390 x 844` without horizontal overflow

## Next-Step Planning

1. Keep the summary-review route stable:
   `https://nycu-imedtac-triage-demo-api.onrender.com/demo-ui/summary-review/`.
2. Keep the QR-code path as direct navigation to a normal web page with
   `?session_key=<session_key>`, while still supporting the existing fixed-URL
   `window.name` handoff from Endpoint 2.
3. Preserve Jason's actual Teams reply to Ben as the working external
   commitment while waiting for Ben's confirmation or revision.
4. After the QR bridge is pushed and Render deploys it, re-check the public URL
   and one QR-style session before asking imedtac to implement against it.
5. Keep partial-vital behavior covered by contract tests.
6. Route any clinical question-answer wording changes through 許醫師 review
   before sending or using revised wording externally.
7. Prepare for demo-day online standby once imedtac confirms the time.
