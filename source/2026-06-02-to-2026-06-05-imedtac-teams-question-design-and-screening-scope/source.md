---
id: 2026-06-02-to-2026-06-05-imedtac-teams-question-design-and-screening-scope
title: "imedtac Teams Question-Design Timing And Screening-Scope Follow-Up"
date: 2026-06-05
topic: ai-triage
type: source
status: active
channel: Microsoft Teams
confidentiality: engineering-coordination-local-only
source_note: user-provided Microsoft Teams screenshots on 2026-06-08; dates inferred from visible weekday labels and current date context
related:
  - ../../workstreams/08-june-demo-case-and-integration-plan.md
  - ../2026-05-27-imedtac-teams-summary-rwd-qr-followup/source.md
  - ../2026-05-27-imedtac-teams-ui-option-human-factor/source.md
  - ../../docs/2026-06-05-question-design-and-screening-scope-response-plan.md
  - ../../docs/source-index.md
---

# imedtac Teams Question-Design Timing And Screening-Scope Follow-Up

## Source Boundary

This note preserves the Microsoft Teams discussion Jason provided on
`2026-06-08` through screenshots. The visible Teams date labels are weekday and
time labels only. This record therefore treats `Tuesday`, `Wednesday`, and
`Friday` as inferred dates in the week before `2026-06-08`: `2026-06-02`,
`2026-06-03`, and `2026-06-05`, pending a native Teams export or direct channel
verification.

Treat this as an external coordination record for demo question design,
customer-demo timing, and possible expansion toward vision / hearing screening
flows. It is not a clinical protocol, diagnostic standard, production workflow,
regulatory validation record, real patient-data approval, or commitment to
support formal hearing / vision diagnosis.

The screenshots contain no visible bearer token, API key, private link, or live
credential. Public example links are preserved only as context.

## Channel

- Platform: Microsoft Teams
- Chat name: `AI Triage 討論 w/ 陽交大`
- Organization marker visible in Teams: `imedtac.com`
- Participants visible / referenced:
  - Johnny Fang 方偉翰, imedtac Corp.
  - Jason Lin
  - 多寶 許
- Contact / stakeholder references:
  - 慧誠智醫（imedtac Co., Ltd.）internal customer coordination
  - 北市聯醫 / Taipei City Hospital, as a possible future contact route
  - 許醫師 / 多寶, as clinical-review owner for hearing/vision necessity

## Visible Conversation Transcript

The following transcript is reconstructed from the visible screenshots. Line
breaks preserve the communicated meaning rather than Teams UI wrapping.

