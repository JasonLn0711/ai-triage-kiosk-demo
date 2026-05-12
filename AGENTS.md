# AGENTS.md

This repo is the execution home for the AI triage kiosk demo lane.

## Mission

Build and preserve the materials needed for an English AI triage kiosk demo that
can be shown as a market / product capability demonstration for 慧誠智醫.

## Non-Goals

Do not turn this repo into:

- a production clinical triage product,
- a diagnostic system,
- a live patient-data repository,
- a regulatory submission package,
- a broad medical AI research repo,
- a replacement for `../planning-everything-track`.

## Canonical Ownership

- This repo owns demo requirements, source copies, architecture notes, demo
  scope, implementation materials, and execution artifacts for the kiosk demo.
- This repo also owns copied upstream Prof. Wu context relevant to 慧誠, including
  the 2026-04-16 Wu/Tomi meeting and the 2026-04-20 CDE medical cybersecurity
  source. Treat those as context, not as the triage implementation itself.
- `../planning-everything-track` owns priority, capacity, status, deadlines, and
  project locator notes.
- `../urology-ai-previsit-demo` remains a reference implementation for structured
  previsit intake. Do not merge it into this repo without an explicit migration
  decision.

## Safety Rules

1. Use `triage support`, `workflow support`, or `demo` language.
2. Do not write diagnosis, autonomous medical advice, or production clinical
   decision claims.
3. Do not store real patient data, identifiers, credentials, private API tokens,
   or live hospital integration details in tracked files.
4. Treat vital-sign thresholds and red-flag logic as clinical validation gates.
5. Keep patent-sensitive ASR + LLM process details private unless explicitly
   cleared.
6. Any customer-facing or company-facing artifact must preserve the demo
   boundary unless the user says otherwise.
7. Do not treat FDA as a symptom-questionnaire source. FDA is primarily a risk,
   intended-use, validation, software, cybersecurity, and safety-claim boundary
   until specific official source text is verified.
8. Every future patient-facing question should move toward question provenance:
   source name, version, exact supporting text, clinical purpose, vital trigger,
   and review owner.

## Working Style

- Prefer Markdown, small data files, and simple scripts.
- Keep Mermaid diagrams in Markdown when they clarify architecture or workflow.
- Before implementation, read
  `docs/architecture-insertion-and-clinical-grounding.md`.
- Before answering broad context questions, read `docs/source-index.md` and
  `docs/wu-instruction-register.md`.
- Record decisions as dated notes under `docs/` or a future `decisions/`
  directory.
- Keep source copies under `source/`; do not edit copied transcript files as if
  they were canonical meeting minutes.
- Put active derived work under `workstreams/`, not inside raw source folders.
- Put future company / Prof. Wu handoff drafts under `handoff/`.
- If implementation begins, add a clear `app/`, `prototype/`, or `demo/`
  structure before adding code.

## Git Rules

- This repo is local-first unless the user explicitly asks to publish it.
- Do not push to GitHub without explicit confirmation.
- Keep commits separate from planning repo commits.
- If planning is updated in the same work session, commit this repo and
  `../planning-everything-track` separately.
