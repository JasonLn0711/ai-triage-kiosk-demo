---
id: 2026-06-05-question-design-and-screening-scope-response-plan
title: "Question-Design And Screening-Scope Response Plan"
date: 2026-06-05
topic: ai-triage
type: response-plan
status: active
source:
  - ../source/2026-06-02-to-2026-06-05-imedtac-teams-question-design-and-screening-scope/source.md
related:
  - ../workstreams/08-june-demo-case-and-integration-plan.md
---

# Question-Design And Screening-Scope Response Plan

## Recommendation

The next imedtac response should lock the `2026-06-15` first-version target
around a bounded dynamic tachycardia demo:

```text
single NYCU test/demo endpoint
-> high-heart-rate scenario
-> answer-sensitive next-question / review-text variation
-> result page generated from the same session's measured values and answers
-> staff-review summary only
```

This directly answers Johnny's concern while preserving the June operating
scope: synthetic-data triage-support intake, not diagnostic triage automation.

## Current Situation

imedtac has connected the workflow to their formal machine and is testing it.
Their test and formal environments both connect to NYCU's same test/demo
environment for now. Johnny accepted this arrangement.

The active demo story remains the previously discussed high-heart-rate /
tachycardia scenario. The integration concern is not the base story; it is that
the current tested path feels too static. Johnny expects the high-heart-rate
scenario to show a bounded but visible dynamic interaction: different data or
answers should produce different next questions and similar but not identical
result pages. He also expects the result-page values to match the measured
values shown in the session.

The customer date around `2026-06-10` was not confirmed in the screenshots.
The working latest first-version target is before `2026-06-15`, with other
customer visits expected after `2026-06-15`. imedtac accepts gradual iteration
if NYCU provides advance notice before deployment / version updates.

## Implementation Response

### Preserve

- Keep one NYCU test/demo environment for both imedtac test and formal machines
  unless a recorded change request creates a second environment.
- Keep the existing June API contract and bearer-token / CORS expectations.
- Keep the active scenario as high-heart-rate / tachycardia.
- Keep output language as `staff_review_summary`, `review_basis`, and
  staff-review handoff support.

### Improve Before First Version

- Make at least one answer branch visibly change the next question path inside
  the tachycardia lane.
- Make at least one answer branch visibly change the final review text while
  keeping the same staff-review boundary.
- Ensure the result page renders current session values, not stale fixture
  values.
- Add a quick browser/API rehearsal case that demonstrates two different
  answer paths and compares their final summaries.
- Notify imedtac before deploying the updated flow.

### Avoid

- Do not introduce diagnosis, formal triage level, treatment advice,
  disposition, department recommendation, or clinical order language.
- Do not add a second production-like environment without an explicit
  environment decision.
- Do not let result-page values come from a separate fixed sample when the
  current session has different measured values.
- Do not expand the June demo into vision/hearing screening.

## Suggested Teams Reply

```text
Johnny 好，我們可以把 6/15 前的版本收斂成「高心跳限定情境下的動態展示版本」：

1. 環境先維持一個 NYCU test/demo endpoint，貴方測試與正式機都先連這個環境。
2. demo story 維持高心跳情境。
3. 我們會調整 tachycardia flow，讓不同回答在限定情境內能看到較明確的下一題或 summary 差異。
4. 結果頁會以同一個 session 的量測值與回答內容產生，避免畫面數據與結果頁數據不一致。
5. 每次上版前我會先在 Teams 提醒，避免你們正式機測試時遇到未預期變動。

6/10 若還不是客戶端確定時間，我們先以 6/15 前完成第一版動態展示作為工作目標；若你們敲定更早的 rehearsal 時間，請直接 tag 我，我會先協調最小可展示版本。
```

## Vision / Hearing Proposal Handling

The 北市聯醫 item should be handled as a new proposal-discovery lane that can
reuse some architecture ideas but should not be merged into the June AI-triage
demo.

Recommended scope language:

```text
視力/聽力的新案子可以先當作 screening-support workflow discovery。我們可以協助定義流程、題庫與上架系統方向，但正式量測項目、設備條件、喇叭或耳機假設、環境限制、結果文字與 HIS 欄位，都需要先有醫師/臨床 owner 與 imedtac project owner 對焦。
```

Discovery questions to ask imedtac:

| Area | Question |
| --- | --- |
| Customer / owner | 北市聯醫目前是否有正式窗口、需求文件、提案時程、預計場域？ |
| Device assumption | 視力是否使用螢幕距離、遮眼、亮度、校正圖卡？聽力是否使用喇叭、耳機、音量校正、背景噪音控制？ |
| Measurement target | 視力要測視力、對比、色覺、散光篩檢，還是只做問卷式風險整理？聽力要做自覺問卷、音頻偵測、語音理解，還是初步導引？ |
| Clinical owner | 哪位醫師判斷哪些項目可以用線上方式做 screening，哪些必須交由正式儀器？ |
| Output boundary | 結果要寫成 screening-support note、門診前主訴整理、或正式檢測結果？ |
| HIS boundary | HIS 串接是提案範圍、demo 範圍，還是未來 production path？ |
| Question system | 題目上架系統要支援版本、科別、語言、審核流程、停用/啟用與回滾嗎？ |

## Immediate TODOs

| Priority | Task | Owner | Target |
| --- | --- | --- | --- |
| P0 | Confirm working date: `2026-06-15` first version unless imedtac confirms an earlier rehearsal. | Jason | next Teams reply |
| P0 | Patch tachycardia answer-path variation so the demo visibly changes next question and/or final review text. | Jason | before first version |
| P0 | Verify summary/result page uses current session measured values and selected answers. | Jason | before first version |
| P0 | Send deployment-time notice before updating the Render demo. | Jason | every version |
| P1 | Ask 多寶 / 許醫師 which tachycardia answer-path differences are clinically meaningful and safe to expose. | Jason + 多寶 | before wording freeze |
| P1 | Prepare two-path rehearsal evidence for imedtac: same HR scenario, two answer paths, different safe summaries. | Jason | before imedtac review |
| P2 | Prepare vision/hearing proposal discovery question list and keep it separate from the June AI-triage demo. | Jason | next planning pass |
| P2 | Ask imedtac for 北市聯醫 formal project owner / contact route once proposal matures. | Jason / imedtac | proposal follow-up |

## Decision Boundary

Dynamic demo behavior is now part of the imedtac-facing expectation. The safe
implementation path is to make variation visible in controlled question routing
and staff-review wording while keeping formal clinical judgment out of the
runtime output.
