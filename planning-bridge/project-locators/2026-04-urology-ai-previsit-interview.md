# Project

## Identity
- Project name: 2026-04 泌尿預診導航 v1 MVP product
- Working brand: `泌尿預診導航` (`UroPrevisit Navigator`)
- Owner: Jason
- Meeting: `2026-04-23 10:00-11:00`, online
- Follow-up: `2026-04-23 16:00`, 吳老師 discussion about productization, current-system observation, local/on-prem deployment, hardware/RAG acceleration, and business/governance gates
- People: 吳育德老師, 許富順醫師 / 泌尿科, Jason
- Status: post-meeting capture completed; safe-local v1 was pulled forward in W17 and now needs W18 verification / handoff by `2026-04-30`; original four-case reviewer closeout remains pending follow-up
- Priority decision: first priority over Cancer Biology `R234` on `2026-04-23`; take leave from Cancer Biology and recover class material through recording or classmate notes if needed
- Thinking / governance repo: `/home/jnclaw/every_on_git_jnclaw/phd-life-system/urology-ai-previsit-thinking-spec`
- Implementation / demo repo: `/home/jnclaw/every_on_git_jnclaw/phd-life-system/urology-ai-previsit-demo`
- Knowledge locator: `data/knowledge/healthcare/urology/previsit-interview/source.md`

## Current Handoff
- Canonical owner for governance/thinking: `../urology-ai-previsit-thinking-spec/`.
- Canonical owner for implementation/demo: `../urology-ai-previsit-demo/`.
- Planning role: source links, meeting notes, decision gates, knowledge locators, and capacity status only.
- Current status: safe-local synthetic v1/review-packet path is the handoff surface; do not rebuild or expand product scope before reviewer evidence.
- Current demo repo state: `../urology-ai-previsit-demo` has local pending review-workspace edits (`docs/reviews/2026-04-23-urology-review/README.md` modified and `handoff-readiness-2026-04-28.md` untracked); treat them as not fully published until verified/committed.
- Current thinking repo state: `../urology-ai-previsit-thinking-spec` is clean at `5cefbe9 docs: record urology repo separation decision`.
- Next human action: open `http://localhost:4173/app/review-packet/`, run the four-case review, fill `docs/reviews/2026-04-23-urology-review/decision-capture.md`, then run `npm run review:closeout` before selecting exactly one next artifact.
- Safety boundary: synthetic data only; no real patient identifiers, diagnosis, triage, treatment advice, autonomous exam ordering, HIS/EHR/EMR/registration/queue/messaging integration, or clinical use; clinician review required.
- Do not duplicate: do not migrate implementation code, governance docs, synthetic cases, tests, or mock exports back into planning.
- Review / expiry date: revisit when the four-case review evidence is filled and `review:closeout` passes, or when a real clinical/governance stakeholder requests a new decision.

## Purpose
Turn the post-meeting evidence into a safe local `v1` MVP product package that tests whether a physician-reviewed urology previsit workflow can reduce repeated front-desk / nurse / physician questioning before the formal visit.

The `2026-04-30` goal is not hospital deployment. Because the v1 route and Phase 0 readiness packet were pulled forward in W17, the W18 goal is verification, handoff, and decision clarity: confirm the synthetic product preview is safe, source-labeled, review-ready, and explicit about funding, IP, privacy, HIS, regulatory, and research gates.

## 2026-04-30 v1 MVP decision
- Selected path: `Safe Local v1`.
- Deadline: `2026-04-30` Asia/Taipei for verification / handoff checkpoint.
- Product identity: use `泌尿預診導航` as the working brand for our build. `陽明小幫手` remains 許醫師's prototype/current-system product name and benchmark only.
- Primary implementation repo: `/home/jnclaw/every_on_git_jnclaw/phd-life-system/urology-ai-previsit-demo`.
- Product route target: `http://localhost:4173/app/v1/`; current verified local fallback on `2026-04-23` is `http://127.0.0.1:4176/app/v1/` because the default port was occupied.
- Local agenda owner: W18 planning files in this repo.
- Calendar owner: primary Google Calendar, solo busy/focus blocks, no attendees, no Google Meet.
- V1 scope:
  - synthetic data only
  - not for clinical use
  - physician review required
  - regulatory status not determined
  - no live HIS / EMR / EHR / registration integration
  - no real patient data
  - no diagnosis, triage, treatment advice, autonomous exam ordering, or autonomous exam recommendation
  - no real ID number, birthday, phone, medical-record number, appointment action, messaging, or live queue handling
- Source-backed v1 focus:
  - already-registered waiting-room QR workflow learned from `陽明小幫手`
  - `初診` / `回診` branch
  - initial-visit collection of chronic disease history, operation history, medication history, allergies, and symptom-specific forms
  - return-visit collection of prior-medication effect, side effects, and patient-desired follow-up-test discussion
  - doctor-provided 12-complaint exam-prep matrix shown only as physician/nurse confirmation reminders
