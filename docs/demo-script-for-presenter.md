# Demo Script For Presenter

Status: internal presenter script
Last updated: 2026-05-18

## Opening

Use this sentence before showing the screen:

```text
This is a synthetic-data capability demo showing how measured vital signs can
support governed follow-up questions and a staff-review summary. It is not
diagnosis, treatment advice, final triage, or production HIS/EMR integration.
```

## Step 1 - Show Case And Profile

Point to the left panel.

Say:

```text
The left side is the synthetic case context. It shows a fake demo ID, basic
demographic profile, and measured-vital payload. These are not real patient
data.
```

Avoid:

- implying the profile is sufficient for clinical risk scoring;
- saying the demo uses real hospital data;
- saying the vital values alone determine triage.

## Step 2 - Show Choice-Only Questioning

Point to the middle panel.

Say:

```text
The v0 demo is touch-first and choice-only. Single-choice questions advance
immediately. Multi-choice questions show the selected order and are saved after
review.
```

Explain the product reason:

```text
We removed ASR and free text from v0 so the demo remains deterministic,
reviewable, and safe for source-governed clinical wording review.
```

Avoid:

- describing hidden ASR / LLM internals;
- saying the AI freely chats with the patient;
- saying patient audio is collected.

## Step 3 - Show Rationale

Point to the right panel's ranking rationale.

Say:

```text
The right side explains why a question was prioritized. This is reviewer and
staff context, not a patient-facing diagnosis.
```

If asked why a question appears:

```text
The question is selected from a governed question bank using the synthetic case
context, patient answers, and visible vital cues. The source-family mapping is
tracked separately for reviewer inspection.
```

## Step 4 - Show Staff-Review Summary

Point to staff-review summary.

Say:

```text
The output is a staff-review summary: synthetic profile, visible vital cues,
recorded answers, allowed output, and forbidden output. It stops before
diagnosis, treatment, final acuity assignment, or emergency ordering.
```

Avoid:

- "the system says this patient is ESI level X";
- "the system tells the patient what to do";
- "the system recommends treatment";
- "the system can be connected directly to HIS/EMR now".

## Close

Use this sentence:

```text
The immediate value is not replacing staff judgment. It is showing how a
measurement-centered kiosk can become a vital-aware intake workflow that gives
staff a clearer, source-governed summary to review.
```

## Expected Questions

### Is this production clinical triage?

Answer:

```text
No. This is a synthetic-data demo. Production use would require clinical
review, workflow approval, privacy and cybersecurity controls, validation, and
integration decisions.
```

### Why no ASR in this version?

Answer:

```text
ASR is future scope. For v0, choice-only input keeps the demo deterministic,
privacy-light, and easier for clinical/company reviewers to approve.
```

### Does it write to HIS or EMR?

Answer:

```text
No. The current demo is local and read-only. HIS/EMR/FHIR integration remains a
future integration decision.
```

### Where does the clinical logic come from?

Answer:

```text
The repo keeps source, question, and flow registries. FDA is treated as a
software and claim-boundary source, not the symptom-questionnaire source.
Question logic needs clinical-source mapping and reviewer approval.
```
