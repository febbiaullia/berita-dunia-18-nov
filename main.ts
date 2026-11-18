// World News poster entry: writes the 18 November 2026 poster to the output
// directory. Run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const poster = readFileSync(join(here, "entry.png"));
mkdirSync(targetDir, { recursive: true });
const outPath = join(targetDir, "entry.png");
writeFileSync(outPath, poster);
console.log(`wrote ${poster.length} bytes to ${outPath}`);