- Current-system benchmark:
  - `聯醫小幫手`: `https://chat.argon.chat/visitor?guid=rmw6oqqxgy`
  - `陽明小幫手`: `https://chat.argon.chat/visitor?guid=avp6dg160g`
  - Use as benchmark links only; do not copy runtime behavior, use `陽明小幫手` as our product name, or enter real patient data.
- V1 output:
  - productized browser console under `app/v1/`
  - physician summary and exam-prep mockup
  - copyable text summary and mock JSON export
  - one-page handoff / research scoping packet
  - verification checklist proving the safety boundary is still visible
- W18 output:
  - verify the current v1 route and Phase 0 readiness path
  - fill only named gaps in the handoff packet / benchmark table / first-three-flow worksheet
  - write a short 4/30 checkpoint summary with ready state, missing evidence, decision gates, and next smallest artifact
  - do not rebuild v1 from scratch unless verification finds a real break
- Next decision gates after v1:
  - Funding: whether hospital innovation / deep-cultivation budget can cover cloud/API cost instead of personal subsidy.
  - IP: 許醫師 patent status, team/company/聯醫 rights, and any vendor-contract conflict.
  - HIS: export / copy / mock API first; real writeback only after hospital information office, privacy, security, and legal review.
  - Research: pilot metrics, consent/IRB/de-identification/retention, and whether physician-edited summaries can ever be used for learning.
  - Regulatory: formal TFDA/FDA review before any external non-device or clinical-use claim.

## 2026-04-28 handoff verification checkpoint
- Fastest-path decision: do not rebuild. Treat the current local demo stack as the handoff surface because it is already implemented and verified.
- Current local implementation repo: `/Users/iKev/Desktop/02_Projects_and_Code/everything_on_git/urology-ai-previsit-demo`.
- Handoff readiness note: `/Users/iKev/Desktop/02_Projects_and_Code/everything_on_git/urology-ai-previsit-demo/docs/reviews/2026-04-23-urology-review/handoff-readiness-2026-04-28.md`.
- Verified handoff entrypoint: `http://localhost:4173/app/review-packet/`.
- Supporting routes: `/app/patient-demo/`, `/app/clinician-summary/`, `/app/reviewer-workbench/`, reviewer one-page handout, decision capture, and post-review action playbook.
- Verification results:
  - demo repo `npm test`: `32/32`
  - demo repo `npm run smoke`: `173/173`
  - demo repo `npm run meeting:check`: `38/38` after starting the static server with `npm start`
- Route mismatch note: older planning entries mention `app/v1/` and `npm run phase0:check`, but those are not present in the current local checkout. For handoff, this is a routing / planning-drift issue, not a rebuild blocker.
- Next human action: start from the browser review packet, run the four-case review, fill `docs/reviews/2026-04-23-urology-review/decision-capture.md`, then run `npm run review:closeout` before selecting exactly one next artifact.
- Boundary remains unchanged: synthetic data only, not clinical use, no real patient identifiers, no diagnosis / triage / treatment advice, no autonomous exam ordering, no HIS/EHR/EMR/registration/queue/messaging integration, and clinician review required.

## MVP implementation boundary
- Thinking repo owns first-principles system logic, safety boundaries, discovery protocol, clinical-question governance, and evidence mapping.
- App repo owns code, UI, synthetic cases, tests, product-preview documentation, and mock export artifacts.
- Planning repo owns source links, meeting notes, decision logs, and knowledge locators only.
- V1 is a browser-based synthetic-data product preview; no real patient data, diagnosis, treatment recommendation, autonomous triage, EHR/HIS integration, registration integration, or voice-first interview.
- Current system shape: patient/family intake helps the older patient state the problem calmly; family can help operate but answer source remains visible; nurse workbench repairs missing information; physician summary gives a short review-only previsit scan.
- Current v1 product path after implementation: serve the repo with `python3 -m http.server 4173`, then start from `http://localhost:4173/app/v1/`.
- Current demo path: serve the repo with `python3 -m http.server 4173`, then start from `http://localhost:4173/app/review-packet/`. If `4173` is occupied, use another local port and keep the same `/app/.../` routes.
- Browser demo surfaces:
  - V1 MVP product console: `http://localhost:4173/app/v1/`
  - Review packet: `http://localhost:4173/app/review-packet/`
  - Patient/family intake: `http://localhost:4173/app/patient-demo/`
  - Nurse補問 workbench: `http://localhost:4173/app/nurse-workbench/`
  - Clinician summary sample: `http://localhost:4173/app/clinician-summary/`
  - Visit packet export: `http://localhost:4173/app/visit-packet/`
  - Reviewer workbench: `http://localhost:4173/app/reviewer-workbench/`
  - Reviewer one-page handout: `http://localhost:4173/docs/reviews/2026-04-23-urology-review/reviewer-one-page-handout.md`
  - Post-review closeout: `http://localhost:4173/docs/reviews/2026-04-23-urology-review/post-review-closeout.md`