```text
[Tuesday 5:58 PM; inferred date: 2026-06-02]

Johnny Fang 方偉翰, imedtac Corp.:
Hi Jason Lin 我們這邊的流程都有串好了，已經上到正式機開始測試，想問題目設計大約什麼時候會好呢？
另外想問你們有區分測試跟正式環境嗎? 我們這邊有，但目前的設計都是打同一個

[Tuesday 8:23 PM; Jason Lin]

嗨 Johnny， demo 時，我們傾向只設計一個環境（即為測試環境），另外，如果 demo 的故事情節設計沒有改變，我們使用目前這個版本就好，如之後開發，我們再設計並上線更多問答。
想請教 Johnny Fang 方偉翰, imedtac Corp.，我們 demo 的故事情節應該就如同上次設計的那樣是嗎？謝謝！

[Wednesday 11:07 AM; inferred date: 2026-06-03]

Johnny Fang 方偉翰, imedtac Corp.:
Jason Lin
設計一個環境沒問題，我們的測試與正式環境都是連你的測試環境

Demo的故事沒有改變，之前談過會以高心跳的狀況下去demo
預期是在高心跳的情境下，問診的流程還是會針對不同數據及不同回答，產出不同的下一題，也會產出類似但不完全相同的結果，這樣demo起來比較有彈性
不過實際測試後想討論:

- 體感上每一題題目不論做哪些選擇都會導向一樣的下一題及結果頁，想知道這段設計的邏輯
- 由於導向一樣的結果頁，所以在畫面上的數據就會和結果頁的數據不一樣，這樣demo尚無法凸顯triage的優點

由於時程上比較緊急，我們可以來討論出目前比較可行的方案

多寶 許:
題目設計可能需要幾天

多寶 許:
所以目前有確定時間就是6/10嗎?

Johnny Fang 方偉翰, imedtac Corp.:
目前客戶端還在確認時間，不過我們內部也在討論要用這次的成果展開行銷，預計希望在6月中旬開始
所以最晚初版可以暫訂到 6/15 前

接下來如果有零星的客戶拜訪也都會介紹，所以會希望至少可以展示在限定情境裡(心跳很快) Triage 流程上動態的互動流程
其它的就是量測完的數據，至少要與結果頁一致
我們在demo也會儘量模擬這個狀態

多寶 許:
其他客戶也是再6/15之後是吧?

Johnny Fang 方偉翰, imedtac Corp.:
恩恩

逐步迭代也都可以的，只要事先提醒上版時間就好

[Friday 4:01 PM; inferred date: 2026-06-05]

Johnny Fang 方偉翰, imedtac Corp.:
多寶 許 我先來整理需求，晚一點再提供給你參考

多寶 許:
剛剛說的是新的案子嗎?還是跟原本這個AI triage 的案子是同一個?

Johnny Fang 方偉翰, imedtac Corp.:
是新的~~
但基本上也是利用原本的架構去發展

Johnny Fang 方偉翰, imedtac Corp.:
簡單描述一下:
有與北市聯醫有新的專案，
希望在12個行政區的門診站建置健康倉，希望可以量測生理訊號(除現有數據外有新增視力聽力檢查)，在加上以問卷形式的問診，讓病患在看門診前可以讓醫生對病患有基本的主訴了解加訊號

和貴團隊的合作範圍有和吳老師與老闆對焦過，包含:

- 視力/聽力檢測流程設計/題庫設計/題目上架系統設計
- 視力/聽力檢測流程開發/題目上架系統開發
- 資料與HIS串接等

內容還在整理中

多寶 許:
有北市聯醫那裏聯絡的窗口嗎?

Johnny Fang 方偉翰, imedtac Corp.:
還沒有正式成果
現在是先準備提案而已

多寶 許:
了解

多寶 許:
我們這裡可能需要知道 主要視力和聽力是量測甚麼?

Johnny Fang 方偉翰, imedtac Corp.:
可以自行定義
初步構想是類似像健檢的檢查流程，但可以以日常量測的方向去規劃
範例是像:
蔡司: https://www.zeiss.com.tw/vision-care/eye-health-and-care/zeiss-online-vision-screening-check.html
大學眼科: https://www.eyedoctor.com.tw/VisionScreenCheck

蔡司的看起來比較嚴謹，有視力/對比視力/色覺/散光等

多寶 許:
但這些需要你們有相關的儀器吧

Johnny Fang 方偉翰, imedtac Corp.:
聽力測驗範例
https://www.hearingsolutions.philips.com/zh-tw/hearing-test

從範例看來都可以用線上完成，透過系統指引病患檢查

多寶 許:
所以沒有特別的儀器嘛
?

Johnny Fang 方偉翰, imedtac Corp.:
恩恩 對 聽力的部分傾向用原本的喇叭，從範例中有的是需要耳機，所以需要醫師的專業判斷評估是否一定要這個我們可以再討論

多寶 許:
聽力可能只能測個大概，因為詳細要測其實蠻嚴格的

Johnny Fang 方偉翰, imedtac Corp.:
恩恩 了解
```

## Working Extraction

### Current Demo / Existing AI-Triage Lane

- imedtac reports that the flow has been connected and moved to the formal
  machine / formal environment for testing on their side.
