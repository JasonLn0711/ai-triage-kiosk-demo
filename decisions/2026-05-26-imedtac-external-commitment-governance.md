---
id: 2026-05-26-imedtac-external-commitment-governance
title: "imedtac External Commitment Governance"
date: 2026-05-26
topic: ai-triage
type: decision
status: active
source:
  - ../AGENTS.md
  - ./2026-05-22-api-contract-freeze-and-change-control.md
  - ../source/2026-05-21-imedtac-engineering-sync/meeting-record.md
  - ../source/2026-05-21-imedtac-teams-api-followup/source.md
  - ../source/2026-05-23-to-2026-05-25-imedtac-teams-ui-api-followup/source.md
  - ../source/2026-05-26-imedtac-teams-summary-preview-followup/source.md
---

# imedtac External Commitment Governance

## Decision

Anything Jason has already said, sent, shown, promised, handed off, or
demonstrated to 慧誠智醫（imedtac Co., Ltd.）is an external commitment for this
repo.

That rule applies regardless of channel:

- Microsoft Teams,
- Gmail,
- LINE,
- online meetings,
- in-person meetings,
- phone calls,
- hallway or offline discussion,
- private engineering chats,
- screen shares,
- demo images,
- screenshots,
- files,
- links,
- tokens,
- endpoint examples,
- verbal explanations.

The project should implement what was communicated. If NYCU needs to change
anything already communicated to imedtac, NYCU must record the current
commitment, explain the proposed change, and notify imedtac before either side
implements against the changed behavior.

## First Principle

Reliability in this collaboration comes from consistency. 慧誠智醫 is planning
engineering, UI, demo operations, and customer-facing rehearsal around what NYCU
has already communicated. A later internal improvement can be valuable, but it
does not silently replace what imedtac has already heard.

The rule is therefore:

```text
If imedtac has heard it, treat it as real.
If NYCU needs to change it, tell imedtac before changing the implementation.
```

## Scope

This governance rule covers:

- API endpoint paths and base URLs;
- request and response field names, field meanings, enum values, and examples;
- workflow mode and measurement timing;
- question loop behavior;
- idempotency and retry behavior;
- conflict recovery;
- progress semantics;
- skip / not-sure behavior;
- option rendering assumptions;
- CORS origins;
- bearer-token requirement and header format;
- token handoff status, with token values still redacted from tracked files;
- demo environment routing;
- summary payload names and summary display surface;
- demo screenshots, static final screens, and visual-support material;
- tachycardia case / preset-question handoff;
- rehearsal behavior and fallback expectations;
- customer-facing or company-facing wording boundaries;
- any verbal or offline implementation instruction that imedtac reasonably
  heard as a direction.

## Recording Rule

External commitments should be recorded in the most appropriate durable surface:

- `source/` for evidence records, screenshots, reconstructed meeting notes, and
  communication-source bundles;
- `decisions/` for rules that affect future implementation or change control;
- `handoff/` for current execution instructions, rehearsal packets, and
  company-facing engineering packages;
- `docs/` for stable architecture, writing, evidence, and product-scope
  policies.

For verbal or offline communication, record the commitment as soon as it becomes
known. The record should include:

- date and, when known, time;
- channel or setting;
- participants or roles;
- what Jason communicated;
- what imedtac could reasonably rely on;
- resulting implementation obligation;
- source boundary, especially if reconstructed from memory rather than a native
  transcript.

If exact wording is not available, do not invent a quotation. Write a faithful
summary and label it as reconstructed.

## Change Process

Before changing anything already communicated to imedtac, create or update a
dated record with:

| Required field | Meaning |
| --- | --- |
| Current commitment | What imedtac has already heard or received. |
| Proposed change | What NYCU now wants to change. |
| Reason | Why the change is needed. |
| Compatibility impact | What imedtac UI, backend, demo workflow, docs, or rehearsal behavior may need to adjust. |
| Affected artifacts/tests | Files, examples, screenshots, payloads, tests, or demo scripts affected by the change. |
| Owner | Who is responsible for the change and follow-up. |
| Target date | When the changed behavior should become active. |
| Notification path | How imedtac will be told, such as Teams, Gmail, meeting, or private engineering chat. |

Then notify imedtac before implementation depends on the changed behavior.

## Non-Negotiable Boundaries

- Do not rely on internal repo edits to override a prior external message.
- Do not treat "better design" as permission to contradict a sent or spoken
  commitment.
- Do not silently rotate, revoke, expose, or change token/auth behavior after a
  credential has been shared.
- Do not silently change a demo visual, summary surface, API path, field, or
  behavior that imedtac may have already used for implementation.
- Do not store bearer tokens, API keys, private links, or live credentials in
  tracked files, even when recording that a credential was shared.

## Relationship To API Freeze

`decisions/2026-05-22-api-contract-freeze-and-change-control.md` is the specific
API-level application of this broader governance rule.

This decision is the repo-wide rule. It applies to API behavior, UI surfaces,
meeting commitments, offline conversations, demo materials, and any future
company-facing communication with imedtac.
