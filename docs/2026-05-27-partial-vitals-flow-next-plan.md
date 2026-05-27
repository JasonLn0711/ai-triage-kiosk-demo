---
id: 2026-05-27-partial-vitals-flow-next-plan
title: "Partial Vitals Flow Next Plan"
date: 2026-05-27
topic: ai-triage
type: execution-plan
status: implemented
source:
  - ../source/2026-05-27-imedtac-teams-ui-option-human-factor/source.md
  - ../decisions/2026-05-27-imedtac-partial-vitals-question-flow-contract.md
  - ../api/lib/triage-demo-contract.js
  - ../demo/fixtures/tachycardia-live-demo.json
---

# Partial Vitals Flow Next Plan

## Recommendation

Treat partial measurement support as a contract hardening task. The demo can
show the clean full-measurement path, while the API/runtime proves that missing
vitals are handled explicitly and safely.

## Current Discussion Reading

imedtac asked how triage questions should behave when the original kiosk flow
allows skipped or single-item measurements. 多寶 gave the working rule:

```text
If a vital-sign item is absent, the question design does not consider that
vital sign.
```

Johnny confirmed the resulting workflow: partial measurement data can still
enter the full question flow. Lauren then reported that the API flow has been
tested without major issue, with UI integration still pending review.

## Implementation Plan

1. Preserve the full-measurement tachycardia lane as the primary customer-demo
   path.
2. Add one partial-vitals fixture, preferably the tachycardia lane with a
   missing optional field such as SpO2 or temperature.
3. Ensure the request payload represents missingness explicitly:

   ```json
   {
     "spo2_percent": {
       "value": null,
       "unit": "%",
       "measurement_status": "skipped",
       "quality_flag": "unavailable",
       "missing_reason": "not_measured"
     }
   }
   ```

4. Update runtime routing so a missing vital value cannot trigger a
   vital-dependent question, reason code, or summary claim.
5. Add contract tests:
   - full-measurement path still reaches `status=summary`;
   - partial-vitals path still reaches `status=summary`;
   - missing vital values are not present as measured facts in
     `staff_review_summary`.
6. After imedtac shares or shows the integrated UI, review:
   - `Question X of Y` progress;
   - `3 x 3` option layout;
   - label-length budget;
   - missing-vital behavior;
   - summary-page handoff after `status=summary`.

## Proposed Reply Direction

For imedtac, the clean reply is:

```text
了解，我們會把「有量到的 vital sign 才進入題目判斷；缺少或跳過的 vital sign 不作為題目觸發條件」當成目前 API/question-flow 的實作原則。Demo 可以走完整量測版本；若現場只有部分測量資料，流程仍可進行完整問答，只是缺少的 vital sign 不會被用來影響問題或 summary 判讀。

Lauren 這邊 API flow 測試目前沒大問題很好。等整合到 UI 後，我們再一起看 option 顯示、進度、summary 導頁與部分 vital sign 情境是否需要微調。
```

## Done Condition

The next gate is complete when a testable partial-vitals fixture exists, the
runtime avoids missing-vital claims, and the integrated UI has a review checklist
for progress, option layout, and summary handoff.

## External-Commitment Check

This implementation pass keeps the external API shape stable:

- no endpoint path changes;
- no request-field rename;
- no response-field rename;
- no new required field for imedtac;
- no new summary surface requirement.

Partial-vitals handling is represented through fixture coverage and existing
summary wording behavior. Missing vital signs are omitted from measured-fact
summary text rather than exposed through a new public response field. If imedtac
wants an explicit machine-readable missing-vital summary field later, treat that
as a recorded API change request before implementation.

## Implementation Result

Implemented on `2026-05-27`:

- added `demo/fixtures/tachycardia-partial-vitals-demo.json`;
- updated runtime summary objective generation so measured facts are built from
  usable session vitals;
- preserved the existing summary payload surface by avoiding new required
  response fields;
- added a contract test confirming a partial-vitals request still reaches
  `status=summary`;
- added a contract test confirming missing SpO2 / temperature values are not
  represented as measured facts in `staff_review_summary.objective`.

Compatibility adjustment:

- A temporary machine-readable `measurement_completeness` field was considered
  during implementation and then removed before final verification because it
  would have changed the externally discussed summary payload shape.

Verification:

```bash
npm test
npm run smoke
git diff --check
```

All three checks passed.
