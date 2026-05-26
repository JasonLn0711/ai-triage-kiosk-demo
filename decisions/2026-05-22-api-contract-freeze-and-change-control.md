---
id: 2026-05-22-api-contract-freeze-and-change-control
title: "API Contract Freeze And Change Control"
date: 2026-05-22
topic: ai-triage
type: decision
status: active
source:
  - ./2026-05-26-imedtac-external-commitment-governance.md
  - ../handoff/2026-05-21-imedtac-two-endpoint-api-reply.md
  - ./2026-05-22-not-sure-answer-boundary.md
  - ../docs/2026-05-22-future-complete-api-design-plan.md
  - ../source/2026-05-22-nycu-sent-api-reply-email/sent-reply-record.md
  - ../source/2026-05-21-imedtac-teams-api-followup/teams-thread-record-2026-05-22.md
  - ../source/2026-05-23-to-2026-05-25-imedtac-teams-ui-api-followup/source.md
  - ../source/2026-05-26-imedtac-teams-summary-preview-followup/source.md
---

# API Contract Freeze And Change Control

## Decision

This decision is the API-specific application of the repo-wide external
commitment rule in
`decisions/2026-05-26-imedtac-external-commitment-governance.md`.

The external-ready API reply at `handoff/2026-05-21-imedtac-two-endpoint-api-reply.md` is the June demo small fixed implementation baseline. After it is sent, the fields and behaviors explicitly listed in that small contract must remain stable unless both engineering teams explicitly discuss and record a change.

The previously detailed complete API design is preserved as future planning in `docs/2026-05-22-future-complete-api-design-plan.md`. Those future fields are not June implementation obligations unless a later recorded change request promotes them into the external contract.

## Sent Baseline Evidence

Jason sent the API reply packet on `2026-05-22 12:17` in the Gmail thread `[20250521] AI Triage 進度討論`. The readable record is preserved at `source/2026-05-22-nycu-sent-api-reply-email/sent-reply-record.md`, with the Gmail PDF preserved in the same source folder.

The sent email explicitly states that the attached API reply should serve as the June demo API implementation baseline and that future changes to endpoint, field names, required/optional status, enum, answer behavior, or UI constraints require an explicit change request. This turns the small fixed API reply from an internal draft into the externally communicated baseline.

Jason also replied in the Microsoft Teams channel `AI Triage 討論 w/ 陽交大` at `2026-05-22 12:24`. The Teams reply confirmed that the API reply document had just been sent by email, that NYCU would provide the first preset questions/options by Monday, and that the June demo should not implement a generic skip button for unable-to-answer behavior. The reply states that iMVS should return an explicit `Not sure` option id, such as `not_sure` or question-specific `*_not_sure`, so the summary preserves an interpretable answer state.

Jason later sent the engineering alignment reply in the same Microsoft Teams
channel on `2026-05-25 20:09`. That reply externally committed the first
rehearsal to the following positions: `request_id` is unique per HTTP request;
`idempotency_key` is stable for the same logical operation and retry;
same-key/different-body conflicts return HTTP `409` /
`idempotency_conflict` without advancing the question flow; June conflict
recovery is restart questionnaire / restart demo session, not automatic answer
revision; iMVS should use pending-answer state to snapshot the answer body and
disable answer-related controls during the request; `capabilities.max_questions`
is a question-count cap rather than the UI progress denominator;
`progress.expected_total` is the recommended `Question X of Y` denominator;
generic silent skip is out of scope; `I'm not sure` remains an interpretable
answer state; static `None of these` is not required; if a none answer is
needed, NYCU returns it as an ordinary option id; the current no-scroll working
layout is up to `9` short options; Endpoint 2 returns `status=summary` and
`staff_review_summary`; the Render base URL and two endpoint paths are the
first-rehearsal integration target; `http://localhost` and
`http://localhost:5174` are in the CORS allowlist; and demo auth uses a simple
bearer-token gate with `Content-Type: application/json` plus
`Authorization: Bearer <demo token>`.

Jason also sent the actual demo bearer token to Ben in a private Teams chat at
`2026-05-25 20:13` and stated that testing confirmed successful calls with the
token. The token value is intentionally not recorded in this repo. Because a
working credential has already been shared externally, any token rotation,
auth-header change, or token-required behavior change must be communicated to
Ben / imedtac before the rehearsal path depends on the changed behavior.

After the `20:09` group reply, Jason also replied to Johnny's summary-preview
question that a NYCU-provided UI may affect visual consistency and completeness
of the device operation, so this may require further discussion. This makes the
summary display surface and any NYCU-hosted / NYCU-provided UI a change-control
item: NYCU should not unilaterally switch from iMVS-rendered summary display to
a NYCU-provided UI surface without first discussing that impact with imedtac.

On `2026-05-26 13:52`, after Johnny clarified that the real-world summary
content would go into HIS and that the preview need is for demo introduction,
Jason acknowledged the direction, sent the NYCU demo summary-review page image
in Teams, and wrote `畫面大致呈現如上`. That image and message are now the
externally communicated approximate visual support direction for the demo
summary page. The page can still be polished, but NYCU should not materially
change the summary payload names, display route, final-screen concept, or
staff-review wording surface without recording the current commitment and
telling imedtac before either side implements against the changed behavior.

