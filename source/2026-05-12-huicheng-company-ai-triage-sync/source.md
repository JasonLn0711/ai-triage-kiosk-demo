---
id: 2026-05-12-huicheng-company-ai-triage-sync-source
title: "2026-05-12 Huicheng Company AI Triage Sync"
date: 2026-05-12
time: "13:00 Asia/Taipei"
topic: personal
subtopic: sources
type: source-bundle
source: user-provided-transcript
course: ""
keywords: [huicheng, imedtac, ai-triage, urgent-care, vital-sign-kiosk, asr, llm, fhir, his, emr, urology-previsit, product-sync]
status: active
participants:
  - Jason Miao
  - Johnny PM
  - 阿聖
meeting_record_file: meeting-record.md
demo_brief_file: demo-brief.md
transcript_file: transcript-cleaned.md
---

# Source

This folder stores the structured notes from the `2026-05-12 13:00` sync with 慧誠智醫 business / PM contacts about an AI-triage collaboration direction.

The user provided a detailed transcript and a post-meeting summary in chat. These should be treated as private meeting evidence for planning and follow-up, not as public artifacts.

The user also provided a polished interpretation brief on `2026-05-12`; preserve its structure, Mermaid diagrams, and writing format in `demo-brief.md` for future briefing / planning reuse.

## Why this source is kept

The meeting changed the 慧誠 lane from a general post-seminar opportunity into a more concrete business / product discussion:

- 慧誠 has an existing self-service vital-sign kiosk / web-service flow.
- The company wants an AI-triage direction connected to the kiosk, not a generic chatbot.
- Default measured data are blood pressure, SpO2, temperature, and for the all-in-one SKU height/weight; ECG and ultrasound were mentioned as technically possible custom additions but outside the default triage scope.
- The hardware is Windows-based, fanless all-in-one, no onboard GPU, and network-capable.
- The platform context includes RESTful API, FHIR standard, and HIS / EMR integration.
- The long-term product target is English-first, voice-input, broad/all-specialty symptom triage, vital-sign-aware output, and urgent-care style workflow.
- The near-term business need is a presentable demo that makes 慧誠 + 智德萬 / Wu-team collaboration visible before customer conversations, possibly including a June US customer visit.
- Jason showed the urology previsit demo as a bounded starting point: structured intake, dynamic question selection, patient/family assistance, nurse/clinician review, and optional ASR for free-form supplements.
- The current urology demo remains a previsit workflow example, not an urgent-care triage implementation.
- Post-meeting summary from 阿聖 emphasizes that the short-term deliverable is an English AI-triage reference demo, while ASR + LLM architecture, patented or patentable flow details, and core process details should remain non-public.

## Repo Links

- Planning locator: `../planning-everything-track/data/projects/2026-05-huicheng-er-triage-ekg-asr.md`
- Repo project brief: `docs/project-brief.md`
- Meeting record: `source/2026-05-12-huicheng-company-ai-triage-sync/meeting-record.md`
- Demo brief: `source/2026-05-12-huicheng-company-ai-triage-sync/demo-brief.md`
- Cleaned transcript: `source/2026-05-12-huicheng-company-ai-triage-sync/transcript-cleaned.md`
- Prior source bundle: `source/2026-05-11-wu-huicheng-er-triage-ekg-asr/`

## Boundary

Do not treat this meeting as approval to build clinical triage software, use real patient data, make diagnosis claims, or connect to HIS / EMR. The next safe artifact is a scoped demo / feasibility question list after 慧誠 provides product materials, data/API shape, and action items.

Do not publish patent-sensitive or core-flow implementation details from the ASR + LLM system. Keep external descriptions at the level of workflow, architecture options, and demo scope unless Prof. Wu / the project owner explicitly approves disclosure.
