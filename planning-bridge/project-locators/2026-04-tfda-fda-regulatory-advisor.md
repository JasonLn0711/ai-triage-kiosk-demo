# Project

## Identity

- Project name: 2026-04 TFDA/FDA regulatory advisor
- Owner: Jason
- Sponsor / requester: Prof. Wu
- Canonical repo: `../tfda-fda-regulatory-advisor/`
- Trigger date: `2026-04-27`
- Status: v0 checked-memory scaffold; chat interface deferred to phase 2

## First-Principles Scope

Prof. Wu's wording included a chat advisor, but the actual need is not a chat box first.

The core need is a verifiable TFDA/FDA memory system:

```text
meeting notes -> decision/evidence register -> official source cards -> QA regression questions
```

Every answer should be traceable to:

- a meeting note,
- a TFDA/FDA source card,
- a decision/evidence row,
- and a human-review status.

If the trace is incomplete, the answer should be marked:

```text
needs_human_review
```

## Trigger

Prof. Wu asked whether a TFDA/FDA advisor could be built from weekly Wednesday discussions, archived meeting results, and current medical-device regulations.

Related LINE context from Ya-Hsuan emphasized that company-side TFDA project work needs synchronized project summaries, key decisions, evidence, workflow adoption, and experience transfer across people and projects.

Prof. Wu suggested starting from the meeting records Jason has already organized.

## V0 Acceptance

- 5 existing meeting notes converted.
- 10 official TFDA/FDA source cards created.
- 20 decision/evidence rows recorded.
- 30 QA regression questions written.
- Every answer cites sources or is marked `needs_human_review`.

## Planning Boundary

Planning owns:

- priority,
- capacity,
- day-note status,
- weekly boundary,
- repo locator.

The sibling repo owns:

- meeting memory,
- official source ledger,
- decision/evidence rows,
- QA regression questions,
- human-review workflow,
- later retrieval/chat prototypes.

## Current Artifacts

| Artifact | Location |
| --- | --- |
| Canonical repo | `../tfda-fda-regulatory-advisor/` |
| System design | `../tfda-fda-regulatory-advisor/docs/01-system-design.md` |
| Source ledger | `../tfda-fda-regulatory-advisor/data/sources/official-source-ledger.md` |
| First meeting note | `../tfda-fda-regulatory-advisor/data/meetings/2026-04-27-prof-wu-tfda-fda-advisor-request.md` |
| First decision row | `../tfda-fda-regulatory-advisor/data/decisions/2026-04-27-decision-001-start-with-capture-layer.md` |
| QA seeds | `../tfda-fda-regulatory-advisor/data/qa/seed_questions.md` |
| Bridge check | `../tfda-fda-regulatory-advisor/scripts/check_bridge.py` |
| Raw LINE screenshot locator | `/home/jnln3799/Downloads/S__15392831.jpg` |

## Suggested Scope Check

> 老師，我先把它做成會議紀錄＋法規來源＋決策依據的可查核系統，聊天機器人放第二階段，這樣可以嗎？

## Capacity Rule

This is not a W18 chatbot sprint.

Until `泌尿預診導航` handoff and CYBERSEC speech readiness are safe, only these fit:

- repo rename and bridge update,
- meeting-note intake,
- source-ledger setup,
- one sample decision/evidence row,
- QA seed setup.
