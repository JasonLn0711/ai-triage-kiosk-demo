# Workstream 04 - Urology Reference Reuse

## Role Of Urology Previsit

The urology demo is a reference implementation for:

- structured intake,
- patient / family assisted answering,
- dynamic question routing,
- nurse / clinician review,
- summary handoff,
- source-governed question design.

It is not the urgent-care triage product.

## Reuse Rule

Copy or adapt patterns deliberately. Do not merge repos or silently treat the
urology domain as the all-specialty triage source.

## Possible Reusable Patterns

- Patient-friendly question flow.
- Missing-information repair.
- Clinician summary format.
- Question-source governance.
- Local CPU-friendly interaction.

## Required Changes For 慧誠

- English-first.
- Vital-sign-aware.
- Urgent-care oriented.
- Kiosk/web-service embedded or linked.
- Company-approved / clinically grounded question set.