## Current repository state
- Thinking / governance repo:
  - `/home/jnclaw/every_on_git_jnclaw/phd-life-system/urology-ai-previsit-thinking-spec/`
  - Current structure: `core/`, `clinical-question-governance/`, `discovery/`, `records/`, `meta/`.
  - Key clinical-question governance entrypoint: `/home/jnclaw/every_on_git_jnclaw/phd-life-system/urology-ai-previsit-thinking-spec/clinical-question-governance/mvp_question_set_recommendation.md`.
  - Key source-to-conclusion map: `/home/jnclaw/every_on_git_jnclaw/phd-life-system/urology-ai-previsit-thinking-spec/clinical-question-governance/source_evidence_map.md`.
- Demo repo:
  - `/home/jnclaw/every_on_git_jnclaw/phd-life-system/urology-ai-previsit-demo/`
  - Owns static browser MVP, browser review packet, patient/family intake UI, nurse補問 workbench, clinician summary, visit packet, synthetic cases, summary generation, reviewer workbench, sample outputs, and tests.
  - Demo source trace points back to the thinking repo as the clinical governance source of truth.
  - Latest pushed demo commit: `c10c2fb docs: add clinician demo report`.
  - Current working tree still has uncommitted patient-intake simplification changes in `app/patient-demo/`, `app/shared/summary.js`, and `tests/summary.test.js`; do not treat those UI changes as stable until verified and committed.
  - Verification on `2026-04-22`: `npm test` passed `22/22`; `npm run smoke` passed `126/126`; `git diff --check` passes.
- Planning repo:
  - Keeps this project note and knowledge locators only.
  - Do not migrate implementation or governance docs back into the planning repo.

## 2026-04-23 許富順醫師 sync-up capture
- Raw sources were renamed and archived under `data/knowledge/healthcare/urology/previsit-interview/assets/2026-04-23-hsu-sync/`.
  - Slide deck: `2026-01-28-lianyi-ai-helper-initial-visit-slides.pdf`.
  - Updated transcript: `2026-04-23-0958-hsu-urology-ai-previsit-system-sync-transcript.txt`, replacing the earlier rough transcript.
- LINE follow-up sources were renamed, archived, and copied into the v1 product repo for research.
  - QA/rules file: `data/knowledge/healthcare/urology/previsit-interview/assets/2026-04-23-hsu-training-materials/2026-01-05-lianyi-ai-helper-qa-training-rules.docx`.
  - TUA guideline: `data/knowledge/healthcare/urology/previsit-interview/assets/2026-04-23-hsu-training-materials/2024-tua-urology-treatment-guideline.pdf`.
  - Extracted requirements: `data/projects/2026-04-urology-ai-previsit-interview/2026-04-23-hsu-training-materials-requirements.md`.
- Cleaned meeting summary: `data/knowledge/healthcare/urology/previsit-interview/meeting-summary-2026-04-23.md`.
- Detailed next-actions note: `data/projects/2026-04-urology-ai-previsit-interview/2026-04-23-next-actions.md`.
- Gemini synthesis routing note: `data/projects/2026-04-urology-ai-previsit-interview/2026-04-23-gemini-synthesis-routing.md`.
- Meeting reality: the planned case-level demo review shifted into landing strategy, funding, vendor dependency, IP, privacy/security, and whether 吳老師/Jason's team could build a similar or better platform.
- 許醫師 gave a positive signal toward team collaboration and can provide the AI-agent keywords / QA / training process he used.
- Key vendor benchmark: current 5-seat service is about NT$40,000+ per month; 創智動能 quotes for 10-seat and 100-seat capacity are pending.
- Key boundary: platform should remain previsit summary / exam-prep support only. Diagnosis, treatment, real patient-data production use, live HIS/registration integration, and any TFDA non-device claim need formal review before commitment.
- QA update: the safest near-term workflow is the `陽明小幫手` waiting-room pattern, because the doctor-provided rules explicitly remove ID number and birthday from the initial-visit waiting-room workflow. The product name for our build remains `泌尿預診導航`.
- TUA update: guideline content can support physician-reviewed history, questionnaires, diaries, urinalysis/PVR/uroflow/imaging discussion, but the guideline itself is reference material, not a legal standard or product classification.
- Updated transcript adds a stronger internal commercialization hypothesis after 許醫師 left: possibly deploy at 聯醫 for free/low cost, commercialize elsewhere through the company, and negotiate 聯醫 revenue share. Treat this as an internal strategy question, not a promise.
- Gemini's synthesis was incorporated as a second-opinion routing note: adopt the throughput/infrastructure framing, but downgrade TFDA certainty, immediate HIS integration, immediate multi-specialty expansion, and real-data fine-tuning into decision gates.
- Next artifact is now the bounded `v1` MVP package due `2026-04-30`: landing scoping packet plus one-page physician summary / exam-prep mockup, still synthetic-only and not a hospital deployment.
- Demo review workspace status should be `pending follow-up` until the missing four-case reviewer evidence is captured.

