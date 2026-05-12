---
id: 2026-05-12-huicheng-company-ai-triage-sync-meeting-record
title: "2026-05-12 Meeting Record - Huicheng Company AI Triage Sync"
date: 2026-05-12
time: "13:00 Asia/Taipei"
topic: personal
subtopic: sources
type: meeting-record
source: user-provided-transcript
course: ""
keywords: [huicheng, imedtac, ai-triage, urgent-care, vital-sign-kiosk, asr, llm, fhir, his, emr, product-demo]
status: active
---

# Meeting Record

## Context

阿聖 met with 慧誠智醫 Jason Miao and Johnny / PM team at `13:00` on `2026-05-12` to discuss future collaboration on AI triage / urgent-care style intake around 慧誠's physiological-measurement kiosk.

This meeting follows the `2026-05-11` Prof. Wu discussion with Jason and 林駿亦. The project should still route to the 慧誠 emergency-triage / ASR / vital-sign lane, not the urology previsit lane.

Cleaned transcript: `source/2026-05-12-huicheng-company-ai-triage-sync/transcript-cleaned.md`.

Polished interpretation brief: `source/2026-05-12-huicheng-company-ai-triage-sync/demo-brief.md`.

Company follow-up package:
`source/2026-05-12-huicheng-company-ai-triage-sync/assets/`.

Detailed materials analysis:
`docs/2026-05-12-huicheng-materials-analysis.md`.

## Company Product Facts From The Meeting

- 慧誠 has a self-service physiological measurement kiosk currently used around outpatient workflows.
- Default measured data:
  - blood pressure,
  - SpO2,
  - temperature,
  - height and weight for the all-in-one SKU.
- Desktop SKU has blood pressure, SpO2, and forehead temperature only.
- Custom additions such as ECG or ultrasound were discussed as technically possible, but not default.
- The kiosk software runs on a Windows-based all-in-one computer.
- The device has no onboard GPU.
- The device can connect to network resources, but deployment architecture depends on customer context.
- Taiwan hospital context was described as mostly private-cloud / hospital-local, while foreign markets may use public cloud or third-party HIS / EMR vendors.
- Platform context includes middleware, RESTful API, FHIR standard, HIS, and EMR integration.
- Overseas opportunity context mentioned in the user summary includes the US, Middle East, Singapore, Thailand, and Malaysia; foreign hospital systems may include Epic, Oracle Cerner, and AWS / Google Cloud-backed deployments.

## External Reference Shown By Company

The company showed a simple cloud/web symptom-assessment system:

- It asks symptom questions, age, sex, pain level, and red-flag follow-ups.
- The example produced an emergency-care / call-911 style result.
- It appeared mostly text/question driven and did not use vital-sign inputs.
- Business-side implication: 慧誠 wants vital signs to matter because otherwise the triage product is not clearly tied to its kiosk hardware.

## Jason Demoed

Jason showed the existing urology previsit workflow as a functional analogy:

- current scope is previsit history capture, not emergency triage;
- patient or family can answer structured questions;
- questions are shortened from a long source-driven set into a smaller user-facing flow;
- dynamic next-question selection can be based on answer state / embedding-style similarity rather than a fixed tree;
- nurse / clinician review can repair missing information and hand off a concise summary;
- ASR can be used for free-form supplement fields;
- the same architecture could be adapted by swapping the specialty-specific module / question set.

Post-meeting summary from 阿聖 describes the demo as an `ASR + LLM urology pre-visit prototype`, while the technical explanation emphasized:

- dynamic questioning rather than a fixed tree;
- embedding model / vector similarity / semantic proximity for routing;
- modular specialty design so urology can be one module among cardiology, nephrology, emergency / urgent care, or all-specialty modules;
- lightweight local deployment on CPU-only hardware.

## Technical Claims / Positions

- CPU-only local execution is feasible for the current structured question-routing approach.
- Full LLM use is not mandatory for v0 and would depend on product architecture, GPU/cloud access, cost, and privacy constraints.
- Embedding-style dynamic routing can explain the AI role better than a static decision tree while staying lightweight.
- English ASR is technically feasible on recent CPU hardware, but medical terms, noise, and kiosk microphone conditions need product testing.
- Everyday patient wording can be mapped toward clinical database terms through embedding / semantic matching, but this needs source-governed vocabulary.
- Vital-sign interpretation must be grounded in authoritative criteria and clinician/company validation; Jason explicitly did not claim medical authority over vital-sign triage rules.

## Important Discussion Points

### Symptom Ontology

Patients may not use clinical vocabulary. Examples from the summary include everyday phrases such as "head feels heavy", "chest feels tight", or "urination feels strange". Mapping natural language into standard symptom concepts is therefore a core product problem, not just a UI detail.

### ASR

The company ultimately wants voice input for symptom description, additional information, and follow-up answers. English ASR is comparatively mature, but medical terminology, hospital noise, microphone quality, accents, and kiosk placement need testing.

### Medical Evidence

The current prototype was explained as guideline / authority based, with urology wording originally grounded in sources such as US urology society materials. Formal productization would need source governance from appropriate authorities such as FDA-facing materials, Taiwan MOHW / local medical bodies, country-specific guidelines, medical societies, and clinician-approved protocols.

### Vital-Sign Integration

