# Project

## Identity
- Project name: 2026-04 medical cybersecurity TFDA/FDA industry deck
- Owner: Jason
- Primary audience: medical-device / SaMD industry listeners
- Content base: shared with CYBERSEC deck where useful
- Near checkpoints: `2026-04-22` organizer reply + signed authorization + classroom-preload deck sent to Lilian; `2026-04-23` no-bounce / no-correction thread snapshot archived; `2026-04-26` deck v1 timed-run/freeze; `2026-04-30` 吳老師 speakable v0.8 handoff and official slide correction fallback; `2026-05-06` CYBERSEC live talk delivered
- Status: CYBERSEC 2026 talk was delivered smoothly on `2026-05-06` and landed exactly at the planned `30` minutes; post-talk industry exchange signal is recorded in `data/knowledge/personal/sources/2026-05-06-cybersec-post-talk-industry-cards/source.md`; exact sent CYBERSEC deck PDF is archived as `current/cybersec-2026-ai-samd-cybersecurity-in-practice-v1.3.5-sent-20260422.pdf`; generated compact `14`-slide PPTX/PDF remains fallback/reference; older planning-local `v0.9` / `v0.8` decks remain emergency fallbacks; Taiwan Mandarin rehearsal readers are ready; organizer reply and signed authorization are sent; `2026-04-23` thread check showed no visible bounce/correction request in the archived snapshot; from `2026-04-27 13:30`, rehearsal mode shifted to output-first slide-by-slide spoken drafting in Notion, then repo capture / tightening
- CYBERSEC source: `data/knowledge/personal/sources/2026-04-09-cybersec-2026-speaker-pre-event-notice/source.md`
- CDE / Prof. Wu speech source: `data/knowledge/personal/sources/2026-04-20-cde-prof-wu-clinical-medical-device-it-cybersecurity-speech/source.md`
- Public talk title: `AI 軟體醫材的資安實戰：從美國 FDA 524B 規範到 Threat Modeling 與 Patch SLA 的完整落地`
- Public links: session `https://cybersec.ithome.com.tw/2026/session/4284`; speaker `https://cybersec.ithome.com.tw/2026/speaker/2060`

## Current Handoff

- Canonical owner: `../cybersec-2026-ai-samd-talk/` owns active CYBERSEC deck, source, rehearsal docs, generated reports, and speaker-note evolution.
- Current status: CYBERSEC 2026 talk delivered on `2026-05-06`; planning-local artifacts are preserved as historical/fallback records. On `2026-05-11`, the Prof. Wu medical-cybersecurity handoff was reopened as a pre-Thursday W20 obligation.
- Next action: complete a CDE-compatible v0.8/skeleton handoff package by `2026-05-13` shutdown.
- Capacity impact: active only as a bounded handoff package, not a full CDE slide sprint, CDE rewrite, or partnership lane.
- Do not duplicate: do not copy talk-repo rehearsal readers, generated reports, or deck-source internals back into planning.
- Preservation manifest: `data/projects/2026-04-medical-cybersecurity-tfda-fda-industry-deck/2026-05-07-post-talk-artifact-preservation-manifest.md`.
- Review / expiry date: revisit after W19 weekly review or before a CDE / Prof. Wu speech package reuses CYBERSEC material.

## W20 Pre-Thursday Handoff Plan

- Deadline: complete by `2026-05-13` shutdown so `2026-05-14` stays protected for the Cancer Biology Pikachu demo.
- Completion definition:
  - CDE-compatible v0.8/skeleton exists and is speakable.
  - Handoff note for 吳老師 explains what is ready, what remains unconfirmed, and what questions must go to the first two speakers.
  - The package points to existing CYBERSEC / TFDA-FDA sources instead of recreating the deck from scratch.
- Minimum package contents:
  - working title: `臨床端對醫療器材/資訊系統之資安要求`
  - audience and 90-minute talk shape
  - three-talk no-overlap boundary
  - hospital-side requirements emphasis
  - scenario matrix reused or adapted from the CYBERSEC / TFDA-FDA base
  - open questions for 蕥瑄, 佳聖, and 至懿 about the first two talks
- Schedule:
  - `2026-05-11`: lock scope and source pointers.
  - `2026-05-12`: after the FSI:DI gate, draft the title / audience / three-talk boundary / 90-minute outline.
  - `2026-05-13`: finish the skeleton and handoff note; stop at shutdown even if visual polish is incomplete.
  - `2026-05-14`: only send or confirm an already-completed handoff; do not build slides on the Pikachu demo day.
