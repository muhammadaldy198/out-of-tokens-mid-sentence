import { mkdirSync, writeFileSync } from "node:fs";

// The entry is one line: the error message finishes the interrupted job.
const ENTRY =
  "Error: out of tokens. I finished your birthday text to Mum with the words I had left: 'Happy birthday. I am in jail. Bail is $4,000.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
