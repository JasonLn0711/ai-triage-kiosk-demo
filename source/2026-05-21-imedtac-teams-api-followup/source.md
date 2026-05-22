---
id: 2026-05-21-imedtac-teams-api-followup
title: "2026-05-21 imedtac Teams API Follow-Up"
date: 2026-05-21
topic: ai-triage
type: source
status: active
channel: Microsoft Teams
source_note: user-provided screenshot and copied chat text
records:
  - teams-thread-record-2026-05-22.md
related:
  - ../2026-05-21-imedtac-engineering-sync/meeting-record.md
  - ../../handoff/2026-05-21-imvs-nycu-api-design-v0.2-draft.md
  - ../../handoff/2026-05-21-imedtac-engineering-sync-closeout.md
  - ../../handoff/2026-05-21-imedtac-two-endpoint-api-reply.md
  - ../../decisions/2026-05-22-api-contract-freeze-and-change-control.md
  - ../2026-05-22-nycu-sent-api-reply-email/sent-reply-record.md
---

# 2026-05-21 imedtac Teams API Follow-Up

## Source Boundary

This note preserves the Microsoft Teams chat follow-up provided by Jason on
`2026-05-21` and the follow-up reply screenshot provided on `2026-05-22`. It records the post-meeting engineering communication channel, the immediate imedtac asks after the `2026-05-21` engineering sync, and Jason's `2026-05-22 12:24` Teams reply after sending the API packet by email.

Treat this as coordination evidence and task routing. It is not a clinical
source, regulatory source, production integration approval, or final API
acceptance.

## Raw Teams Conversation

The complete screenshot-based working record is preserved in
`teams-thread-record-2026-05-22.md`.

```text
Johnny Fang 方偉翰, imedtac Corp. added Jason Lin and 3 others to the chat.


 
Johnny Fang 方偉翰, imedtac Corp. changed the group name to AI Triage 討論 w/ 陽交大.


 
Hi all, 與陽交大的實做討論以後可以在這邊溝通
 
Ben Siu 蕭銳輝, imedtac Corp. added Lauren Wang 王瑀蕎, imedtac Corp. to the chat and shared all chat history.


 
大家好, 我跟 Lauren 會是主要負責的技術人員
想要先麻煩陽交大團隊根據今天的討論結果提供兩個 endpoint 的 API 文件, 感謝
 
Jason Lin 多寶 許 想問看的到訊息嗎?
 
可以，沒問題，謝謝 Johnny
 
Ben Siu 蕭銳輝, imedtac Corp.
大家好, 我跟 Lauren 會是主要負責的技術人員 想要先麻煩陽交大團隊根據今天的討論結果提供兩個 endpoint 的 API 文件, 感謝

好的，謝謝
 
另外想問明天或星期一可以拿到範本的內容嗎?
包含先預設的題目跟選項
 
另外在設計上有想請教的，原先有設想到用戶如果答不出來可以略過，想問實務上可以嗎? 如果不行可以取消這個行為
 
以上兩個問題我們確認後回覆

Today 12:24 PM

Dear all,
API 回覆文件我剛剛已經用 email 寄出，方便後續討論以及工程端串接。

關於前面的兩個問題：

1. 預設題目與選項範本，我們會先做第一版 preset questions/options，預計星期一提供。

2. 使用者答不出來的行為，我們建議這次 demo 不做 generic skip button。因為 skip 只代表使用者略過，但無法判斷是不理解問題、不知道怎麼回答，還是忘記答案。建議改成較明確的 `Not sure` 選項，iMVS 回傳對應的 option id，例如 `not_sure` 或 question-specific `*_not_sure`，這樣 summary 裡也能保留可解讀的回答狀態。

再麻煩大家查閱 email 附件，謝謝。
```

## Working Extraction

Participants / roles surfaced in the chat:

- Johnny Fang 方偉翰: opened the Teams chat for implementation discussion with
  NYCU.
- Ben Siu 蕭銳輝: identified himself and Lauren as primary imedtac technical
  contacts.
- Lauren Wang 王瑀蕎: added by Ben as a primary imedtac technical contact.
- Jason Lin: acknowledged the channel and said NYCU would confirm the two
  follow-up questions, then replied on `2026-05-22 12:24` that the API packet
  had been sent by email.
- 多寶 / 許: tagged by Jason for visibility check.

Immediate imedtac asks:

1. Provide the API document for the two endpoints based on today's discussion.
2. Provide template contents by tomorrow or Monday, including the preset
   questions and options.
3. Confirm whether users may skip a question when they cannot answer; if this is
   not clinically or operationally appropriate, imedtac can remove the skip
   behavior.

Jason's `2026-05-22 12:24` answer:

- API reply file was already sent by email for follow-up discussion and
  engineering integration.
- First preset questions/options will be prepared as a first version and are
  expected by Monday.
- June demo should not use a generic skip button for unable-to-answer behavior.
- Use an explicit `Not sure` option and return its option id, such as `not_sure`
  or question-specific `*_not_sure`, so the summary preserves interpretable
  answer state.

## Task Routing

The API document ask is now answered by:

- `../../handoff/2026-05-21-imedtac-two-endpoint-api-reply.md`
- `../2026-05-22-nycu-sent-api-reply-email/sent-reply-record.md`

The preset questions and options ask maps to:

- `../../data/question_registry.csv`
- `../../data/api_question_mapping.csv`
- future company-facing question template packet.

The unable-to-answer behavior is now externally answered:

- Do not implement a generic skip button for the June demo.
- Use explicit `Not sure` option IDs returned through `answer.selected_option_ids`.
- Treat future changes to this behavior as a recorded change request.