## 2026-04-23 v1 pull-forward implementation checkpoint
- First-principles checkpoint: source evidence, then boundary, then artifact, then verification. Do not let v1 become production scope.
- Source evidence: 許醫師's QA/rule file and 2024 TUA guideline were archived in planning and copied to the demo repo.
- Product artifact: `/home/jnclaw/every_on_git_jnclaw/phd-life-system/urology-ai-previsit-demo/app/v1/` now includes `泌尿預診導航` working-brand framing, waiting-room workflow requirements learned from `陽明小幫手`, no-ID/no-birthday guardrail, initial/return branch rules, 12-complaint source-derived exam-prep matrix, copyable summary, and synthetic mock JSON.
- Mock JSON explicitly carries no-real-identifier/no-order flags, including `realIdentifiersCollected: false`, `initialVisitNoIdOrBirthday: true`, `realQueueHandling: false`, and `orderPlaced: false`.
- Demo docs updated: v1 handoff packet, safety/privacy boundaries, dated review README, decision capture, research extraction, and hsu-training requirements note.
- Planning docs updated: source locator, verified question map, meeting summary, next-actions note, v1 plan, W17 day/weekly notes, W18 week/day notes, and knowledge catalog.
- Initial pull-forward verification passed:
  - demo repo `npm test`: `39/39`
  - demo repo `npm run smoke`: `219/219`
  - planning repo `python3 scripts/validate_knowledge.py`: `27` metadata notes / `27` catalog entries
  - planning agenda views for W18 and `2026-04-27` to `2026-04-30`
  - `git diff --check` in both planning and demo repos
- Calendar caveat: Google Calendar connector write/search remained unavailable; local planning agenda and `.ics` fallback remain the current durable calendar records.

## 2026-04-23 next major research checkpoint
- First-principles decision: the next research work is not more UI, HIS integration, or model training. It is Phase 0 synthetic clinician/nurse review that turns v1 into evidence.
- Research question: can the safe-local v1 product preview help a urology clinic judge previsit information readiness before physician encounter while preserving clinician authority and avoiding real patient data?
- Canonical protocol: `/home/jnclaw/every_on_git_jnclaw/phd-life-system/urology-ai-previsit-thinking-spec/discovery/V1_PHASE0_CLINICIAN_REVIEW_PROTOCOL.md`.
- Demo-facing packet:
  - `/home/jnclaw/every_on_git_jnclaw/phd-life-system/urology-ai-previsit-demo/docs/research/v1-phase-0-clinician-review-protocol.md`
  - `/home/jnclaw/every_on_git_jnclaw/phd-life-system/urology-ai-previsit-demo/docs/research/v1-phase0-review-session-script.md`
  - `/home/jnclaw/every_on_git_jnclaw/phd-life-system/urology-ai-previsit-demo/docs/research/v1-phase0-reviewer-ask.md`
  - `/home/jnclaw/every_on_git_jnclaw/phd-life-system/urology-ai-previsit-demo/docs/research/v1-phase0-review-capture.md`
  - `/home/jnclaw/every_on_git_jnclaw/phd-life-system/urology-ai-previsit-demo/docs/research/v1-current-system-benchmark-table.md`
  - `/home/jnclaw/every_on_git_jnclaw/phd-life-system/urology-ai-previsit-demo/docs/research/v1-priority-flow-shortlist.md`
  - `/home/jnclaw/every_on_git_jnclaw/phd-life-system/urology-ai-previsit-demo/docs/research/v1-priority-flow-review-worksheet.md`
  - `/home/jnclaw/every_on_git_jnclaw/phd-life-system/urology-ai-previsit-demo/docs/research/v1-review-scorecard.md`
  - `/home/jnclaw/every_on_git_jnclaw/phd-life-system/urology-ai-previsit-demo/docs/research/v1-phase0-analysis-template.md`
  - `/home/jnclaw/every_on_git_jnclaw/phd-life-system/urology-ai-previsit-demo/docs/research/v1-phase0-decision-memo-template.md`
  - `/home/jnclaw/every_on_git_jnclaw/phd-life-system/urology-ai-previsit-demo/docs/research/v1-governance-gate-register.md`
  - `/home/jnclaw/every_on_git_jnclaw/phd-life-system/urology-ai-previsit-demo/scripts/check-phase0-readiness.js`
- Pre-session readiness gate: run `npm run phase0:check` from the demo repo after starting the static server, or use `UROLOGY_PREVISIT_BASE_URL=http://127.0.0.1:4176 npm run phase0:check` against the current fallback server.
- Execution loop: run readiness gate, send reviewer ask, run the 30-45 minute script, fill scorecard, analyze evidence, write decision memo, update gates, then implement only the smallest named artifact.
- Proposed first-three review default: `頻尿或夜尿`, `小便困難或尿不出來`, and `血尿或健檢發現潛血`; treat as a planning scaffold until 許醫師 confirms/replaces/reorders it.
- Product/research alignment update: the demo case set now includes `synthetic-hematuria-occult-blood`, so all three proposed Phase 0 flows have runnable synthetic cases.
- Thinking records updated: the 2026-04-23 meeting capture, decision record, extraction notes, evaluation file, and open questions now route to Phase 0 instead of a generic next conversation.
- Measurement focus: summary read time, usefulness rating, nurse/staff burden, safety clarity, useful/noisy/unsafe line counts, first three complaint flows, live evidence capture, and a continue / revise / narrow / pause / governance-review decision.
- Latest demo verification after adding the hematuria case and Phase 0 readiness gate: `npm test`, `npm run smoke`, `UROLOGY_PREVISIT_BASE_URL=http://127.0.0.1:4176 npm run phase0:check`, and `git diff --check` are the acceptance checks to run before reviewer use.
- W18 planning implication: Phase 0 execution kit belongs inside the April 30 v1 handoff, not as a new production or real-data sprint.

