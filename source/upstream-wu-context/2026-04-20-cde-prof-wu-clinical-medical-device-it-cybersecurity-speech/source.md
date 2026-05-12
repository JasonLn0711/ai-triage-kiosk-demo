---
id: 2026-04-20-cde-prof-wu-clinical-medical-device-it-cybersecurity-speech
title: "CDE Prof. Wu Clinical Medical Device / IT System Cybersecurity Speech"
date: 2026-04-20
captured_date: 2026-04-20
topic: personal
subtopic: sources
type: source-bundle
source: gmail-attachment
sender: "Wu, Yu-Te"
forwarded_from: "Hsiao, Han-Yu / CDE"
keywords: [cde, wu-yute, medical-cybersecurity, medical-device-cybersecurity, clinical-side, speech-prep, slide-overlap]
status: active
source_pdf: assets/cde-2026-prof-wu-clinical-medical-device-it-cybersecurity-speech-time-confirmation-email.pdf
related_project: data/projects/2026-04-medical-cybersecurity-tfda-fda-industry-deck.md
related_meeting: data/knowledge/personal/sources/2026-04-16-wu-yute-tomi-meeting/meeting-record.md
---

# Source

This folder archives the Gmail PDF forwarded by Prof. Wu on `2026-04-20` about a Center for Drug Evaluation invitation and time-confirmation thread for the invited speech on clinical-side cybersecurity requirements for medical devices / information systems.

The PDF includes a CDE confidentiality notice. Keep this source in the local/private planning context unless Prof. Wu or the event owner confirms what may be shared.

## Archived File

| Archived file | Original filename | Use |
| --- | --- | --- |
| `assets/cde-2026-prof-wu-clinical-medical-device-it-cybersecurity-speech-time-confirmation-email.pdf` | `Gmail - Fwd_ 【醫藥品查驗中心演講-時間確認】誠摯邀約吳育德 教授分享「臨床端對醫療器材_資訊系統之資安要求」.pdf` | Forwarded invitation, scheduling table, talk sequence, audience, and slide-overlap warning |

## Key Facts

- Event owner: Center for Drug Evaluation / 財團法人醫藥品查驗中心, medical-device group.
- CDE contact in the forwarded thread: 蕭涵予, project manager.
- Invited speaker: 吳育德教授.
- Jason's role from Prof. Wu's note: Jason and 陳靖中 should help make the PPT while avoiding content overlap with two earlier talks.
- Talk title: `臨床端對醫療器材/資訊系統之資安要求`.
- Talk length: `90` minutes.
- Target audience: electronic-industry or academic/research cross-domain participants.
- Original willingness-reply deadline in the invitation: `2026-04-20`.
- Prof. Wu replied on `2026-04-17` that he was willing to share relevant cybersecurity experience in June and noted that the brain-tumor contouring software had passed FDA `510(k)`.

## Scheduling Window

The CDE time-confirmation table asks Prof. Wu to mark unavailable dates with `X`.

| Week | Candidate dates shown | Visible constraint |
| --- | --- | --- |
| `2026-05-25` to `2026-05-29` | Mon `5/25`, Tue `5/26`, Wed `5/27`, Thu `5/28`, Fri `5/29` | `5/28` is marked `X` |
| `2026-06-01` to `2026-06-05` | Mon `6/1`, Tue `6/2`, Wed `6/3`, Thu `6/4`, Fri `6/5` | no other visible `X` |
| `2026-06-08` to `2026-06-12` | Mon `6/8`, Tue `6/9`, Wed `6/10`, Thu `6/11`, Fri `6/12` | no other visible `X` |
| `2026-06-15` to `2026-06-19` | Mon `6/15`, Tue `6/16`, Wed `6/17`, Thu `6/18`, Fri `6/19` | no other visible `X` |

Status: date not confirmed yet. Treat this as a candidate window, not a fixed commitment, until CDE confirms the slot.

## Three-Talk Sequence

Prof. Wu explicitly warned that two talks come before this one and the PPT should avoid overlap.

1. `醫療器材網路安全驗證要求` from a verification-unit angle.
2. `醫療器材網路安全之設計驗證經驗分享` from a medical-device vendor angle.
3. `臨床端對醫療器材/資訊系統之資安要求` from a hospital / clinical-end angle.

Before deep slide work, ask 蕥瑄, 佳聖, and 至懿 what the first two talks will cover so the third talk can own the clinical-side perspective.

## Content Boundary For The Third Talk

Use the existing CYBERSEC / TFDA-FDA content base, but shift emphasis toward hospital-side requirements.

Own these topics:

- hospital procurement / acceptance questions for cybersecurity evidence;
- clinical continuity and patient-safety impact when systems are patched, down, or isolated;
- hospital network, account, role, audit-log, PACS / HIS / EMR, and deployment constraints;
- what hospitals need vendors to provide: SBOM, vulnerability handling process, patch timeline, residual-risk explanation, deployment hardening guide, and incident contact path;
- practical handoff between vendor, hospital IT, clinical owner, and regulator-facing documentation.

Avoid duplicating these topics unless needed for context:

- detailed certification / verification requirements already handled by the verification-unit lecture;
- device-maker design-verification case studies already handled by the vendor lecture;
- a generic FDA / TFDA law lecture without clinical workflow implications.

## Planning Implications

- Keep this as the same medical-cybersecurity content family as the CYBERSEC deck, not a separate research sprint.
- The `2026-04-30` Prof. Wu handoff should become a CDE-compatible skeleton if the date / format remains unconfirmed: title, audience, three-talk boundary, 90-minute outline, hospital-side scenarios, and questions for earlier speakers.
- Do not schedule a full late-May / early-June slide sprint until the exact date is confirmed and the W23 / early-June academic cluster is protected.
- If the talk lands in W23, it competes with Seminar, NVIDIA GTC, Smart Biomedicine lab visits, Cancer Biology, and Network Security project deadlines.

## Related Records

- Medical cybersecurity project: [2026-04-medical-cybersecurity-tfda-fda-industry-deck.md](../../../../projects/2026-04-medical-cybersecurity-tfda-fda-industry-deck.md).
- Prof. Wu / Tomi meeting record: [meeting-record.md](../2026-04-16-wu-yute-tomi-meeting/meeting-record.md).
- Semester calendar: [07-semester-calendar.md](../../../../../docs/07-semester-calendar.md).
- Current day note: [2026-04-20.md](../../../../../weeks/2026-W17/days/2026-04-20.md).