The company is especially interested in whether blood pressure, SpO2, temperature, BMI, and related measurements can:

- change question routing,
- change triage priority,
- improve triage accuracy,
- differentiate the kiosk product from symptom-only checkers.

Engineering integration is feasible, but medical meaning requires further research and validation.

## Aligned Long-Term Scope

The long-term product target discussed:

- English-first,
- voice input,
- broad/all-specialty symptom triage rather than urology-only,
- vital-sign-aware triage result,
- urgent-care style use case,
- preferably low extra cloud / token / licensing cost,
- deployable with realistic kiosk hardware and customer infrastructure.

## Near-Term Business Ask

The near-term ask is a presentable demo:

- Use Jason's existing local previsit / dynamic questionnaire system as a base.
- Create an English triage-facing version if needed.
- Connect or embed it into 慧誠's kiosk web-service flow at demo level.
- Use simulated vital-sign data or a simple API bridge only after 慧誠 provides data format / API details.
- Target a visible collaboration story for customer / go-to-market discussions, especially before a June US customer visit to Taiwan.

Short-term target wording:

- not diagnosis AI,
- not autonomous medical decision-making,
- AI-assisted triage workflow demo,
- symptom collection,
- structured summary,
- workflow acceleration,
- kiosk integration.

## Polished Interpretation To Reuse

The user-provided interpretation captured the clearest current framing:

> 慧誠智醫短期希望在六月前，基於我們現有的 triage prototype，快速做出英文版 demo，能被放進他們既有 Kiosk / web service 產品流程中，展示「慧誠智醫 + 智德萬 / 吳老師團隊已具備 AI triage capability」。這個 demo 主要用途是 go-to-market 與美國客戶展示，還不是正式醫療決策產品。

Use `demo-brief.md` as the reusable format for future notes:

- state the judgment first;
- separate short-term market demo from long-term clinical product;
- draw the current architecture with Mermaid;
- draw the target AI triage workflow with Mermaid;
- keep hardware / SKU facts in a table;
- end with safety and regulatory boundaries.

## Open Questions

- What exact product materials, videos, UI docs, and API docs will 慧誠 send?
- What data shape does the kiosk expose after measurement: JSON, FHIR resource, REST endpoint, database row, file export, or internal event?
- Is demo integration expected to be iframe/link, same web app, API handoff, or mocked flow?
- What minimum vital-sign fields must influence the demo result?
- Can the v0 demo use simulated vital-sign values, or must it read from a real kiosk?
- What source should define all-specialty urgent-care symptom modules: FDA, medical societies, customer-provided protocol, commercial database, or clinician-authored content?
- Is the first market truly English-speaking, or only English for demo/customer purposes?
- How should ASR be tested for kiosk noise, microphone quality, accents, and medical vocabulary?
- Does the output say "recommended care level", "needs clinician review", "call emergency services", or another safer wording?
- Who signs off on any vital-sign threshold or red-flag rule?
- What is the next meeting date and expected deliverable from Jason before then?

## Decisions / Working Assumptions

- Treat the urology previsit demo as a technical and workflow reference only.
- Do not merge the urology previsit repo into this product lane.
- Keep "triage support, not diagnosis" as the safety boundary.
- Do not invent vital-sign clinical rules without authoritative sources and clinician/company validation.
- Now that 慧誠's follow-up materials exist, keep implementation gated on target device / OS, integration mode, sample or mock payload permission, guaranteed vital fields, output wording, and clinical sign-off owner.
- Keep patent-sensitive, core-flow, and detailed ASR + LLM architecture material private unless Prof. Wu / the project owner explicitly approves disclosure.

## Immediate Next Actions

- 阿聖 / Jason-side:
  - organize an English symptom flow;
  - re-check medical wording;
  - study vital-sign integration;
  - prepare an architecture diagram;
  - clarify the ASR + embedding-routing division;
  - study local deployment feasibility.
- Company follow-up email adds a dated research gate:
  - by Friday `2026-05-15`, prepare initial findings on all-specialty modular AI-triage model integration and how physiological data affects triage analysis;
  - use FDA or medical-society guidance only as verified examples, not as invented clinical rules.
- 慧誠:
  - provide current kiosk / UI / product information;
  - provide API / integration information;
  - provide workflow and deployment scenario details;
  - continue discussion on possible integration flow.
- Planning: preserve this as a source-capture and scope-alignment event, not a W20 product sprint.

## Company Follow-Up Package Notes

- Product spec confirms the existing iMVS workflow is centered on identity/login, measurement selection, guided measurement, normal/abnormal reference display, re-measure / next actions, and final report.
- Product architecture image places iMVS-HCC between HIS / care-facility contexts and AIO / DKP / MOB device lines.
- API document defines optional patient authentication and vital-sign upload after all measurements complete.
- API fields include `CHART_NO`, `SAVE_DATETIME`, `UPLOAD_DATETIME`, `STATION_NAME`, `Payload`, `SPO2`, `HR`, `Temp`, `Glucose`, `NBP`, `Height`, and `Weight`.
- Current best v0 integration remains a synthetic or mock API-shaped payload consumed after measurement and before a triage-support summary display.
- Clarify target device / OS before implementation: meeting notes emphasize a Windows-based all-in-one, while the product spec also lists a `21.5" Tablet` with `Android 8.1`.