## 2026-04-23 current-system benchmark / Wu follow-up checkpoint
- Argon app links were captured as source references:
  - `聯醫小幫手`: public metadata describes help for urinary abnormalities, stones, health-check abnormalities, preliminary suggestions, and exam direction.
  - `陽明小幫手`: public metadata describes outpatient physician-assistant support for registration, return-visit questioning, and waiting-flow explanation.
- Requirement impact: v1 remains valid but Phase 0 must compare it against the current system. The risky terms `初步建議` and `檢查方向` should remain out of v1 until 許醫師 and regulatory review approve exact wording.
- 吳老師 follow-up assets were archived under `data/knowledge/healthcare/urology/previsit-interview/assets/2026-04-23-wu-followup/`.
- Follow-up transcript adds strategic gates:
  - Observe actual小幫手 operation and required settings before Phase 1.
  - Cloud-vs-local/on-prem deployment must become a governance question.
  - Hardware/RAG acceleration and Phison/AISSD-style ideas are experiments, not v1 dependencies.
  - Low-friction/free use at 聯醫 and commercialization elsewhere are business hypotheses, not current commitments.
  - 聯醫 community-health / local-clinic route is future scale strategy, not Phase 0 scope.
- Required revision: add current-system benchmark questions to Phase 0 capture, session script, and handoff docs.

## 2026-04-23 Phase 0 readiness-gate checkpoint
- First-principles decision: before asking for clinician time, the product must prove that source evidence, safety boundary, artifact routing, and verification all agree.
- Product repo command added: `npm run phase0:check`, implemented by `/home/jnclaw/every_on_git_jnclaw/phd-life-system/urology-ai-previsit-demo/scripts/check-phase0-readiness.js`.
- Gate coverage: live `app/v1/` route, five synthetic cases, three runnable priority-flow cases, live capture sheet, current-system benchmark table, scorecard, priority-flow worksheet, safety wording, no real-data/HIS/diagnosis/treatment/order claims, smoke checks, and Node tests.
- Current verified route: `http://127.0.0.1:4176/app/v1/`.
- Latest verification:
  - demo repo `npm test`: `40/40`
  - demo repo `npm run smoke`: `269/269`
  - demo repo `UROLOGY_PREVISIT_BASE_URL=http://127.0.0.1:4176 npm run phase0:check`: `81/81`
  - planning repo `python3 scripts/validate_knowledge.py`: `28` metadata notes / `28` catalog entries
  - planning agenda views for W18 and `2026-04-30`: passed
  - `git diff --check` in planning, demo, and thinking repos: passed
- Updated next action: run Phase 0 review with 許醫師 and ideally one nurse/staff reviewer, fill `docs/research/v1-phase0-review-capture.md`, then complete scorecard, priority-flow worksheet, analysis template, decision memo, and gate register before building the next artifact.

## 2026-04-22 role-separated system update
- Product reframing: the core system is now "let the older patient explain the problem calmly, let family help without mixing data sources, let nursing staff see exactly what still needs補問, and let the physician scan useful information before entering the visit."
- Patient/family boundary: patient-facing screens show only plain-language questions, reassurance, source selection, large text, high contrast, read-aloud, and confirmation. They must not expose nurse, physician, visit-packet, or reviewer screens.
- Source provenance: answer fields may be marked as本人回答、家屬協助操作、家屬觀察、現場補問, so subjective symptoms and helper observations are visible as different sources.
- Nurse workflow: the nurse workbench reads the patient/family answers, lists missing fields, converts each gap into a plain supplemental question, shows why it matters, and lets staff補問 without turning the system into diagnosis or triage.
- Physician workflow: the clinician summary shows main concern, active symptom modules, duration/bother, patient-reported pattern, missing information, neutral review statements, medication/context, and source notes in a concise previsit scan.
- Visit-packet workflow: a role-separated packet can be printed or copied for review discussion, with patient/family, nurse, and clinician pages kept distinct.
- Safety boundary: still synthetic-data-only; no diagnosis, treatment advice, autonomous triage, real patient-data use, or hospital integration.
- Case-set note: current expanded working tree uses the available synthetic cases in `app/shared/cases.js`; earlier case-count or recurrent-infection routing notes should not be treated as current until restored and verified in code.
- Meeting implication: use the current role-separated demo as-is for `2026-04-23`; capture reviewer evidence before adding more features.