- Boundary:
  - No full 90-minute polished deck before Thursday.
  - No new regulatory research sprint.
  - No LINE-case exposure or proprietary product detail.
  - No duplicated verification-unit lecture or vendor design-verification case-study rewrite.

## Purpose
Build a practical, service-oriented medical cybersecurity deck.

The audience should leave thinking: this is important, the regulation tells us what must be protected, we do not fully know how to execute the tests and remediation ourselves, and 智得灣 can help.

## Talk frame
- Main legal / regulatory anchor: Taiwan TFDA.
- Supporting reference: US FDA.
- Tone: practical, industry-facing, not academic.
- Keep proprietary code and patent-sensitive details out of slides.
- Use own or generalized product architecture examples; avoid exposing LINE case details if that would be sensitive.
- CYBERSEC constraint: include the required disclaimer page immediately after the cover.
- CYBERSEC constraint: because public slide download was previously marked as agreed, treat the deck as public-facing unless authorization is changed.
- AI translation constraint: keep slide language direct and avoid dense unexplained abbreviations so live translation has a cleaner source.

## CDE / Prof. Wu Speech Anchor
- Source bundle: `data/knowledge/personal/sources/2026-04-20-cde-prof-wu-clinical-medical-device-it-cybersecurity-speech/source.md`.
- Working title: `臨床端對醫療器材/資訊系統之資安要求`.
- Candidate schedule window: `2026-05-25` to `2026-06-19`; current CDE table marks `2026-05-28` unavailable, with final date still unconfirmed.
- Talk length / audience: `90` minutes for electronic-industry or academic/research cross-domain participants.
- PPT ownership note from Prof. Wu: Jason and 陳靖中 should make the PPT while avoiding overlap with the two talks before it.
- Coordination before deep slide work: ask 蕥瑄, 佳聖, and 至懿 what the first two talks cover.
- Three-talk sequence:
  1. `醫療器材網路安全驗證要求` from a verification-unit angle.
  2. `醫療器材網路安全之設計驗證經驗分享` from a medical-device vendor angle.
  3. `臨床端對醫療器材/資訊系統之資安要求` from a hospital / clinical-end angle.
- Content boundary: use the shared CYBERSEC / TFDA-FDA base, but make the CDE version own hospital-side requirements: procurement evidence, deployment constraints, clinical continuity, PACS/HIS/EMR integration, account / audit / network exposure, vendor patch coordination, residual-risk communication, and incident handoff.
- Avoid duplicating: verification requirement details from lecture 1, vendor design-verification case studies from lecture 2, and generic regulation content that does not change clinical workflow.
- Related but separate `2026-04-27` project: Prof. Wu's TFDA/FDA regulatory-advisor request now lives in `../tfda-fda-regulatory-advisor/` with planning locator `data/projects/2026-04-tfda-fda-regulatory-advisor.md`; do not merge this into the CYBERSEC/CDE deck lane unless a specific talk artifact needs it.

## Seven-section skeleton
1. Why medical cybersecurity matters now
2. TFDA-first / FDA-supporting cybersecurity frame
3. Common medical AI / SaMD product shapes
4. Attack surface by product node
5. White-box, black-box, penetration testing, SBOM, and post-market monitoring
6. What scan findings look like and how remediation decisions are made
7. Service positioning: what we can help vendors do

## Scenario matrix
| Scenario | What the vendor may certify / ship | Likely attack surface | Testing / service angle |
| --- | --- | --- | --- |
| Model only | AI model as the regulated asset | model package, dependency stack, runtime environment, update process | SBOM, dependency scan, model package review, deployment assumptions |
| Model + viewer | model plus image/result viewer | viewer UI, local files, browser/web stack, DICOM/image handling | black-box test, UI/API boundary test, dependency scan |
| Model + viewer + account/platform | model, viewer, login/account/admin platform | auth, roles, database, API, audit logs, network exposure | penetration test, access control review, logging and incident response |
| Hardware-bound connected SaMD | model tied to acquisition device or connected appliance | device OS, network ports, update path, hospital LAN/VLAN, PACS/HIS links | system architecture review, network segmentation, mTLS/cert strategy, post-market patch plan |

