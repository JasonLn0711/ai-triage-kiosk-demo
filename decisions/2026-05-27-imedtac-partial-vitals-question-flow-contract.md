---
id: 2026-05-27-imedtac-partial-vitals-question-flow-contract
title: "imedtac Partial Vitals Question Flow Contract"
date: 2026-05-27
topic: ai-triage
type: decision
status: active
source:
  - ../source/2026-05-27-imedtac-teams-ui-option-human-factor/source.md
  - ../source/2026-05-21-imedtac-engineering-sync/meeting-record.md
  - ../source/2026-05-23-to-2026-05-25-imedtac-teams-ui-api-followup/source.md
  - ./2026-05-26-imedtac-external-commitment-governance.md
---

# imedtac Partial Vitals Question Flow Contract

## Decision

The June demo default remains full post-measurement intake:

```text
iMVS completes available measurement
-> NYCU receives measured vital payload
-> NYCU returns question loop
-> NYCU returns staff_review_summary
```

The runtime contract should also support partial or single-item measurement
data. When a vital sign is missing, skipped, failed, or unavailable, NYCU should
not use that missing vital sign to route questions, create reason codes, or make
summary claims. The patient-facing question loop can still proceed using the
available measurements and non-vital-dependent questions.

## Operating Rule

For each vital sign in the request:

| Measurement state | Routing behavior | Summary behavior |
| --- | --- | --- |
| Measured and usable | May influence question selection and staff-review context. | May appear as measured context with unit and value. |
| Missing / skipped / unavailable | Do not use that vital sign for vital-dependent question routing. | Do not claim the value or create a vital-derived concern from it. |
| Quality concern | Treat as review-needed context; prefer staff confirmation over automated interpretation. | Include quality / confirmation wording only when represented in the payload. |

## Demo Boundary

The customer-demo lane may still measure all available vital signs for a smooth
story. Partial measurement support is an integration robustness requirement, not
a stronger clinical claim.

This decision preserves the staff-review boundary:

- no diagnosis;
- no final triage level;
- no autonomous treatment or test order;
- no claim that missing vital signs were inferred.

## Implementation Implication

1. Keep `measurement_state`, `vitals_ready`, per-vital
   `measurement_status`, `quality_flag`, and `missing_reason` meaningful in the
   API request.
2. Add a partial-vitals fixture that omits at least one important vital sign,
   such as SpO2 or temperature, and verify the flow still reaches
   `status=summary`.
3. Make vital-dependent question triggers conditional on the presence of the
   relevant measured value.
4. Keep response progress stable for the current tachycardia lane unless the
   team explicitly introduces a shorter partial-data path.
5. Add contract tests for missing-vital behavior before using it in an
   imedtac-facing rehearsal.

## UI / Integration Status

Lauren Wang reported through Teams on `2026-05-27` that the full API flow has
been tested and currently has no major issue. The integrated UI view has not yet
been reviewed. The next review gate should therefore inspect the iMVS UI
integration, not only the raw API flow.

## Next Gate

The next gate is:

```text
full-measurement tachycardia flow passes
partial-vitals fixture reaches summary
missing vital signs do not drive vital-dependent questions or claims
integrated iMVS UI is reviewed after API flow success
```