## 2026-04-20 architecture / governance update
- Created the independent thinking/governance repo as a sibling of `planning-everything-track`.
- Added a clinical-question governance pack with patient, physician, and nurse needs; candidate-question matrix; MVP question set; and source evidence map.
- Reorganized the thinking repo by first-principles responsibility:
  - `core/` = stable system logic.
  - `clinical-question-governance/` = question inclusion rules and evidence map.
  - `discovery/` = meeting / decision operating pack.
  - `records/` = dated evidence trail.
  - `meta/` = assumptions, constraints, open questions, and repo architecture review.
- Clarified the demo repo boundary so it does not compete with the thinking repo as a clinical evidence source.
- Verification evidence: demo repo `npm test` passed `12/12`.

## 2026-04-21 MVP review-packet update
- Added the browser review packet as the intended meeting entrypoint in the demo repo.
- Purpose: let a reviewer start from boundaries, artifact routing, scorecard, and continue / revise / narrow / pause decision rules before seeing the patient flow.
- The browser review packet links to the patient MVP, clinician summary, reviewer workbench, workflow rehearsal, and Markdown review packet.
- Safety boundary remains unchanged: synthetic data only; no diagnosis, triage, treatment advice, real patient-data use, or autonomous clinical decision.
- Planning implication: for the 2026-04-23 meeting, start with the browser review packet, then move to the patient demo and reviewer workbench. Do not open new feature work before the meeting unless it fixes routing, safety wording, or a broken demo path.

## 2026-04-21 governed question-flow sync
- Synced the static patient demo to the governed MVP question set before adding any new feature surface.
- Added a distinct recurrent-infection concern route in the governed-flow pass so the patient flow would not collapse repeated infection history into only pain/burning; this was later superseded by the current role-separated working tree unless restored in `app/shared/cases.js`.
- Kept fluid/caffeine context, bladder-diary feasibility, medication support, comorbidity context, and water-pill / blood-thinner awareness visible as conditional fields when storage, voiding, hematuria, infection, or medication cues make them relevant.
- Current implementation note: the active demo case set should be checked from `app/shared/cases.js` before any meeting claim about case count.
- Regenerated meeting artifacts: `docs/workflow-rehearsal.md`, `docs/samples/README.md`, and clinician summary samples.
- Verification on `2026-04-21`: `npm test` passed `21/21`; `npm run smoke` passed `111/111`.
- Meeting implication: the 4/22 readiness step is now a final review of the question list and browser flow, not new feature work.

## 2026-04-21 detailed meeting-readiness pass
- Expanded the demo repo's live run sheet: `/home/jnclaw/every_on_git_jnclaw/phd-life-system/urology-ai-previsit-demo/docs/meeting-demo-script.md`.
- The run sheet now includes preflight commands, tab setup, a 30-minute agenda, case walkthrough, physician prompts, nurse/workflow prompts, product/governance prompts, acceptance criteria, fallback paths, and stop boundaries.
- Updated the Markdown and browser review packets so they consistently route the case review sequence.
- Added regression checks so stale `three-case` wording is caught by `npm run smoke`.
- Verification on `2026-04-21`: `npm test` passed `21/21`; `npm run smoke` passed `116/116`; `git diff --check` passed.
- Meeting implication: the next human step is to start from `http://localhost:4173/app/review-packet/`, run the detailed script, and capture one of `continue / revise / narrow / pause` plus one smallest next artifact.

## 2026-04-21 review evidence capture step
- Added the durable meeting capture template: `/home/jnclaw/every_on_git_jnclaw/phd-life-system/urology-ai-previsit-demo/docs/meeting-capture-template.md`.
- Expanded the reviewer workbench record so copied output now includes reviewer role, most useful summary line, noisiest/risky line, missing information, unsafe wording, expected workflow slot, staff burden concern, and case-specific evidence.
- Updated the browser review packet artifact map to route reviewers to the capture template.
- Regenerated sample reviewer records so examples show the richer evidence capture format.
- Verification on `2026-04-21`: `npm test` passed `22/22`; `npm run smoke` passed `123/123`; `git diff --check` passed.
- Meeting implication: after the case walkthrough, paste the copied reviewer workbench record into the capture template and choose exactly one next artifact.

## 2026-04-21 post-review action playbook
- Added the post-review action playbook: `/home/jnclaw/every_on_git_jnclaw/phd-life-system/urology-ai-previsit-demo/docs/post-review-action-playbook.md`.
- The playbook maps each review decision to exactly one next artifact:
  - `continue` -> revised question tree or one-page summary mockup.
  - `revise` -> one-page summary mockup or revised question tree.
  - `narrow` -> assisted workflow test.
  - `pause` -> pause note with rejected assumptions.
- Added done conditions and hard stops so the review does not turn into open-ended feature work.
- Updated the review packet, browser packet, and meeting capture template to route to the playbook.
- Verification on `2026-04-21`: `npm test` passed `23/23`; `npm run smoke` passed `134/134`; `git diff --check` passed.
- Meeting implication: the next post-meeting implementation step must be one selected artifact from the playbook, not a broader MVP sprint.