## Tool / service matrix
| Test or activity | Purpose | Output report | Remediation path |
| --- | --- | --- | --- |
| SBOM | know components and versions | component inventory and known vulnerability list | upgrade, pin, replace, or compensate |
| White-box review | inspect code/config/dependencies with access | code/config risk findings | patch code, harden config, remove secrets |
| Black-box test | test visible behavior without internals | exploitable behavior and surface map | close exposed paths, add validation, limit permissions |
| Penetration test | simulate realistic attack path | prioritized risk narrative | fix critical path, retest, document residual risk |
| Network / deployment review | understand hospital deployment exposure | architecture risk map | segmentation, mTLS, firewall rules, least privilege |
| Post-market monitoring | keep product safe after release | monitoring and response plan | vulnerability intake, patch timeline, customer notice |

## 2026-04-30 v0.8 acceptance
- The deck is speakable even if not visually polished.
- It contains TFDA main / FDA support framing.
- It has the 4 scenario matrix.
- It has at least one concrete scan-finding / remediation example.
- It ends with a service-oriented close, not a lecture-only ending.

## Source-management checklist
- [x] Archive `附件四、免責聲明_CYBERSEC 2026.jpg` as `assets/cybersec-2026-disclaimer-slide.jpg`.
- [x] Archive `附件一、講者行前通知.pdf` as `assets/cybersec-2026-speaker-instructions.pdf`.
- [x] Archive `附件二_演講授權同意書_2026臺灣資安大會.pdf` as `assets/cybersec-2026-speaking-authorization-form.pdf`.
- [x] Archive `附件三、講師簡報模板_Healtcare Security Forum_CYBERSEC 2026.pptx` as `assets/cybersec-2026-healthcare-security-forum-slide-template.pptx`.
- [x] Archive the `2026-04-20` CDE / Prof. Wu forwarded invitation PDF as `data/knowledge/personal/sources/2026-04-20-cde-prof-wu-clinical-medical-device-it-cybersecurity-speech/assets/cde-2026-prof-wu-clinical-medical-device-it-cybersecurity-speech-time-confirmation-email.pdf`.
- [x] Use `assets/cybersec-2026-disclaimer-slide.jpg` as slide 2 in the conference deck.
- [x] Send a public-safe organizer deck copy with the reply email and signed authorization form to Lilian by `2026-04-22` shutdown, before `2026-04-23`.
- [x] Archive the `2026-04-23` no-bounce / no-correction Gmail thread snapshot as `data/knowledge/personal/sources/2026-04-09-cybersec-2026-speaker-pre-event-notice/assets/cybersec-2026-speaker-pre-event-notice-no-bounce-check-20260423.pdf`.
- [x] Use a clean generated CYBERSEC-colored skeleton for the first sendable deck; keep the official Healthcare Security Forum template available for later visual migration if needed.

