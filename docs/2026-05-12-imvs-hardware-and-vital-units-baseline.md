---
id: 2026-05-12-imvs-hardware-and-vital-units-baseline
title: "iMVS Hardware And Vital Units Baseline"
date: 2026-05-21
topic: ai-triage
type: design-baseline
status: active
source:
  - ../source/2026-05-12-imedtac-company-ai-triage-sync/assets/2026-05-12-imvs-product-spec-v2.0.4.docx
  - ../source/2026-05-12-imedtac-company-ai-triage-sync/assets/2026-05-12-imvs-api-v1.4-eng.pdf
  - ../source/2026-05-12-imedtac-company-ai-triage-sync/extracted/2026-05-12-imvs-product-spec-v2.0.4.txt
  - ../source/2026-05-12-imedtac-company-ai-triage-sync/extracted/2026-05-12-imvs-api-v1.4-eng.txt
---

# iMVS Hardware And Vital Units Baseline

This note records the iMVS hardware, measurement modules, API field shape, and
vital-sign units that 慧誠智醫（imedtac Co., Ltd.）already provided in the
`2026-05-12` company follow-up package.

Use this document as the current design baseline for the June synthetic-data
AI-triage demo adapter. The `2026-05-21` engineering sync still requires
imedtac to confirm the current production/demo Vital Upload API field
dictionary, target SKU, required/optional fields, missing/failure semantics,
and UI runtime constraints.

## Source Package

The baseline comes from two company-provided files archived under
`source/2026-05-12-imedtac-company-ai-triage-sync/`:

| Source | Version / date | Relevant content |
| --- | --- | --- |
| `iMVS_Product Spec_-V2.0.4.docx` | Product spec `V2.0.4` | Measurement workflow, measurement item list, device families, hardware components, ranges, accuracy, and runtime ambiguity around Windows / Android hardware. |
| `iMVS_API_V.1.4_12052026_Eng.pdf` | API definition `V1.4`, dated `2026/05/12`, update staff Ben Siu | Optional authentication API and Vital Sign Upload API with nested vital objects and sample units. |

The extracted text copies are search indexes only. The archived original files
remain the reference for formatting and source verification.

## Measurement Workflow Baseline

The product spec describes iMVS as a measurement-centered station. Its user
workflow supports identity/login, measurement item selection, guided
measurement, result display, re-measure/next actions, measurement report, QR
code access, and exit reminder.

The measurement item menu includes:

| Measurement item | Product-spec wording / meaning | Demo adapter implication |
| --- | --- | --- |
| Body temperature | Forehead thermometer measurement and result display. | `Temp` / normalized `temperature_c` can drive fever-context questions after measurement. |
| Blood pressure | Blood-pressure monitor measurement and result display. | `NBP` contains systolic and diastolic values; route to normalized systolic/diastolic fields. |
| Blood oxygen | Blood-oxygen measurement and result display. | `SPO2` is available in the API sample; product spec marks SpO2 hardware optional in some variants, so confirm target SKU. |
| Height / weight | Height/weight measurement and BMI display. | `Height` and `Weight` are explicit API fields; BMI appears as a derived/report concept, not as a V1.4 upload field. |
| Blood sugar | Blood-glucose measurement and result display. | `Glucose` is explicit in the API sample; product spec marks glucose hardware optional in some variants, so do not assume it is guaranteed. |

## Hardware Baseline From Product Spec

| Component | Company-provided device / spec | Range / precision / interface captured in source | Design use |
| --- | --- | --- | --- |
| Sphygmomanometer | A&D TM2657 | Blood pressure display range `0-299 mmHg`; pulse `40-180/min`; blood pressure accuracy `+/- 3 mmHg`; pulse accuracy `+/- 5%`; USB interface. | Baseline for `NBP` and heart-rate-from-BP payload handling. |
| Forehead thermometer | Rossmax HC700 BT | Display range `34.4 C - 42.2 C` / `94 F - 108 F`; accuracy `+/- 0.2 C` from `36.0 C - 39.0 C`, `+/- 0.3 C` outside that range; Bluetooth interface. | Baseline for temperature payload and demo staging assumptions. |
| Weight machine | Nagata brand | Range `100 g - 200 kg`; smallest measurement unit `100 g`; maximum error `+/- 100 g`; RS-232 interface. | Baseline for `Weight` / `weight_kg`; use mainly as context, not urgent triage trigger. |
| Height machine | Nagata brand ultrasonic sensor | Range `10-300 cm`; detection precision `1 mm`; maximum error `+/- 5 mm`; ultrasonic mode. | Baseline for `Height` / `height_cm`; BMI can be derived if both height and weight are available. |
| SpO2 module | Optional Rossmax SB-210 | Listed as optional in product-spec hardware table; range/accuracy not captured in the extracted text. | Confirm target SKU before treating SpO2 as guaranteed. |
| Blood glucose meter | Optional Rossmax HT-100B | Listed as optional in product-spec hardware table; range/accuracy not captured in the extracted text. | Treat glucose branch as optional until imedtac confirms availability. |
| Kiosk / tablet runtime | Hardware table says OS `windows`; recommended specification lists a `21.5"` tablet, Intel Celeron J3455, 4GB DDR3L, Android 8.1, capacitive touch, 1920x1080, 10/100 Ethernet, WiFi/Bluetooth. | Keep OS/browser runtime as an integration question. Do not assume Windows-only or Android-only until target demo machine is confirmed. |

