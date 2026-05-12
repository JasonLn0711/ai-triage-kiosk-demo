# Workstream 01 - Kiosk Integration Insertion Point

## Question

Where should AI triage enter 慧誠's existing kiosk / web service workflow?

## Current Working Answer

The best v0 insertion point is after vital-sign measurement completes:

```text
patient login
-> measure BP / SpO2 / temperature / height / weight
-> pass vital-sign payload into AI triage
-> dynamic symptom questioning
-> structured triage-support summary
-> nurse / physician review
```

## Why

- 慧誠's existing differentiator is measured vital signs.
- External symptom checkers often do not use vital signs.
- Starting AI after measurement lets the demo show a clear product connection
  to the kiosk.
- It keeps v0 closer to workflow support instead of diagnosis.

## Need From 慧誠

- UI flow screenshots or videos.
- API / payload shape after measurement.
- Whether v0 should be iframe, link, same web app, API bridge, or mocked flow.
- Which device SKU the June US demo should represent.
- Whether simulated vital signs are acceptable for the demo.

## Attachment Update - 2026-05-12

The iMVS API `V1.4` document defines two hospital-facing APIs:

- optional patient authentication before login is accepted;
- vital-sign upload after all measurements are done.

The upload payload contains `CHART_NO`, measurement/upload timestamps, station
name, optional auth payload, and nested vital objects for SpO2, HR,
temperature, glucose, NBP, height, and weight.

Implication: v0 should consume an API-shaped vital-sign payload after
measurement and produce a separate triage-support summary. Do not assume the
AI layer can write into HIS / EMR, and do not assume it can run inside the
existing upload flow until 慧誠 confirms the integration mode.

Clarify before implementation:

- target device / OS, because notes mention Windows while the product spec also
  lists an Android 8.1 tablet spec;
- whether AI starts before or after the vital-sign upload;
- whether synthetic payloads are acceptable;
- whether the output is displayed in iMVS web service, linked externally, or
  embedded as a demo screen.
