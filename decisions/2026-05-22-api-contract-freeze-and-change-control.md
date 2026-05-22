---
id: 2026-05-22-api-contract-freeze-and-change-control
title: "API Contract Freeze And Change Control"
date: 2026-05-22
topic: ai-triage
type: decision
status: active
source:
  - ../handoff/2026-05-21-imedtac-two-endpoint-api-reply.md
  - ./2026-05-22-not-sure-answer-boundary.md
---

# API Contract Freeze And Change Control

## Decision

The external-ready API reply at `handoff/2026-05-21-imedtac-two-endpoint-api-reply.md` is the June demo implementation baseline. After it is sent, endpoint paths, file identity, field names, field definitions, requiredness, enum/code values, answer semantics, version identifiers, and the default workflow mode must remain stable unless both engineering teams explicitly discuss and record a change.

## First Principle

Two engineering teams do not coordinate through intention; they coordinate through stable interfaces. The scarce resource is shared predictability: each side must know which names, values, and behaviors can be implemented without wondering whether the other side will revise them silently.

The API reply therefore becomes the single source of truth for the June integration. Conversation can clarify the contract, but it cannot silently replace it.

## Fixed Contract Surface

- Canonical reply file: `handoff/2026-05-21-imedtac-two-endpoint-api-reply.md`.
- Endpoint paths: `POST /api/triage-demo/sessions` and `POST /api/triage-demo/sessions/{session_key}/answers`.
- Default workflow: `post_measurement_only`.
- Machine-readable payload surface: JSON object structure, key names, type definitions, required/optional status, enum/code values, stable IDs, booleans, numeric units, and timestamps.
- Answer behavior: choice answers use `answer.selected_option_ids`; uncertainty uses returned option IDs such as `not_sure` or question-specific `*_not_sure` IDs through `question.allow_not_sure` and `question.not_sure_option_id`.
- Version controls: `api_version`, `schema_version`, `flow_version`, `case_version`, `fixture_version`, `question_set_version`, and `wording_version`.

## Change-Control Rule

A change request is required before either team implements a change to endpoint paths, field names, field meanings, requiredness, enum values, answer payload shape, session state, fallback behavior, or vital payload dictionary. A valid change request should state the current rule, proposed rule, reason, compatibility impact, affected examples/tests, owner, target date, and required version bump.

Clarifications that do not change runtime behavior can be appended as notes. Display text, question wording, labels, and staff-summary wording can evolve under `question_set_version` and `wording_version`, provided the machine-readable IDs and field contract remain stable.

## Collaboration Protocol

- NYCU owns the API contract, session behavior, question loop, answer interpretation, version values, and `staff_review_summary` shape.
- 貴司 owns iMVS UI rendering, vital payload source format, kiosk constraints, network path, authentication path, and how the staff/customer preview is displayed.
- 許醫師 owns clinical wording review and question-content calibration inside the demo boundary.
- Shared decisions must land in the contract file, a dated decision file, or the engineering open-issues checklist; chat messages alone are not the implementation source of truth.
- Every rehearsal should record the contract version, payload example, field-dictionary assumptions, UI constraints, and any proposed change requests before implementation changes begin.

## Practical Rule For June

Keep changes additive, explicit, and versioned. Do not rename fields, reinterpret existing values, or add alternate answer behavior in conversation. If a change is important enough for implementation, it is important enough to record before either side codes against it.
