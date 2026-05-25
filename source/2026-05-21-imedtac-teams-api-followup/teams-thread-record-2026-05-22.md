---
id: 2026-05-21-imedtac-teams-api-followup-thread-record
title: "Microsoft Teams Thread Record - API Follow-Up"
date: 2026-05-22
topic: ai-triage
type: source-transcription
status: active
source_note: user-provided Microsoft Teams screenshots on 2026-05-22
related:
  - ../../handoff/2026-05-21-imedtac-two-endpoint-api-reply.md
  - ../../decisions/2026-05-22-api-contract-freeze-and-change-control.md
  - ../2026-05-22-nycu-sent-api-reply-email/sent-reply-record.md
---

# Microsoft Teams Thread Record - API Follow-Up

## Source Boundary

This record transcribes the Microsoft Teams conversation visible in the user-provided screenshots on `2026-05-22`. It is a screenshot-based working record, not a native Teams export. Preserve the wording below as the operational communication record for the June demo API follow-up.

## Channel

- Platform: Microsoft Teams
- Chat name: `AI Triage 討論 w/ 陽交大`
- Organization marker visible in Teams: `imedtac.com`
- Participants visible or referenced in the screenshots:
  - Johnny Fang 方偉翰, imedtac Corp.
  - Ben Siu 蕭銳輝, imedtac Corp.
  - Lauren Wang 王瑀蕎, imedtac Corp.
  - Jason Lin
  - 多寶 / 許醫師

## Thread Transcript

### Yesterday 1:38 PM Section

System event:

```text
Johnny Fang 方偉翰, imedtac Corp. added Jason Lin and 3 others to the chat.
```

System event:

```text
Johnny Fang 方偉翰, imedtac Corp. changed the group name to AI Triage 討論 w/ 陽交大.
```

Johnny Fang:

```text
Hi all, 與陽交大的實做討論以後可以在這邊溝通
```

System event:

```text
Ben Siu 蕭銳輝, imedtac Corp. added Lauren Wang 王瑀蕎, imedtac Corp. to the chat and shared all chat history.
```

### Yesterday 5:28 PM Section

Ben Siu:

```text
大家好, 我跟 Lauren 會是主要負責的技術人員
想要先麻煩陽交大團隊根據今天的討論結果提供兩個 endpoint 的 API 文件, 感謝
```

Johnny Fang:

```text
Jason Lin 多寶 許 想問看的到訊息嗎？ @
```

Jason Lin:

```text
可以，沒問題，謝謝 Johnny
```

Jason Lin, replying to Ben Siu's API-file request:

```text
好的，謝謝
```

Johnny Fang:

```text
另外想問明天或星期一可以拿到範本的內容嗎?
包含先預設的題目跟選項
```

Johnny Fang:

```text
另外在設計上有想請教的，原先有設想到用戶如果答不出來可以略過，想問實務上可以嗎? 如果不行可以取消這個行為
```

Jason Lin:

```text
以上兩個問題我們確認後回覆
```

### Today 12:24 PM Section

Jason Lin:

```text
Dear all,
API 回覆文件我剛剛已經用 email 寄出，方便後續討論以及工程端串接。

關於前面的兩個問題：

1. 預設題目與選項範本，我們會先做第一版 preset questions/options，預計星期一提供。

2. 使用者答不出來的行為，我們建議這次 demo 不做 generic skip button。因為 skip 只代表使用者略過，但無法判斷是不理解問題、不知道怎麼回答，還是忘記答案。建議改成較明確的 `Not sure` 選項，iMVS 回傳對應的 option id，例如 `not_sure` 或 question-specific `*_not_sure`，這樣 summary 裡也能保留可解讀的回答狀態。

再麻煩大家查閱 email 附件，謝謝。
```

## Communication Baseline Captured By The Teams Reply

The Teams reply confirms three operational points:

1. The API reply document was sent by email and should be used for follow-up engineering discussion and implementation alignment.
2. NYCU will provide the first preset questions/options template by Monday.
3. The June demo should not implement a generic skip button for unable-to-answer behavior; it should use explicit `Not sure` option IDs, returned through iMVS answer submission, so `staff_review_summary` can preserve interpretable answer state.

This Teams reply is consistent with the sent Gmail reply and the attached API reply packet. Future changes to this answer behavior should be treated as a change request, not a silent implementation adjustment.