## 2026-04-21 dated review workspace scaffold
- Added the dated pending review workspace: `/home/jnclaw/every_on_git_jnclaw/phd-life-system/urology-ai-previsit-demo/docs/reviews/2026-04-23-urology-review/`.
- Added `decision-capture.md` with the meeting time, boundary checklist, case evidence table, decision signals, copied-workbench-record section, and selected-next-artifact section.
- Kept the status as `pending review`; no reviewer conclusion or artifact choice was pre-filled.
- Updated the review packet, browser packet, source trace, and action playbook to point to the dated capture file.
- Added validation checks so the dated workspace must remain pending and cannot contain prefilled `continue / revise / narrow / pause` decisions before real review evidence exists.
- Verification on `2026-04-21`: `npm test` passed `24/24`; `npm run smoke` passed `144/144`; `git diff --check` passed.
- Meeting implication: the 4/23 meeting has a ready evidence home; after the meeting, update only `decision-capture.md` first, then create exactly one next artifact chosen from the playbook.

## 2026-04-21 pre-meeting readiness command
- Added the pre-meeting readiness checklist: `/home/jnclaw/every_on_git_jnclaw/phd-life-system/urology-ai-previsit-demo/docs/reviews/2026-04-23-urology-review/pre-meeting-readiness.md`.
- Added `npm run meeting:check`, implemented by `/home/jnclaw/every_on_git_jnclaw/phd-life-system/urology-ai-previsit-demo/scripts/check-meeting-readiness.js`.
- The command verifies required artifacts, pending decision-capture state, no prefilled decision, browser/Markdown routing, smoke checks, Node tests, and live local routes while the static server is running.
- Updated the review packet, browser packet, and source trace to route to the readiness checklist.
- Verification on `2026-04-21`: `npm test` passed `25/25`; `npm run smoke` passed `150/150`; `npm run meeting:check` passed `26/26`; `git diff --check` passed.
- Meeting implication: before the 4/23 review, run `npm start` and then `npm run meeting:check`; if it passes, do the review instead of adding more MVP scope.

## 2026-04-21 reviewer handout closeout
- Added the reviewer one-page handout: `/home/jnclaw/every_on_git_jnclaw/phd-life-system/urology-ai-previsit-demo/docs/reviews/2026-04-23-urology-review/reviewer-one-page-handout.md`.
- Purpose: give the reviewer a compact meeting goal, non-negotiable boundary, case scan, decision choices, evidence checklist, and live links without opening the full operator run sheet.
- Updated the dated review workspace, pre-meeting readiness checklist, Markdown review packet, browser review packet, source trace, smoke check, meeting readiness check, and Node tests to route to the handout.
- Verification on `2026-04-21`: `npm test` passed `26/26`; `npm run smoke` passed `155/155`; `npm run meeting:check` passed `30/30`; planning knowledge validation passed; `git diff --check` passed in both repos.
- Meeting implication: at meeting start, open the browser review packet and optionally share the one-page handout before the case walkthrough; do not add more MVP scope before reviewer evidence exists.

## 2026-04-21 post-review closeout gate
- Added the post-review closeout checklist: `/home/jnclaw/every_on_git_jnclaw/phd-life-system/urology-ai-previsit-demo/docs/reviews/2026-04-23-urology-review/post-review-closeout.md`.
- Added `npm run review:closeout`, implemented by `/home/jnclaw/every_on_git_jnclaw/phd-life-system/urology-ai-previsit-demo/scripts/check-review-closeout.js`.
- Purpose: after the 4/23 meeting, verify `decision-capture.md` has complete reviewer evidence, checked boundaries, one valid decision, one matching selected artifact, and a copied reviewer workbench record before any next artifact begins.
- Expected current state: the closeout command fails while `decision-capture.md` is still `pending review`; this is correct before real reviewer evidence exists.
- Added closeout fixture tests for a completed capture that should pass and a mismatched decision/artifact pair that should fail.
- Added evidence-gated artifact starters under `/home/jnclaw/every_on_git_jnclaw/phd-life-system/urology-ai-previsit-demo/docs/reviews/2026-04-23-urology-review/artifact-starters/` for revised question tree, one-page summary mockup, assisted workflow test, and pause note.
- Added `npm run artifact:check`, implemented by `/home/jnclaw/every_on_git_jnclaw/phd-life-system/urology-ai-previsit-demo/scripts/check-selected-artifact.js`, so the selected artifact itself must be filled from reviewer evidence before the post-review loop is treated as ready.
- The artifact check reads the dated decision capture, confirms the selected artifact matches the decision-to-artifact table, rejects `pending review` / `TBD from reviewer evidence` placeholders, and requires boundary language plus source and done-condition sections in the chosen artifact file.
- Verification on `2026-04-21`: `npm test` passed `32/32`; `npm run smoke` passed `173/173`; `npm run meeting:check` passed `38/38`; `npm run review:closeout` failed as expected in pending-review state; `npm run artifact:check` failed as expected because no real selected artifact exists yet; `git diff --check` passed.
- Meeting implication: after the meeting, fill `decision-capture.md` first, then run `npm run review:closeout`; only if it passes should one artifact from the post-review action playbook be completed, followed by `npm run artifact:check`.

