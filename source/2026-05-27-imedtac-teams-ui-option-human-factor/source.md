---
id: 2026-05-27-imedtac-teams-ui-option-human-factor
title: "imedtac Teams UI Option And Measurement-Completeness Follow-Up"
date: 2026-05-27
topic: ai-triage
type: source
status: active
channel: Microsoft Teams
confidentiality: engineering-coordination-local-only
source_note: user-provided Microsoft Teams screenshots and message quotations on 2026-05-27
related:
  - ../2026-05-23-to-2026-05-25-imedtac-teams-ui-api-followup/source.md
  - ../2026-05-26-imedtac-teams-summary-preview-followup/source.md
  - ../../decisions/2026-05-27-imedtac-ui-option-content-contract.md
  - ../../decisions/2026-05-27-imedtac-partial-vitals-question-flow-contract.md
  - ../../docs/source-index.md
---

# imedtac Teams UI Option And Measurement-Completeness Follow-Up

## Source Boundary

This note preserves the Microsoft Teams discussion provided by Jason on
`2026-05-27`, including Johnny Fang's UI / human-factor guidance, the later
measurement-completeness question, 多寶's clinical-routing reply, Johnny's flow
confirmation, and Lauren Wang's API/UI integration status. It is a
screenshot-based working record plus user-provided quotations, not a native
Teams export.

Treat this as engineering coordination evidence for the June demo question and
option rendering contract. It is not a clinical source, regulatory source,
production clinical validation, real patient-data approval, or permission to
store credentials or private links.

The Teams screenshot shows that the guidance was also placed in a UI design
comment. The actual linked UI design artifact is not archived in this note
because the link target is not visible in the user-provided screenshot.

## Channel

- Platform: Microsoft Teams
- Chat name: `AI Triage 討論 w/ 陽交大`
- Organization marker visible in Teams: `imedtac.com`
- Participants visible / referenced:
  - Johnny Fang 方偉翰, imedtac Corp.
  - Jason Lin
  - 多寶 許
- Related UI artifact marker visible in screenshot:
  - `AI Triage_0526`
  - UI comment author marker: `UD人因設計`

## Visible / User-Provided Conversation Transcript

The following transcript is reconstructed from the visible screenshots and
Jason's user-provided quotation. Line breaks preserve the communicated meaning
rather than Teams UI wrapping.

```text
[Johnny Fang 方偉翰, imedtac Corp.; visible timestamp in screenshot: 6:48 PM]

Jason Lin 多寶 許
設計上有訂好UI的規範，再麻煩調整產出來的內容，同步也有放在UI中，連結

選項的數量定義為3x3，最大支援9個選項，最少2個選項
> 複選題字數：（支援兩行）英文每行13字，共26字，中文每行6-7字，共12-14字，總字元數大概為26
> 單選題字數：（支援兩行）英文每行30字，共60字，中文每行15-16字，共30-32字，總字元數大概為60

[Jason Lin; visible timestamp in screenshot: Today 10:36 AM, interpreted as 2026-05-27 Asia/Taipei]

沒問題，我們會參考這篇 human factor 來調整。謝謝！

[Today 10:36 AM; later visible Teams context]

Johnny Fang 方偉翰, imedtac Corp.:
想詢問，目前我們原本的流程中有設計跳過或單項測量，demo 時是會全部測量，但想了解若只有部分/單項數據會如何影響 triage 的題目呢?

多寶 許:
我們正在設計題目，如果沒有該項目，題目就會不考慮該項 Vital sign

Johnny Fang 方偉翰, imedtac Corp.:
了解，所以流程想像上是可以有部分測量數據，也可以走完整的題目流程

多寶 許:
式的

[Today 3:08 PM]

Lauren Wang 王瑋蓉, imedtac Corp.:
我測試完API整個流程，目前沒有大問題 但還沒看過整合到UI中，若有需要調整再煩請各位協助~ 感謝
```

## Working Extraction

### Confirmed / Actionable

- imedtac has a defined UI specification for option layout and option text
  length.
- The working option layout is a `3 x 3` grid.
- The UI supports at most `9` options.
- The UI should show at least `2` options for a question.
- Multi-choice option labels support two visual lines:
  - English: about `13` characters per line, about `26` characters total.
  - Chinese: about `6-7` characters per line, about `12-14` characters total.
  - Overall multi-choice option-label budget: about `26` characters.
- Single-choice option labels support two visual lines:
  - English: about `30` characters per line, about `60` characters total.
  - Chinese: about `15-16` characters per line, about `30-32` characters total.
  - Overall single-choice option-label budget: about `60` characters.
- Jason replied that NYCU will reference the human-factor guidance and adjust
  generated content accordingly.
- imedtac's original process includes skip behavior or single-item measurement
  for vital-sign measurement, even though the June demo intends to measure all
  available items.
- Johnny asked how having only partial or single-item vital-sign data would
  affect the triage questions.
- 多寶 clarified the current design principle: when a vital-sign item is not
  available, the question design should not consider that missing vital sign.
- Johnny restated the intended workflow reading: the system can have partial
  measurement data and still run the complete question flow.
- 多寶 confirmed that reading.
- Lauren Wang reported that she has tested the full API flow and currently sees
  no major issue, while UI integration has not yet been reviewed.

### External Commitment

Jason's reply creates an external implementation commitment: NYCU should adjust
the generated question-option content to fit imedtac's human-factor/UI
constraints for the June demo unless a later recorded change request updates the
contract.

### Implementation Reading

This guidance refines the earlier `up to 9 short no-scroll options` agreement.
The new concrete contract is:

```text
option_count: 2-9
layout: 3 x 3 max grid
multi_choice_label_budget: about 26 characters total
single_choice_label_budget: about 60 characters total
line_count: up to 2 visual lines
```

For the June tachycardia lane, the content should prefer short, clinically
plain option labels and move longer explanatory wording into staff-facing
metadata, summary text, or source-governance notes rather than patient-facing
option labels.

For partial vital-sign data, the implementation reading is:

```text
available vital sign -> may influence question routing / summary context
missing vital sign -> do not use that vital sign for routing or summary claims
complete question flow -> still available when only partial measurements exist
```

The demo path remains all-measurement by default, but the API/runtime should
support explicit missing or skipped measurement states without blocking the full
question loop.

## Next-Step Planning

1. Record this UI option constraint as the active content contract.
2. Audit the current tachycardia preset question set, API examples, fixtures,
   and runtime contract for option count and option-label length.
3. Add a lightweight validation gate that flags option counts outside `2-9` and
   option labels above the single-choice / multi-choice budget.
4. Revise labels that exceed the budget while preserving stable `option.id`
   values wherever possible.
5. Re-run contract / unit tests and produce one updated rehearsal payload for
   imedtac review.
6. Record a partial-vitals question-flow decision: demo default uses full
   measurement; runtime accepts partial measurements; missing vitals do not
   trigger vital-dependent questions or claims.
7. Add one fixture / API example for partial vital data to verify that the
   question loop still reaches `status=summary`.
8. After UI integration is visible, review the integrated iMVS screen against
   both option-label constraints and partial-vital behavior.
