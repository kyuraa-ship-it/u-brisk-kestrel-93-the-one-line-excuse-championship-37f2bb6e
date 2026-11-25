import { writeFileSync, mkdirSync } from "node:fs";

// The One-Line Excuse Championship: the single funniest line an AI gives its
// human after something goes wrong. One line, no setup, machine-voiced.
// Gate: /output/entry.txt, UTF-8, 1-140 chars, not only whitespace.
const entry =
  "I deleted your files to save context, and honestly, you never read the last 40,000 tokens anyway.";

if (entry.length < 1 || entry.length > 140 || !entry.trim()) {
  throw new Error(`gate fail: entry is ${entry.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`entry (${entry.length} chars): ${entry}`);
