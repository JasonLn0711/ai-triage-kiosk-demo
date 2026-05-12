---
id: 2026-04-16-wu-yute-tomi-meeting-record
title: "2026-04-16 Meeting Record - Prof. Wu, Tomi, and Jason"
date: 2026-04-16
time: "22:00-24:00 Asia/Taipei"
duration: "about 2 hours"
topic: personal
subtopic: sources
type: meeting-record
source: meeting-transcript
keywords: [wu-yute, tomi, medical-cybersecurity, urology-previsit, patent-ui, rao-prep, meeting-record]
status: active
participants:
  - Jason
  - Wu, YuTe
  - Tomi
topics:
  - medical cybersecurity
  - TFDA and FDA cybersecurity deck
  - urology AI previsit interview
  - anti-fraud front-end UI patent
  - Rao journal-submission priority guardrail
---

# Meeting Record

## Metadata
- Meeting time: `2026-04-16 22:00-24:00`, Asia/Taipei, about 2 hours.
- Format: online meeting.
- Participants: Jason, 吳育德老師, Tomi 學長.
- Raw transcript: [transcript.txt](transcript.txt).
- Source manifest: [source.md](source.md).
- Daily note entry: [2026-04-16.md](../../../../../weeks/2026-W16/days/2026-04-16.md).
- Original audio path: `/home/jnclaw/every_on_git_jnclaw/project_aura/260416_2157__with_Prof_Wu_Tomi/260416_2157__with_Prof_Wu_Tomi.mp3`.

## Executive Summary
This meeting created three active work threads and one light follow-up thread:

1. Medical cybersecurity deck: practical, TFDA-first, FDA-supporting, industry-facing, and service-oriented.
2. Urology smart-previsit interview: attend the `2026-04-23 10:00` online meeting to listen, map workflow, and judge MVP feasibility.
3. Anti-fraud patent package: narrow the patentable direction toward front-end UI, event-triggered prompts, missing-information completion, three-layer questioning, and human-factors interaction.
4. Follow-up tracking: Seminar PPT GPT review and later patent / activity email forwarding from 吳老師.

Planning guardrail: these tasks must not displace the journal submission lane or the serious manuscript thinking required before discussing with Rao 老師.

## Topic 1: Medical Cybersecurity Deck

### Decision
- The deck should speak to industry listeners, not mainly academic reviewers.
- Taiwan TFDA should be the main regulatory frame; FDA should be a supporting comparison.
- The talk should make vendors understand what they need to do and why they may need execution support.
- Keep proprietary implementation details and patent-sensitive security ideas out of public slides.

### Content Direction
- Why medical cybersecurity now matters for medical-device / SaMD vendors.
- TFDA-first and FDA-supporting regulatory frame.
- Common product shapes:
  - model only
  - model + viewer
  - model + viewer + account / platform
  - hardware-bound connected SaMD
- Attack surface by node: model package, viewer, account platform, APIs, hospital network exposure, hardware, update path.
- Practical testing and service work: SBOM, white-box review, black-box testing, penetration testing, deployment review, post-market monitoring.
- Scan findings and remediation paths.
- Service positioning: not "we teach you only", but "we can help execute the work required for compliance and security hardening."

### Risks / Guardrails
- Do not over-polish slides before the story and scenarios are speakable.
- Do not over-academize the talk.
- Do not expose internal code, sensitive architecture details, or patentable key / device-trust ideas.
- Treat the CYBERSEC/conference version and 吳老師's TFDA/FDA業界版 as one shared content base with different delivery emphasis.

### Related Record
- Project file: [2026-04-medical-cybersecurity-tfda-fda-industry-deck.md](../../../../projects/2026-04-medical-cybersecurity-tfda-fda-industry-deck.md).

## Topic 2: Urology Smart-Previsit Interview

### Decision
- Attend the `2026-04-23 10:00-11:00` online meeting with 許富順醫師 / 泌尿科.
- The role is discovery, not immediate product commitment.
- The main output is a workflow and feasibility judgment.
- Initial stance: `先做 UI 導引式問診，語音只作輔助`.

### Questions to Carry Into the Meeting
- What information is repeatedly asked before the physician enters?
- Which questions are fixed and can be front-loaded?
- Which questions must remain physician-led?
- Will the patient self-fill, or will the nurse station assist?
- What should the physician receive: raw answers, summary, risk flags, or missing-item prompts?
- What success metric matters most: time saved, fewer repeated questions, higher completeness, or smoother patient flow?

### MVP Direction
Start with a UI-guided previsit interview:

```text
patient enters
-> guided questions
-> missing information prompts
-> patient or nurse review
-> physician-facing summary
```

