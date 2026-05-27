---
id: 2026-05-27-imedtac-ui-option-content-contract
title: "imedtac UI Option Content Contract"
date: 2026-05-27
topic: ai-triage
type: decision
status: active
source:
  - ../source/2026-05-27-imedtac-teams-ui-option-human-factor/source.md
  - ../source/2026-05-23-to-2026-05-25-imedtac-teams-ui-api-followup/source.md
  - ./2026-05-26-imedtac-external-commitment-governance.md
---

# imedtac UI Option Content Contract

## Decision

The June demo question payloads should fit imedtac's current human-factor and UI
option-rendering contract:

| Constraint | Active contract |
| --- | --- |
| Option layout | `3 x 3` grid |
| Minimum options per question | `2` |
| Maximum options per question | `9` |
| Multi-choice option label | Up to two visual lines; about `26` total characters |
| Multi-choice English label | About `13` characters per line |
| Multi-choice Chinese label | About `6-7` characters per line; about `12-14` total |
| Single-choice option label | Up to two visual lines; about `60` total characters |
| Single-choice English label | About `30` characters per line |
| Single-choice Chinese label | About `15-16` characters per line; about `30-32` total |

This decision updates the earlier broad rule of "up to `9` short options" with
the concrete human-factor budgets Johnny shared through Teams.

## Product Reading

The option label is a patient-facing touch target, not a paragraph. It should
carry the answer choice clearly and leave detailed explanation to other surfaces:

- stable `option.id` values;
- staff-facing summary text;
- clinical / source-governance notes;
- hidden routing metadata;
- handoff documentation.

This keeps the iMVS UI readable without weakening the clinical review boundary.

## Implementation Rule

For every generated or preset question:

1. Keep `question.options.length` between `2` and `9`.
2. Preserve stable `option.id` values whenever labels are shortened.
3. Validate option-label budgets using the question type:
   - `multi_choice`: target `<= 26` characters;
   - `single_choice`: target `<= 60` characters.
4. Prefer concise patient-facing labels over compressed clinical jargon.
5. Use explicit option ids for `not_sure` or question-specific none states
   instead of hidden UI-only behavior.

## Current Demo Implication

The first audit target is the tachycardia live-demo lane:

- `demo/fixtures/tachycardia-live-demo.json`
- `handoff/api-examples/2026-05-21-start-session-response-question.json`
- `handoff/api-examples/2026-05-21-next-question-response-demo-tachycardia.json`
- `api/lib/triage-demo-contract.js`
- `tests/contract/triage-demo-api.test.js`

The next implementation pass should update labels and add validation without
changing the already communicated endpoint paths, authentication behavior,
session behavior, progress semantics, or summary surface.

## Change-Control Boundary

This contract is now part of the external imedtac implementation record. If NYCU
needs to send longer labels, more than `9` options, fewer than `2` options, or a
different rendering assumption, record the compatibility impact and discuss it
with imedtac before using the changed behavior in rehearsal.

## Next Gate

The next gate is a UI-content audit report plus passing contract tests:

```text
question option count: 2-9
multi-choice option label: <= 26 characters target
single-choice option label: <= 60 characters target
stable option ids preserved
tests pass
```