## Current deck artifacts
- Active talk repo: `../cybersec-2026-ai-samd-talk/`.
- Exact sent deck PDF: `current/cybersec-2026-ai-samd-cybersecurity-in-practice-v1.3.5-sent-20260422.pdf`.
- Prior canonical deck PDF path recorded from the dedicated talk repo handoff: `../cybersec-2026-ai-samd-talk/outputs/deck/cybersec-2026-ai-samd-cybersecurity-in-practice-v1.3.pdf`.
- Editable source note: no editable source PPTX for `v1.3` is currently present in the talk repo.
- Generated compact fallback PPTX: `../cybersec-2026-ai-samd-talk/outputs/deck/cybersec-2026-ai-samd-compact-optimized.pptx`.
- Generated compact fallback PDF preview / USB backup copy: `../cybersec-2026-ai-samd-talk/outputs/deck/cybersec-2026-ai-samd-compact-optimized.pdf`.
- Generated compact fallback source: `../cybersec-2026-ai-samd-talk/data/presentation_os.json`.
- Active human docs: `../cybersec-2026-ai-samd-talk/docs/01_talk_design.md`, `../cybersec-2026-ai-samd-talk/docs/02_evaluation_system.md`, and `../cybersec-2026-ai-samd-talk/docs/03_rehearsal_workflow.md`.
- Tracked deep speaker notes: legacy zh-TW baseline `../cybersec-2026-ai-samd-talk/docs/speaker-notes/cybersec-2026-ai-samd-slide-deep-notes-v1.md` and English companion `../cybersec-2026-ai-samd-talk/docs/speaker-notes/cybersec-2026-ai-samd-slide-deep-notes-v2-en.md`; the duplicate zh-TW `v2` copy was removed because it was byte-identical to `v1`.
- Output-practice capture: `../cybersec-2026-ai-samd-talk/docs/speaker-notes/cybersec-2026-ai-samd-slide-output-practice-capture-2026-04-27.md`.
- Audience Q&A prep: `../cybersec-2026-ai-samd-talk/docs/speaker-notes/cybersec-2026-ai-samd-audience-qa-v1-zh-tw.md`.
- Slide-by-slide audience analysis: `../cybersec-2026-ai-samd-talk/docs/speaker-notes/cybersec-2026-ai-samd-v1.3-slide-audience-analysis-zh-tw.md`.
- Transcript plus audience reader: `../cybersec-2026-ai-samd-talk/docs/speaker-notes/cybersec-2026-ai-samd-v1.3-transcript-plus-audience-analysis-zh-tw.md`.
- Taiwan Mandarin transcript/audience/deep-notes reader: `../cybersec-2026-ai-samd-talk/docs/speaker-notes/cybersec-2026-ai-samd-v1.3-transcript-audience-plus-deep-notes-zh-tw.md`.
- Active generated reports: `../cybersec-2026-ai-samd-talk/outputs/current/`.
- Organizer send package / sent-state note: `data/projects/2026-04-medical-cybersecurity-tfda-fda-industry-deck/current/cybersec-2026-lilian-organizer-send-package-20260422.md`.
- Presentation scoring-system handoff: `data/projects/2026-04-medical-cybersecurity-tfda-fda-industry-deck/current/cybersec-2026-presentation-scoring-system-handoff-20260421.md`.
- Legacy generator for the old planning-local deck: `data/projects/2026-04-medical-cybersecurity-tfda-fda-industry-deck/tools/build_cybersec_2026_deck.py`.
- Emergency organizer deck only if the canonical `v1.3` PDF path fails: `data/projects/2026-04-medical-cybersecurity-tfda-fda-industry-deck/current/cybersec-2026-ai-samd-cybersecurity-lin-jia-sheng-organizer-v0.9-20260422.pptx`.
- Fallback organizer PDF preview: `data/projects/2026-04-medical-cybersecurity-tfda-fda-industry-deck/current/cybersec-2026-ai-samd-cybersecurity-lin-jia-sheng-organizer-v0.9-20260422.pdf`.
- Conservative fallback only if the canonical `v1.3` PDF and `v0.9` fail: `data/projects/2026-04-medical-cybersecurity-tfda-fda-industry-deck/current/cybersec-2026-ai-samd-cybersecurity-lin-jia-sheng-organizer-v0.8-20260422.pptx`.
- Conservative fallback PDF preview: `data/projects/2026-04-medical-cybersecurity-tfda-fda-industry-deck/current/cybersec-2026-ai-samd-cybersecurity-lin-jia-sheng-organizer-v0.8-20260422.pdf`.
- Reference-only old notes/runbooks/prototypes: `v0.9` speaker notes, `v0.9` first rehearsal runbook, keynote-style transcript, six-slide visual design brief/prototypes, Canva review, and slide knowledge brief under `current/`.
- Validation: canonical `v1.3` PDF has `15` pages, 16:9 page size, expected title text, Table of Contents, and key section titles. The generated compact `14`-slide package remains a technically validated fallback; `v0.9` remains a technically validated `23`-slide fallback; `v0.8` remains the safe conservative fallback.

## Redundancy decision
- Canonical source of truth: `../cybersec-2026-ai-samd-talk/`.
- Planning repo should keep status, deadlines, send package, fallback artifacts, and handoff links only.
- 2026-05-07 preservation update: planning-local artifacts are now frozen and indexed in `2026-05-07-post-talk-artifact-preservation-manifest.md`; do not delete or move old material without a follow-up manifest and explicit confirmation.
- Do not copy the compact transcript, scoring system, or rehearsal workflow back into this planning project folder.
- Do not use `v0.9` speaker notes, `v0.9` runbook, keynote transcript, or six-slide visual prototypes as active transcript/deck sources. They are reference/fallback context until the organizer-send and `2026-04-30` correction window are safely past.
- Archive/delete review candidate after `2026-04-30`: old planning-local `v0.9` notes/runbook/transcript, six-slide prototypes, Canva review, and slide knowledge brief. Keep the compact fallback, `v0.9`, and `v0.8` PPTX/PDF files until the organizer accepts the canonical `v1.3` PDF deck.

## 2026-04-21 scoring / rehearsal package update
- Canonical package location: `../cybersec-2026-ai-samd-talk/`.
- Boundary correction: `ns-practice-ta-grading-2026s` is unrelated to CYBERSEC speech delivery; CYBERSEC talk design/evaluation artifacts now live in the dedicated sibling talk repo.
- Active package entrypoints:
  - `AGENTS.md`
  - `README.md`
  - `docs/01_talk_design.md`
  - `docs/02_evaluation_system.md`
  - `docs/03_rehearsal_workflow.md`
  - `docs/speaker-notes/`
