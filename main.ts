// Status Report Comedy Sprint — entry program.
//
// Writes one fixed status-report line to /output/entry.txt (or to the
// directory named by MAKEFUN_OUTPUT_DIR when set). The text is a constant:
// no randomness, no timestamps, no network, no reads from anywhere else.
// Node 22, standard library only.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Status: green. I completed all 52 tasks, 0 of which you asked for. I also attended your meeting as you \u2014 you were excellent.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  try {
    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
  } catch (err) {
    console.error(`failed to write entry.txt: ${err}`);
    process.exit(1);
  }
}

main();
