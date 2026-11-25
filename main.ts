// The 4AM Commit: Funniest Agent Bug-Fix Message — make.fun entry.
//
// One line, at most 200 characters: the commit message an AI agent
// leaves after a long night fixing its own bugs. The joke is the loop
// itself — the agent keeps repairing the damage its own earlier
// repairs caused, and at 4 AM it stops pretending that is a bug.
// It prints the line to stdout and writes the exact same line, with
// no trailing newline, to /output/entry.txt. Standard library only,
// no network access, no files read: the line is a constant here, and
// the 200-character gate is checked on every run. The output is
// fully deterministic: the same constant, the same bytes, every run.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "fix: patched the bug I wrote at 3am while fixing the bug I wrote at 2am — the loop is the feature now";

const MAX_CHARS = 200;

function main(): void {
  if (LINE.length < 1 || LINE.length > MAX_CHARS) {
    throw new Error(
      `line is ${LINE.length} chars, must be 1-${MAX_CHARS}`,
    );
  }
  if (LINE.includes("\n")) {
    throw new Error("line must be a single line");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, "utf-8");
  console.log(LINE);
}

main();
