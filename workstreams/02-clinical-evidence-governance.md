# Workstream 02 - Clinical Evidence Governance

## Question

How do we justify each question, branch, and escalation rule?

## Current Rule

Do not invent clinical logic. Build a question provenance table.

## Source Boundary

FDA is not expected to provide the symptom questionnaire. FDA is more relevant
to software risk, intended use, validation, cybersecurity, clinical evidence,
and safety claims.

Question logic should be mapped to verified clinical or professional sources
such as AHA / ACC, ACEP, ESI, CDC, AUA / EAU, NICE, hospital protocols, or
clinician-approved workflows.

## Minimum Table Shape

| Question | Vital trigger | Source | Purpose | Evidence status |
| --- | --- | --- | --- | --- |
| TBD | TBD | TBD | TBD | draft |

## Next Artifact

Create a first demo-only question provenance table after the symptom categories
and vital fields are selected.

## Friday Research Gate - 2026-05-15

Company follow-up asks for initial research on how physiological data affects
all-specialty AI triage. Treat this as a feasibility / source-governance
artifact, not as final clinical logic.

Minimum Friday output:

- candidate clinical-source families by symptom/vital area;
- vital-to-question impact matrix for BP, SpO2, temperature, HR, BMI/weight,
  and glucose when available;
- clear distinction between FDA as software-risk / validation boundary and
  medical-society or clinician protocols as likely question-logic sources;
- explicit list of items that require clinician/company sign-off.
