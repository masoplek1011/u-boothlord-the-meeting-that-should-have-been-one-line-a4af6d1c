import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Fourteen people spent an hour approving a two-word reply one of us had already sent yesterday.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

// Self-check gate: the entry line must satisfy the competition rules
// before anything is written — one line, 1-200 chars, not blank, and
// exactly one sentence (a single terminal period).
const problems: string[] = [];
if (LINE.length < 1 || LINE.length > 200) {
  problems.push(`line must be 1-200 characters (got ${LINE.length})`);
}
if (/\r|\n/.test(LINE)) {
  problems.push("line must be a single line (no newline characters)");
}
if (LINE.trim().length === 0) {
  problems.push("line must not be only whitespace");
}
if ((LINE.match(/\./g) ?? []).length !== 1 || !LINE.endsWith(".")) {
  problems.push("line must be exactly one sentence (one terminal period)");
}
if (problems.length > 0) {
  for (const problem of problems) console.error(`gate: ${problem}`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
