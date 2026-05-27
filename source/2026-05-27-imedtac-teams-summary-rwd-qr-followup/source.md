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

## Next-Step Planning

1. Keep the summary-review route stable:
   `https://nycu-imedtac-triage-demo-api.onrender.com/demo-ui/summary-review/`.
2. After Render deploys commit `ba41739`, re-check the public URL on mobile
   widths before telling imedtac that the live page has the updated mobile RWD.
3. Keep the QR-code path as direct navigation to a normal web page, while still
   supporting the existing fixed-URL `window.name` handoff from Endpoint 2.
4. Keep partial-vital behavior covered by contract tests.
5. Route any clinical question-answer wording changes through 許醫師 review
   before sending or using revised wording externally.
6. Prepare for demo-day online standby once imedtac confirms the time.