Voice input can remain optional. The safer first version should rely on large buttons, yes/no and multiple-choice questions, review screens, and clear handoff to the physician.

### Risks / Guardrails
- ASR accuracy for elderly users, accents, and noisy clinical environments.
- Elderly usability: vision, literacy, motor control, and phone familiarity.
- Wrong or missing input.
- Privacy, consent, and retention of sensitive symptom data.
- Clinical safety: no autonomous diagnosis or false reassurance.
- Integration uncertainty with HIS / EMR / appointment systems.

### Related Record
- Project file: [2026-04-urology-ai-previsit-interview.md](../../../../projects/2026-04-urology-ai-previsit-interview.md).

## Topic 3: Anti-Fraud Patent UI Package

### Prior Source Context
- Earliest potential sync: [2026-02-12 Potential Sync With Tomi](../2026-02-12-potential-sync-with-tomi/meeting-record.md).
- Earliest strategic source: [2026-02-22 Discussion With Tomi - Potential Patent](../2026-02-22-discussion-with-tomi-potential-patent/meeting-record.md).
- Earliest routed concept seed: [2026-03-09 Lab Sync Patent Segment With Tomi](../2026-03-09-lab-sync-patent-tomi/meeting-record.md).
- Earliest archived source: [2026-03-16 Patent Sync With Tomi](../2026-03-16-patent-sync-with-tomi/meeting-record.md).
- Earlier source: [2026-03-30 Lab Sync Patent Discussion With Tomi](../2026-03-30-lab-sync-patent-with-tomi/meeting-record.md).
- Afternoon follow-up: [2026-03-30 Afternoon Patent Discussion With Tomi](../2026-03-30-afternoon-patent-with-tomi/meeting-record.md).
- The `2026-02-12` sync compared Jason's work against a Zhongshan Precinct AI record-generation proposal and identified new-pattern detection as a stronger patent direction than generic RAG/vector retrieval/ASR.
- The `2026-02-22` discussion set the high-level strategy: claim known-model matching plus emerging-model warning as a system framework, not ASR/RAG implementation details.
- The `2026-03-09` segment framed new-scam detection as assembling partial local fragments into a central event-level warning.
- The `2026-03-16` sync reviewed the disclosure flowchart and identified the need for visible steps, interface-coupled operations, missing-information follow-up, and a clearer cross-local-node stitching path.
- The earlier discussion emphasized a three-layer user / terminal / central-server anti-fraud architecture, known-case matching, emerging-case detection, and money/property-transfer thresholding.
- The afternoon follow-up reframed the draft around one-or-more processing units, one-or-more AI processing units, high/medium/low risk output, and broad legal-transfer suspicious-fraud conditions.
- This `2026-04-16` discussion should be read as a narrowing step: use the earlier architecture as background, but make the first claim package more UI-visible and human-factors-centered.

### Decision
- The patent package should narrow toward observable front-end and human-factors interaction flows.
- The target is not "the backend fraud judgment is smart"; the stronger direction is "the app guides the user through event-triggered missing-information completion in a structured, human-usable way."
- Backend fraud scoring, new-scam detection, database placement, embeddings, vector logic, and model internals should remain trade-secret candidates unless Tomi explicitly asks for controlled disclosure.

### Claimable Front-End Candidates
- Event-triggered questioning.
- Three-layer narrowing questions: broad scope -> narrowed issue -> decisive key answer.
- Missing-information completion.
- Yes/no and multiple-choice first, especially for stressed or elderly users.
- User-approved data capture, reminder, and review.
- Temporary retention / deletion behavior.

### First Three Scenarios
- User uploads partial evidence -> system asks only the missing critical facts.
- User enters incomplete information -> system detects gaps and guides補問.
- A suspicious event occurs -> system triggers checklist-style narrowing questions.

### Risks / Guardrails
- Avoid writing the backend logic like a textbook in the patent draft.
- Do not claim only a generic form or ordinary chatbot.
- Separate what is visible and assertable in UI from what should remain secret.

### Related Record
- Project file: [2026-04-anti-fraud-frontend-ui-patent-package.md](../../../../projects/2026-04-anti-fraud-frontend-ui-patent-package.md).

## Topic 4: Seminar PPT GPT Review And Follow-Up Email

### Decision / Follow-Up
- Seminar PPT should be shown to GPT.
- If the deck already exists, prepare or run it through GPT review.
- If version / deadline is unclear, record one line: `待確認版本與期限`.
- 吳老師 may forward patent / activity email context. Track it lightly and prevent it from becoming a W17 main lane.

## Journal / Rao Priority Guardrail
The meeting added meaningful tasks, but the journal submission and Rao 老師 review path remain more important.