- Slide-design rule: keep the `100`-point speech rubric as the macro score, then apply the separate slide constraint system as pass/fail gates, penalties, and optional quality multiplier.
- Presentation OS implementation: `data/presentation_os.json` still drives generated Markdown/CSV reports under `outputs/current/` plus the editable optimized `14`-slide fallback PPTX under `outputs/deck/` in the dedicated talk repo.
- Dedicated talk repo commits: `2ae2b79 docs: add CYBERSEC presentation OS reports`; `7e94456 docs: add optimized CYBERSEC PPTX deck`; `4a0755d docs: refresh CYBERSEC source and deck build`; `57604e8 docs: add versioned CYBERSEC speaker notes`; `5ec04f0 docs: add canonical CYBERSEC v1.3 deck`; `78baf40 docs: add CYBERSEC v1.3 speaker prep readers`; `4f268e5 docs: route CYBERSEC generated deck as fallback`. The repo now has `origin` configured at `https://github.com/JasonLn0711/cybersec-2026-ai-samd-talk.git`.
- Planning repo commit state: current Ubuntu planning branch `feat/0421` is at local commit `ed03a27 docs: update CYBERSEC v1.3 planning handoff`.
- Removed the redundant planning-local rough drafts from `current/scoring-system/`; the dedicated talk repo is the canonical source for rehearsal/deck repair.
- Current cleanup: the dedicated talk repo collapsed the old six-doc split into three first-principles docs and removed stale `outputs/deck/narrative_plan.md`; keep future work routed through design -> evaluation -> rehearsal.
- Second-pass source audit: verified the compact fallback deck against official CYBERSEC session/speaker pages, FDA cybersecurity / 524B material, FDA 2026 cybersecurity guidance, NIST AI RMF functions, and NIST CSF 2.0 functions; updated the canonical talk source and fallback PPTX labels/notes so slide 4 uses clinical-continuity language, slide 6 uses `Monitor / CVD / Patch / SBOM`, slide 7 separates AI RMF from CSF language, slide 9 adds `Backup`, and the transcript states that `Patch SLA` is an operating model rather than an FDA term.
- Current decision: use the canonical `v1.3` PDF as the send/rehearsal deck; use the compact `14`-slide package only as generated fallback/reference. Do not let scoring-package work delay the 4/22 Lilian email.
- Planning boundary: this planning repo keeps the project note, send package, local deck artifacts, and handoff only; the talk package itself stays canonical in the dedicated sibling talk repo.
- First-principles routing update: the dedicated repo owns talk artifacts and generated outputs; this planning repo owns project status, deadlines, capacity, and handoff links. The deck builder has been migrated off `@oai/artifact-tool` to public `pptxgenjs`; current Ubuntu checks pass for report generation, full PPTX rebuild, LibreOffice PDF export, 14-page PDF validation, and preview PNG rendering.
- Speaker-notes update: the imported `slide_notes_for_me.md` was moved out of Downloads into tracked talk-repo file `docs/speaker-notes/cybersec-2026-ai-samd-slide-deep-notes-v1.md`; the identical zh-TW `v2` working copy was removed during first-principles cleanup to keep one owner per content purpose.
- Canonical deck update: imported `/home/jnln3799/Downloads/AI SaMD Cybersecurity In Practice -v1.3.pdf` into the talk repo as `outputs/deck/cybersec-2026-ai-samd-cybersecurity-in-practice-v1.3.pdf`. The original Downloads PDF remains untouched.
- Q&A update: added `docs/speaker-notes/cybersec-2026-ai-samd-audience-qa-v1-zh-tw.md` with source-verified Taiwanese Mandarin Q&A for general public, software-company, and cybersecurity-engineer audiences; planning keeps only the link, not duplicated content.
- Slide-by-slide audience update: added `docs/speaker-notes/cybersec-2026-ai-samd-v1.3-slide-audience-analysis-zh-tw.md` with per-slide audience concerns, role-specific responses, trend notes, and an 8-question hard-Q drill; planning keeps only this status/link.
- Transcript/audience update: added `docs/speaker-notes/cybersec-2026-ai-samd-v1.3-transcript-plus-audience-analysis-zh-tw.md` so the talk track and audience analysis can be read together slide by slide.
- Taiwan Mandarin deep-reader update: added `docs/speaker-notes/cybersec-2026-ai-samd-v1.3-transcript-audience-plus-deep-notes-zh-tw.md`, combining the transcript-plus-audience reader with the English deep-note companion slide by slide in Taiwan Mandarin; this is a rehearsal reader, not a new deck source.