## First Principle

Two engineering teams do not coordinate through intention; they coordinate through stable interfaces. The scarce resource is shared predictability: each side must know which names, values, and behaviors can be implemented without wondering whether the other side will revise them silently.

The API reply therefore becomes the single source of truth for the June integration. Conversation can clarify the small contract, but it cannot silently replace it. The fuller API remains a roadmap, not a burden on the first demo integration pass.

## Fixed Contract Surface

- Canonical reply file: `handoff/2026-05-21-imedtac-two-endpoint-api-reply.md`.
- Endpoint paths: `POST /api/triage-demo/sessions` and `POST /api/triage-demo/sessions/{session_key}/answers`.
- Default workflow: `post_measurement_only`.
- Start request fields listed in the API reply: `api_version`, `request_id`, `idempotency_key`, `workflow_mode`, `measurement_state`, `vitals_ready`, `client.locale`, `case_id`, compact `vitals`, and compact `capabilities`.
- Response fields listed in the API reply: `status`, `session_key`, `question_set_version`, `wording_version`, `question`, and `staff_review_summary`.
- Question object fields listed in the API reply: `id`, `type`, `text`, `options`, `required`, `allow_not_sure`, `not_sure_option_id`, and `max_selections` when needed.
- Answer behavior: choice answers use `answer.selected_option_ids`; uncertainty uses returned option IDs such as `not_sure` or question-specific `*_not_sure` IDs.
- Minimum external version controls: `api_version`, `question_set_version`, and `wording_version`.

## Change-Control Rule

A change request is required before either team implements a change to endpoint paths, field names, field meanings, requiredness, enum values, answer payload shape, summary shape, or vital payload dictionary listed in the small fixed contract. A valid change request should state the current rule, proposed rule, reason, compatibility impact, affected examples/tests, owner, target date, and required version bump.

The no-silent-change rule is absolute for any behavior already communicated in
Gmail or Teams. If NYCU needs to adjust endpoint paths, schema, workflow mode,
idempotency behavior, conflict recovery, CORS origins, bearer-token requirement
or header format, progress semantics, option rendering assumptions, skip /
not-sure behavior, summary display surface, or the tachycardia preset question
handoff, NYCU must tell imedtac explicitly and discuss the change before either
side implements against the new behavior. Avoiding contradictory external
messages is a project reliability requirement, not just etiquette.

This rule also applies to actions, not only wording. If Jason already sent a
screen image, token, endpoint URL, CORS origin, payload example, or implementation
instruction through Teams, that action is treated as an external commitment.
Changing it requires the same record-and-notify process as changing a written
API field.

Clarifications that do not change runtime behavior can be appended as notes. Display text, question wording, labels, and staff-summary wording can evolve under `question_set_version` and `wording_version`, provided the machine-readable IDs and small contract remain stable.

## External Commitments Already Spoken In Teams

| Date / time | Teams action | Implementation obligation |
| --- | --- | --- |
| `2026-05-22 12:24` | Jason confirmed the API packet was sent by email and recommended explicit `Not sure` option ids instead of generic skip. | Keep the emailed two-endpoint API reply as the baseline; preserve option-id based unable-to-answer behavior. |
| `2026-05-25 20:09` | Jason answered Ben's `request_id`, `idempotency_key`, progress, skip, option-count, summary, Render URL, CORS, and bearer-token questions. | Treat those behaviors as the first-rehearsal contract unless a recorded change request updates them. |
| `2026-05-25 after 20:09` | Jason told Johnny that NYCU-provided UI may affect visual consistency and device-operation completeness. | Do not silently make NYCU UI the mandatory display route. |
| `2026-05-25 20:13` | Jason privately sent the tested bearer token to Ben. | Preserve token-required behavior and header format, or notify Ben / imedtac before changing the token path. |
| `2026-05-26 13:52` | Jason acknowledged Johnny's summary-display direction, sent the demo summary-review image, and wrote `畫面大致呈現如上`. | Treat the archived summary-review image as the approximate visual-support baseline for the demo summary page. |

## Collaboration Protocol

- NYCU owns the API contract, session behavior, question loop, answer interpretation, version values, and `staff_review_summary` shape.
- 貴司 owns iMVS UI rendering, vital payload source format, kiosk constraints, network path, authentication path, and how the staff/customer preview is displayed.
- 許醫師 owns clinical wording review and question-content calibration inside the demo boundary.
- Shared decisions must land in the contract file, a dated decision file, or the engineering open-issues checklist; chat messages alone are not the implementation source of truth.
- Every rehearsal should record the contract version, payload example, field-dictionary assumptions, UI constraints, and any proposed change requests before implementation changes begin.
- Future complete API fields should remain in `docs/2026-05-22-future-complete-api-design-plan.md` until there is a specific owner and integration need.

## Practical Rule For June

Keep the June contract small. Keep future fields staged. Do not rename fields, reinterpret existing values, or add alternate answer behavior in conversation. If a change is important enough for implementation, it is important enough to record before either side codes against it.
