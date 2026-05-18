---
id: 2026-05-18-choice-only-v0-boundary
title: "Choice-Only V0 Demo Boundary"
date: 2026-05-18
topic: ai-triage
type: decision
status: active
---

# Choice-Only V0 Demo Boundary

## FIRST PRINCIPLE

Scarce resource: trust and reviewability, not interface novelty.

The v0 clickable demo must prove a narrow product story:

```text
synthetic measured-vital context
-> governed choice-only questions
-> visible rationale and staff-review summary
```

It must not prove ASR, open-ended medical chat, diagnosis, autonomous triage,
or clinical production readiness.

## Decision

The v0 runtime demo is choice-only.

It excludes:

- ASR;
- patient audio;
- free-text patient answers;
- open-ended LLM conversation;
- hidden clinical reasoning text entry.

## Why

Choice-only interaction gives the safest and clearest demo boundary:

- patient-facing inputs are deterministic;
- reviewer can inspect all available choices;
- answer state can be summarized without free-text PHI risk;
- runtime behavior can be tested with simple smoke checks;
- patent-sensitive ASR + LLM process details remain out of the customer-facing
  demo until cleared;
- clinical reviewers can reason about fixed question wording and output effect.

## Runtime Consequences

- Single-choice questions advance immediately after the answer is clicked.
- Multi-choice questions show visible selection order, then require
  `Save selections`.
- The patient profile and vital payload remain synthetic case metadata.
- Right-side rationale and staff-review summary are reviewer / staff context,
  not autonomous medical advice.

## Future Gate

ASR or free-text capture can return only after a separate decision answers:

- what data is captured;
- where it is stored;
- whether it can contain PHI;
- whether raw audio is retained;
- who reviews transcript errors;
- how patient confirmation works;
- what parts remain trade secret;
- which clinical / company reviewer approves the wording and workflow.