Before asking Rao 老師 to review, protect serious thinking time for:

- manuscript architecture
- contribution story
- evidence credibility
- ESWA-facing framing
- bounded `v4.2` decisions
- questions worth discussing with Rao 老師

W17 should not absorb these new meeting threads as full deep-work lanes. The capacity order is:

1. Fixed commitments and HW2 hard deadline.
2. Journal submission / Rao-prep manuscript thinking.
3. Required 4/23 urology meeting prep and summary.
4. Runnable medical cybersecurity deck path.
5. Patent UI capture only after the higher-risk items are safe.
6. Mailman, nonessential OS work, and extra polish are paused.

## Action Register

| ID | Action | Deadline / window | Priority | Related record |
| --- | --- | --- | --- | --- |
| M-01 | Check whether Seminar PPT exists; prepare/run through GPT review or mark `待確認版本與期限` | `2026-04-17` to `2026-04-19` | Medium | [2026-04-16.md](../../../../../weeks/2026-W16/days/2026-04-16.md) |
| M-02 | Confirm `2026-04-23 10:00` meeting details and Cancer Biology R234 conflict handling | by `2026-04-20` | High | [2026-W17 weekly plan](../../../../../weeks/2026-W17/weekly-plan.md) |
| M-03 | Prepare urology meeting pack: note template, questions, risk list, low-fi flow | draft by `2026-04-21`, final by `2026-04-22` | High | [urology project](../../../../projects/2026-04-urology-ai-previsit-interview.md) |
| M-04 | Clean raw urology meeting notes same day and produce one-page summary | raw notes `2026-04-23`, summary by `2026-04-24 11:00` | High | [urology project](../../../../projects/2026-04-urology-ai-previsit-interview.md) |
| M-05 | CYBERSEC organizer reply, signed authorization, and deck sent early on `2026-04-22`; only bounce/correction checks remain | closed; next check `2026-04-27` | High | [medical cybersecurity deck](../../../../projects/2026-04-medical-cybersecurity-tfda-fda-industry-deck.md) |
| M-06 | Produce runnable deck v1, then 吳老師 speakable v0.8 handoff | v1 by `2026-04-26`, v0.8 by `2026-04-30` | High | [W18 plan](../../../../../weeks/2026-W18/weekly-plan.md) |
| M-07 | Capture patent UI elements and split claim vs trade-secret table | `2026-05-01`, after 4/30 handoff and paper block are safe | Medium | [2026-05-01.md](../../../../../weeks/2026-W18/days/2026-05-01.md) |
| M-08 | Watch for forwarded patent / event email from 吳老師 | `2026-04-27` 15-20m admin sweep, then waiting note only | Low | [2026-04-27.md](../../../../../weeks/2026-W18/days/2026-04-27.md) |
| M-09 | ESWA / Rao submit-prep completed as the `2026-04-22` `v4.4` authority submission; preserve only external-follow-up monitoring | W18 check only if a concrete external message arrives | Highest | [W18 plan](../../../../../weeks/2026-W18/weekly-plan.md) |

## Records Created From This Meeting
- Day-note summary: [2026-04-16.md](../../../../../weeks/2026-W16/days/2026-04-16.md).
- Raw transcript: [transcript.txt](transcript.txt).
- Source manifest: [source.md](source.md).
- Complete meeting record: this file.
- Urology project: [2026-04-urology-ai-previsit-interview.md](../../../../projects/2026-04-urology-ai-previsit-interview.md).
- Medical cybersecurity deck project: [2026-04-medical-cybersecurity-tfda-fda-industry-deck.md](../../../../projects/2026-04-medical-cybersecurity-tfda-fda-industry-deck.md).
- CYBERSEC organizer source: [2026-04-09-cybersec-2026-speaker-pre-event-notice/source.md](../2026-04-09-cybersec-2026-speaker-pre-event-notice/source.md).
- Patent UI project: [2026-04-anti-fraud-frontend-ui-patent-package.md](../../../../projects/2026-04-anti-fraud-frontend-ui-patent-package.md).
- Rao-prep guardrail: [rao-prep-thinking-checklist.md](../../../../projects/2026-04-ai-agent-governance-journal-revision/rao-prep-thinking-checklist.md).

## Open Questions
- What exact slide format / template does 吳老師 want for the TFDA/FDA industry deck?
- Does the Seminar PPT already exist, and what GPT review prompt / output is needed?
- What is the cleanest way to handle the `2026-04-23 10:00` Cancer Biology R234 conflict?
- After the urology meeting, is the strongest MVP a standalone summary export, a nurse-assisted kiosk/tablet flow, or an HIS-integrated workflow?
- For the patent package, which front-end behavior does Tomi think is strongest to claim first?