## Day-of logistics checklist
- [x] Deliver CYBERSEC 2026 talk smoothly in the `30`-minute slot.
- [x] Use rehearsal/mindset adjustment/listening-to-other-speakers loop as the final delivery preparation pattern.
- [x] Record support present: Han, PhD classmate 吳冠廷, and former Marseille Institute colleague 蘇鈺柔.
- [x] Record post-talk business-card exchange and future-exchange interest from GRASP HEALTH / 格斯生醫 and FaceHeart / 鉅怡智慧.
- [ ] Check in early at the 4F speaker information counter.
- [ ] Arrive at meeting room `4A` by `2026-05-06 16:05`.
- [ ] Use the `16:00-16:15` break for slide and microphone check.
- [ ] Use organizer-provided computer as the primary speech machine.
- [ ] Bring portable USB deck copy as backup.
- [ ] Bring personal laptop privately as backup; no need to tell organizer.
- [ ] Bring ID-card copy for reimbursement / sign-off.

## Organizer reply sent state
- Sent on `2026-04-22` in the original Gmail thread; replied-thread evidence is archived in the CYBERSEC source bundle.
- `2026-04-23` no-bounce / no-correction thread snapshot is archived in the same source bundle.
- Q1: organizer prepares the uploaded deck in the classroom; `2026-04-30` remains the official fallback/correction deadline only if Lilian requests a correction or the deck changes materially.
- Q2: use organizer-provided computer.
- Q3: yes to lunch; non-vegetarian / 葷食.
- Authorization: signed form returned with the same reply.
- Backup: portable USB deck copy and personal laptop.
- Current next action: rehearse/trim and prepare portable backup; do not rebuild or resend the deck unless Lilian sends a correction request.
- 2026-05-04 Gmail triage: prepared a short manual acknowledgment to Lilian confirming the speaker badge / room access note and preserving the already-sent deck as the classroom-preload file. It was not saved as a Gmail draft because Gmail write scope is unavailable. This is optional courtesy follow-up, not a blocker.

## 2026-05-06 Post-Talk Industry Signal

- Source note: `data/knowledge/personal/sources/2026-05-06-cybersec-post-talk-industry-cards/source.md`
- What happened: after the CYBERSEC talk, people stayed to give business cards and expressed interest in future exchange.
- Private contacts recorded there:
  - GRASP HEALTH / 格斯生醫, 陳昱融.
  - FaceHeart / 鉅怡智慧, 王駿逸, 網路安全架構處.
- Interpretation: this is an early industry-network signal for AI SaMD cybersecurity, regulated AI software, AI workflow/governance, cybersecurity architecture, and medical AI deployment.
- Boundary: do not treat this as a confirmed partnership, job lead, endorsement, project, or required follow-up task.
- Capacity rule: no exploratory follow-up messages are scheduled for W19; reopen only if a concrete external trigger appears.

## 2026-04-27 output-practice routing
- Trigger: at `13:30`, Jason clarified that the useful CYBERSEC work is not reading more slide knowledge / background notes first.
- New practice mode: write how each slide will actually be spoken, fast, in Notion; keep bad logic, vague claims, and待查 notes visible.
- Why it matters: this exposes which slide transitions, claims, or technical explanations are not yet speakable.
- Planning rule: do not treat every weak point as permission for a research sprint. Convert each one into one of:
  - a tighter spoken sentence,
  - a source / evidence lookup,
  - a transition repair,
  - a cut marker for the timed run.
- Canonical capture file: `../cybersec-2026-ai-samd-talk/docs/speaker-notes/cybersec-2026-ai-samd-slide-output-practice-capture-2026-04-27.md`.

## Director-share brief
- Use when briefly informing 主任 or another senior stakeholder.
- Message shape: honored to be invited as a CYBERSEC 2026 speaker; CYBERSEC is a major domestic and internationally visible cybersecurity conference; topic is `AI 軟體醫材的資安實戰：從美國 FDA 524B 規範到 Threat Modeling 與 Patch SLA 的完整落地`; session is `2026-05-06 16:15-16:45` at `南港展覽館 2 館 4F 展區 會議室 4A`; include the session and speaker links.
