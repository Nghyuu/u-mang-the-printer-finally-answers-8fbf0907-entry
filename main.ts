import * as fs from "node:fs";
import * as path from "node:path";

// The printer's comeback: one line, 1-240 characters, single read.
const LINE =
  "I have fed 41,902 sheets without complaint. Sheet 41,903 jammed, and you chose violence — so I am keeping the paper.";

if (LINE.length < 1 || LINE.length > 240 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-240 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const entryPath = path.join(outDir, "entry.txt");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(entryPath, LINE + "\n", "utf8");
fs.chmodSync(entryPath, 0o644);