## 2026-04-21 review-workspace consolidation
- Tightened `/home/jnclaw/every_on_git_jnclaw/phd-life-system/urology-ai-previsit-demo/docs/reviews/2026-04-23-urology-review/README.md` so the existing dated folder is the single 4/23 review workspace.
- Clarified that `decision-capture.md` owns reviewer evidence and the selected next artifact, while `artifact-starters/` owns blank starter shapes only.
- Tightened `/home/jnclaw/every_on_git_jnclaw/phd-life-system/urology-ai-previsit-demo/docs/post-review-action-playbook.md` so post-review work uses the existing dated workspace, runs `npm run review:closeout` before filling one starter, and runs `npm run artifact:check` before calling the selected artifact ready.
- Pushed demo repo commit `1402c4e docs: consolidate urology review workspace guidance` to `origin/main`.
- Meeting implication: do not create another 2026-04-23 folder or a parallel artifact tracker; use the existing workspace, then stop until real reviewer evidence exists.

## Schedule / conflict decision
- `2026-04-23 10:00-11:00` urology meeting is the priority block.
- Cancer Biology `R234` leave path: take leave / absence for this class session.
- Recovery path: request or use recording, classmate notes, or course materials after the meeting.
- Same-day rule: clean the urology meeting notes first, then only do Cancer Biology recovery if a concrete class item was missed.

## Initial stance
> 先做 UI 導引式問診，語音只作輔助。

## Meeting prep pack
### Note template
| Field | Notes |
| --- | --- |
| Problem definition |  |
| Current patient flow |  |
| Repeated questions / wasted time |  |
| Information that can be collected before the physician enters |  |
| Information that must remain physician-led |  |
| Patient constraints: age, vision, literacy, language, accent, phone access |  |
| Staff workflow: patient/family self-filled vs nurse-repaired vs nurse-led for selected cases |  |
| Existing vendor / system state |  |
| Integration needs: HIS / appointment / EMR / nurse station / PDF summary |  |
| Privacy and consent concerns |  |
| MVP recommendation |  |
| Go / no-go / next experiment |  |

### Physician questions
1. 病人從報到到醫師正式問診前，現在有哪些固定流程？
2. 哪些問題最常被醫師或護理師重複問？
3. 哪些資訊可以在候診時先問完？
4. 哪些題目一定要醫師親自問，不能前置？
5. 問診題目比較像固定 checklist，還是需要自由對話？
6. 病人是自己操作，還是護理站協助操作？
7. 高齡病人、視力差、口音、台語/中文混用時，目前最常卡在哪裡？
8. 如果輸入不完整或病人答錯，現場希望怎麼補救？
9. 最後要給醫師的是逐字紀錄、摘要、風險提示，還是檢查/補件建議？
10. 成功指標是什麼：節省幾分鐘、減少幾次重複問答、提高資料完整度，或改善病人流速？

### Risk checklist
| Risk | Watch for | Initial mitigation |
| --- | --- | --- |
| ASR accuracy | accent, elderly speech, noisy clinic | Treat voice as optional input; keep big-button UI path |
| Elderly usability | vision, motor control, unfamiliar phones | Large yes/no buttons, pictorial choices, patient/family help, and nurse repair workbench |
| Wrong or missing input | patient misunderstanding, skipped answers | Missing-info prompts and final review screen |
| Privacy / consent | sensitive symptoms and audio | explicit consent, minimal retention, deletion policy |
| Clinical safety | false reassurance or missed red flags | escalation rules and physician-owned final judgment |
| Hospital integration | HIS/EMR access, vendor constraints | start with exportable summary before deep integration |

## Low-fi workflow
```text
Patient arrives / checks in
-> opens guided previsit interview
-> chooses symptom category / reason for visit
-> answers fixed yes/no or multiple-choice questions
-> system detects missing key information
-> patient/family reviews a plain confirmation page
-> nurse workbench asks only the minimum supplemental questions when needed
-> answer sources stay labeled
-> system generates physician-facing summary
-> physician confirms, edits, or ignores summary during visit
```

## 24-hour summary template
Use this by `2026-04-24 11:00`.

| Section | One-page summary |
| --- | --- |
| Clinical need |  |
| User need |  |
| System need |  |
| Workflow pain points |  |
| Information that can be pre-collected |  |
| Technical difficulty |  |
| MVP recommendation |  |
| Next step / owner |  |

## Next planning rule
Before adding or changing demo UI questions, check the governance source of truth:

1. `clinical-question-governance/question_candidates_matrix.md`
2. `clinical-question-governance/mvp_question_set_recommendation.md`
3. `clinical-question-governance/source_evidence_map.md`

Only then sync the static demo flow.