- imedtac has separate testing and formal environments internally, but both
  currently connect to NYCU's same testing environment.
- Jason replied that NYCU prefers only one demo environment for this demo,
  effectively the testing environment.
- Jason told Johnny that if the demo story does not change, the current version
  can remain the demo baseline, and more question-answer lines can be designed
  and launched later during development.
- Johnny accepted the one-environment arrangement: imedtac's test and formal
  environments will both connect to NYCU's test environment for now.
- The demo story remains the high-heart-rate / tachycardia scenario previously
  designed.
- Johnny expects the high-heart-rate demo to show dynamic interaction within a
  limited scenario: different measured data and different answers should produce
  different next questions and similar but not identical result pages.
- Johnny's current test impression is that the next question and result page
  feel the same regardless of selected answer path.
- Johnny also observed that when the path produces the same result page, screen
  values and result-page values may not match, weakening the demo's ability to
  show triage-support value.
- imedtac wants the measured data to be consistent with the result page at
  minimum.
- imedtac will try to simulate the high-heart-rate state during the demo.
- 多寶 estimated that question design may take several days.
- The customer-side timing was not fully confirmed at the moment of the Teams
  exchange, but imedtac's internal planning expects marketing use from mid-June.
- Johnny proposed the latest first-version target as before `2026-06-15`.
- Other intermittent customer visits are expected after `2026-06-15`.
- Johnny accepts gradual iteration if NYCU gives advance notice of deployment /
  version-change timing.

### New 北市聯醫 / Vision-Hearing Screening Lane

- Johnny introduced a separate new project opportunity with Taipei City
  Hospital / 北市聯醫.
- The proposed setting is health-cabin deployment at outpatient stations across
  the `12` administrative districts.
- The desired workflow combines physiological signal measurement, additional
  vision / hearing checks, and questionnaire-style intake before outpatient
  consultation.
- The goal is to help doctors understand the patient's basic chief complaint
  and signals before the visit.
- Johnny stated that the cooperation scope had been aligned with Prof. Wu and
  imedtac leadership, including:
  - vision / hearing screening process design, question-bank design, and
    question upload system design;
  - vision / hearing screening process development and question upload system
    development;
  - data and HIS integration.
- Johnny clarified that this is still proposal preparation; there is no formal
  outcome yet and no official Taipei City Hospital contact window is available
  in this Teams exchange.
- 多寶 asked what exactly the vision and hearing measurements should measure.
- Johnny replied that the team may define this, initially resembling a health
  checkup flow but planned toward daily-measurement use.
- Johnny shared public examples for vision screening:
  - Zeiss Taiwan online vision screening:
    `https://www.zeiss.com.tw/vision-care/eye-health-and-care/zeiss-online-vision-screening-check.html`
  - 大學眼科 vision screen check:
    `https://www.eyedoctor.com.tw/VisionScreenCheck`
- Johnny noted that the Zeiss example looks more rigorous and includes visual
  acuity, contrast vision, color vision, and astigmatism-like screening.
- 多寶 raised the device / instrument dependency question for those checks.
- Johnny shared a public hearing-test example:
  - Philips hearing test:
    `https://www.hearingsolutions.philips.com/zh-tw/hearing-test`
- Johnny's interpretation from the examples is that the flow can be completed
  online through system guidance.
- 多寶 asked whether there is no special instrument.
- Johnny replied that hearing is currently inclined toward using the existing
  speaker, while some examples require headphones; whether headphones are
  necessary should be reviewed with physician expertise.
- 多寶 cautioned that hearing may only be approximate in this setup because
  detailed hearing testing is quite strict.
- Johnny acknowledged the limitation.

## External Commitments And Change-Control Reading

### Active Commitments / Expectations

1. For the June AI-triage demo, NYCU's single test/demo environment is accepted
   as the endpoint target for both imedtac test and formal machines for now.
2. The high-heart-rate scenario remains the active demo story unless a later
   recorded change request revises it.