## Vital Sign Upload API V1.4 Baseline

The V1.4 API defines Vital Sign Upload as a POST after all measurements are
done. The hospital provides the URL. The request contains encounter/device
metadata plus nested vital objects.

Top-level upload fields:

| Field | Meaning in company API | Notes for NYCU adapter |
| --- | --- | --- |
| `CHART_NO` | ID, same as the authentication API `ID`. | Demo must use synthetic/demo identity only. |
| `SAVE_DATETIME` | Storage/measurement time. | Source table says `yyyy-MM-dd HH:mm:ss`; sample uses slashes, so parse defensively. |
| `UPLOAD_DATETIME` | Upload date/time. | Parse separately from measurement timestamp. |
| `STATION_NAME` | Vital Sign Station name. | Can map to device/site context if provided. |
| `Payload` | Payload from optional auth API. | Do not use real patient payload in demo. |
| `SPO2` | Blood oxygen object. | Nested value/unit object. |
| `HR` | Heart rate object. | Uses `BP_Value` because heartbeat comes from blood-pressure measurement. |
| `Temp` | Body temperature object. | Nested value/unit object. |
| `Glucose` | Blood glucose object. | Optional until target SKU confirms availability. |
| `NBP` | Blood pressure object. | Contains `SYS_Value` and `DIA_Value`. |
| `Height` | Body height object. | Nested value/unit object. |
| `Weight` | Body weight object. | Nested value/unit object. |

## Company-Provided Vital Units

The API sample provides explicit units. These are the baseline units to preserve
in the API adapter and example payloads.

| Company API object | Company value field(s) | Company unit sample | NYCU normalized field(s) | Normalization note |
| --- | --- | --- | --- | --- |
| `NBP` | `SYS_Value`, `DIA_Value` | `mmHg` | `blood_pressure_systolic_mm_hg`, `blood_pressure_diastolic_mm_hg` | Keep systolic and diastolic separate. |
| `SPO2` | `Value` | `%` | `spo2_percent` | Preserve percent as the display/unit value. |
| `HR` | `BP_Value` | `bpm` | `heart_rate_bpm` | Source parameter table has `bmp`, but JSON sample uses `bpm`; use `bpm` as the normalized unit. |
| `Temp` | `Value` | `deg C` / source sample `°C` | `temperature_c` | JSON examples may use ASCII `C`; UI copy can display `deg C` or `°C` after display review. |
| `Glucose` | `Value` | `mg/dL` | `glucose_mg_dl` | Optional in demo unless target SKU confirms the glucose meter is present. |
| `Weight` | `Value` | `kg` | `weight_kg` | Source product spec range also uses grams and kilograms; upload sample uses `kg`. |
| `Height` | `Value` | `cm` | `height_cm` | Height precision is hardware-level; upload sample uses centimeter value. |

## Adapter Requirements

The June API should treat the company-provided shape as the starting adapter
contract:

```text
iMVS V1.4-style nested vital object
-> NYCU normalized per-vital object
-> value + explicit unit + measurement_status + quality_flag + missing_reason
-> typed question loop
-> staff_review_summary
```

The adapter should preserve both source semantics and demo safety:

- Keep `value` and `unit` explicit for every vital field used in question
  routing or staff-summary display.
- Parse numeric values from strings because the V1.4 API marks measurement
  values as strings.
- Preserve source units in logs/debug traces; normalize field names for NYCU
  runtime readability.
- Treat `Respiratory rate` as not provided by the 5/12 V1.4 API unless imedtac
  confirms a measurement, manual-entry, or synthetic-demo source.
- Treat `BMI` as derivable from height/weight, not as a confirmed V1.4 upload
  field.
- Keep SpO2 and glucose behind target-SKU confirmation because the product spec
  marks them optional in parts of the hardware table.
- Ask imedtac engineering to confirm whether the current GitHub/Vital Upload
  format still matches this V1.4 document.

## Current Open Confirmation Items

These are not gaps in the archive. They are confirmation items needed to align
the June integration with the actual demo device and current imedtac backend:

| Confirmation item | Why it matters |
| --- | --- |
| Target demo SKU and OS/browser runtime | Product spec contains both Windows and Android references. |
| Current Vital Upload API field names | The 5/21 sync said NYCU should adapt to imedtac's actual field dictionary. |
| Required vs optional vitals | Product spec marks some modules optional; demo routing must know what is guaranteed. |
| Missing/failed/poor-quality semantics | V1.4 gives values/units but not quality or failure flags needed for safe demo fallback. |
| Respiratory-rate source | Current API examples include respiratory rate for the respiratory case, but the 5/12 V1.4 iMVS API does not list it. |
| Unit display convention | Source sample uses `°C` and `bpm`; machine-readable demo JSON may use ASCII `C` for temperature while UI displays user-friendly units. |

## Design Decision

For planning, handoff, and runtime examples, use this baseline as the
company-provided source of truth for hardware and vital units until imedtac
supplies a newer field dictionary.

The correct external framing is:

```text
imedtac has already provided a V1.4 Vital Sign Upload API and product-spec
hardware baseline. NYCU can build the June adapter from that baseline while
requesting current-device confirmation for field names, optionality, quality
semantics, and demo runtime constraints.
```
