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