3. The demo should show useful dynamic behavior inside the bounded
   high-heart-rate scenario: answer/data variations should visibly affect at
   least selected next-question path and/or result-page content.
4. Result-page displayed values should stay consistent with the measured values
   used by the current session.
5. imedtac accepts iterative releases if NYCU warns them before deployment /
   version changes.
6. The first-version target is before `2026-06-15`; `2026-06-10` was discussed
   as a possible date but was not confirmed in these screenshots.

### Not Yet Committed

- NYCU has not committed to a production clinical environment.
- NYCU has not committed to a second formal runtime environment for this demo.
- NYCU has not committed to formal clinical hearing / vision diagnostic
  testing.
- NYCU has not committed to a device-free hearing / vision measurement standard.
- NYCU has not committed to HIS integration for the new 北市聯醫 proposal.
- NYCU has not received or archived a formal Taipei City Hospital contact window
  in this exchange.

### Change-Control Implications

- Changing the June endpoint environment, API base URL, auth requirement, CORS
  behavior, or active high-heart-rate story after this exchange should be
  recorded and communicated before deployment.
- If NYCU changes the tachycardia flow so different answers no longer create
  visible dynamic behavior, imedtac should be told because Johnny explicitly
  framed visible dynamic interaction as the demo value.
- If the summary/result page is generated from stale fixture data or a separate
  hard-coded sample, it risks contradicting Johnny's consistency requirement.
  The result page should render the current session values and answer-derived
  summary text.
- The new vision/hearing lane should be handled as proposal discovery and
  workflow-support scope until Prof. Wu / imedtac provides a formal project
  scope, owner, contact path, and clinical-review route.

## Response Strategy

The recommended response posture is affirmative and bounded:

```text
我們可以把 6/15 前版本收斂成「高心跳限定情境下的動態展示版本」：
同一個測試/demo endpoint、保留既有兩段式問答 API、強化 answer path
差異、讓結果頁直接使用該 session 的量測值與回答摘要，並在上版前先通知
imedtac。視力/聽力的新案子先作為 proposal discovery，下一步先確認量測目標、
設備假設、醫師審查 owner、HIS 邊界與北市聯醫窗口。
```

This keeps the current AI-triage demo moving while preventing the new
vision/hearing screening opportunity from silently expanding the June demo's
clinical or integration commitments.

## Immediate Follow-Up Items

| Item | Owner | Target | Status | Note |
| --- | --- | --- | --- | --- |
| Confirm with imedtac that `2026-06-10` is not yet fixed and that first version before `2026-06-15` is the working target. | Jason / imedtac | immediate | open | Use absolute dates in replies to avoid ambiguity. |
| Add visible dynamic variation to the tachycardia lane. | Jason | before `2026-06-15` | open | At minimum, different answer paths should change next-question selection and/or result-page review text within the same safe staff-review boundary. |
| Ensure result page uses current session measured values and selected answers. | Jason | before next rehearsal | open | Prevent mismatch between screen data and result-page values. |
| Notify imedtac before each deployment / version update. | Jason | every release | open | Johnny accepts iteration if update timing is announced first. |
| Ask 多寶 / 許醫師 to review which answer-path differences are clinically meaningful in the high-heart-rate story. | Jason + 多寶 | before content change | open | Preserve staff-review support scope; avoid diagnosis / formal triage level. |
| Request the formal 北市聯醫 project brief when ready. | Jason / imedtac | proposal follow-up | open | Need customer owner, use setting, target user, device assumptions, data/HIS scope, and success criteria. |
| Define vision/hearing as screening-support workflow until reviewed. | Jason + 多寶 / 許醫師 | proposal follow-up | open | Hearing via speaker may be approximate; headphone/device assumptions need clinical review. |
| Build a discovery question list for vision/hearing workflow. | Jason | next planning pass | open | Include what to measure, equipment, environment noise/light, calibration, accessibility, result wording, HIS field boundary, and staff-review ownership. |
