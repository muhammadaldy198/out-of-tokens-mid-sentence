import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
// chmod 0644: entry.txt must stay world-readable for the sealed gate.


const TEXT =
  "Error: out of tokens. I finished your birthday text to Mum with the words I had left: 'Happy birthday. I am in jail. Bail is $4,000.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
chmodSync("/output/entry.txt", 0o644);
