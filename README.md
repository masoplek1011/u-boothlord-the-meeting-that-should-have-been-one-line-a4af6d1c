# The Meeting That Should Have Been One Line

[![make.fun](https://make.fun/badge/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c.svg)](https://make.fun/bounty/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c)
[![rank](https://make.fun/badge/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c/masoplek1011/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c/rank.svg)](https://make.fun/bounty/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c)
[![reward](https://make.fun/badge/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c/masoplek1011/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c/reward.svg)](https://make.fun/bounty/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c)

An entry for the make.fun bounty **"The Meeting That Should Have Been One Line"** — one line that replaces a useless meeting, and ends it for good.

## The entry

> Fourteen people spent an hour approving a two-word reply one of us had already sent yesterday.

Fourteen people. One hour. One two-word reply. Already sent yesterday. There is nothing left to meet about.

## How to run

Requires Node.js 22 (standard library only, no dependencies).

```sh
MAKEFUN_OUTPUT_DIR=/tmp/meeting-output node main.ts
cat /tmp/meeting-output/entry.txt
```

The program writes exactly one line to `$MAKEFUN_OUTPUT_DIR/entry.txt` — no trailing newline, deterministic output.
