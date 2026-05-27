---
id: 2026-05-27-ui-option-content-audit-and-next-plan
title: "UI Option Content Audit And Next Plan"
date: 2026-05-27
topic: ai-triage
type: execution-plan
status: implemented
source:
  - ../source/2026-05-27-imedtac-teams-ui-option-human-factor/source.md
  - ../decisions/2026-05-27-imedtac-ui-option-content-contract.md
  - ../api/lib/triage-demo-contract.js
  - ../handoff/api-examples/
---

# UI Option Content Audit And Next Plan

## Recommendation

Move the next implementation pass from "short options by judgment" to a
validated content contract. The current tachycardia lane is close to the imedtac
UI shape, and the next useful change is a focused label-shortening plus
validation pass.

## Active Contract

| Item | Contract |
| --- | --- |
| Layout | `3 x 3` option grid |
| Option count | `2-9` options |
| Single-choice label target | `<= 60` characters |
| Multi-choice label target | `<= 26` characters |
| Visual line count | up to `2` lines |

## Current Audit

Checked files:

- `handoff/api-examples/2026-05-21-start-session-response-question.json`
- `handoff/api-examples/2026-05-21-next-question-response-demo-tachycardia.json`
- `handoff/api-examples/2026-05-21-post-vital-question-response-demo-tachycardia.json`
- `api/lib/triage-demo-contract.js`

Result:

- All checked single-choice API-example labels are within the `60` character
  target.
- All checked question option counts are within the `2-9` option target.
- Several runtime multi-choice labels in `api/lib/triage-demo-contract.js`
  exceed the `26` character target and should be shortened before the next
  imedtac-facing rehearsal payload.

Over-budget runtime multi-choice labels:

| Question / option id | Current label | Current length | Target |
| --- | --- | ---: | ---: |
| `tachy-current-feeling / chest_heavy` | `Chest tightness or heaviness` | `28` | `26` |
| `tachy-current-feeling / burning_sharp_or_not_sure` | `Burning, sharp discomfort, or not sure` | `38` | `26` |
| `tachy-associated-symptoms / sweating_nausea_fatigue` | `Sweating, nausea, or unusual fatigue` | `36` | `26` |
| `tachy-associated-symptoms / dizzy_faint` | `Dizziness, lightheadedness, or fainting` | `39` | `26` |
| `tachy-heart-history-meds / heart_bp_medicine` | `Heart or blood-pressure medicine` | `32` | `26` |
| `tachy-heart-history-meds / no_known` | `No known history / medicine` | `27` | `26` |
| `tachy-heart-history-meds / staff_confirm` | `Not sure, staff should confirm` | `30` | `26` |
| `tachy-medication-allergy-confirm / none_known` | `No known medication allergy` | `27` | `26` |

## Proposed Label Direction

Preserve option ids and shorten only patient-facing labels:

| Option id | Proposed patient-facing label |
| --- | --- |
| `chest_heavy` | `Chest tight or heavy` |
| `burning_sharp_or_not_sure` | `Burning, sharp, or unsure` |
| `sweating_nausea_fatigue` | `Sweating, nausea, fatigue` |
| `dizzy_faint` | `Dizzy or fainting` |
| `heart_bp_medicine` | `Heart or BP medicine` |
| `no_known` | `No known history/meds` |
| `staff_confirm` | `Not sure; ask staff` |
| `none_known` | `No med allergy known` |

Detailed meaning should remain in `summary_effect`, source governance, and
staff-summary wording rather than the option label.

## Execution Plan

1. Update the over-budget labels in `api/lib/triage-demo-contract.js` while
   preserving stable `option.id` values.
2. Add a small contract check for the active tachycardia question sequence:
   `2-9` options, `single_choice <= 60`, and `multi_choice <= 26`.
3. Extend the contract test suite so option-label drift fails locally before a
   rehearsal packet is sent.
4. Run:

   ```bash
   npm test
   npm run smoke
   git diff --check
   ```

5. After the tests pass, prepare one imedtac-facing note that says the
   tachycardia preset now fits the `3 x 3` human-factor option contract.

## Done Condition

The next gate is complete when:

- runtime tachycardia option labels fit the current imedtac budget;
- existing API behavior, option ids, endpoint paths, and field names remain
  stable;
- unit / contract / smoke checks pass;
- no credential, token, patient identifier, or private UI link is stored in the
  repo;
- the updated label wording is shared with imedtac as a human-factor alignment
  update before they rely on it in UI rehearsal.

## External-Commitment Check

This implementation pass preserves the already discussed integration contract:

- endpoint paths stay unchanged;
- auth / CORS behavior stays unchanged;
- `session_key`, progress, idempotency, and summary status behavior stay
  unchanged;
- stable `option.id` values stay unchanged;
- only patient-facing `option.label` wording is shortened to fit Johnny's
  human-factor constraint.

Because label wording may already have been seen in preset question material,
NYCU should explicitly tell imedtac that the option ids are unchanged and only
the visible labels were shortened for the `3 x 3` UI constraint.

## Implementation Result

Implemented on `2026-05-27`:

- shortened the over-budget runtime multi-choice labels in
  `api/lib/triage-demo-contract.js`;
- preserved all stable `option.id` values;
- added a contract test that enforces `2-9` options, `single_choice <= 60`, and
  `multi_choice <= 26`;
- preserved endpoint paths, auth behavior, progress behavior, idempotency
  behavior, and summary status behavior.

Verification:

```bash
npm test
npm run smoke
git diff --check
```

All three checks passed.
