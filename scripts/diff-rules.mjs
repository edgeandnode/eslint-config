// @ts-check

import { execSync } from "child_process";
import { readFileSync, unlinkSync, writeFile, writeFileSync } from "fs";

if (process.argv.includes("old")) {
  writeFileSync("scripts/old-rules.json", listRules());
} else if (process.argv.includes("new")) {
  writeFileSync("scripts/new-rules.json", listRules());
  writeFileSync("scripts/diff.json", diff());
} else if (process.argv.includes("clean")) {
  unlinkSync("scripts/old-rules.json");
  unlinkSync("scripts/new-rules.json");
}

function listRules() {
  execSync("pnpm build");
  const output = execSync("pnpm eslint --print-config src/*.test.tsx", {
    encoding: "utf8",
  });

  const json = JSON.parse(output);
  const rules = new Map(Object.entries(json.rules));

  for (const [key, value] of rules) {
    if (value[0] === "off") rules.delete(key);
  }

  const out = JSON.stringify(Object.fromEntries(rules), null, 2);

  return out;
}

function diff() {
  const oldRules = JSON.parse(readFileSync("scripts/old-rules.json", "utf8"));
  const newRules = JSON.parse(readFileSync("scripts/new-rules.json", "utf8"));

  console.log("Old rules:", Object.keys(oldRules).length);
  console.log("New rules:", Object.keys(newRules).length);

  const oldKeys = Object.keys(oldRules);
  const newKeys = Object.keys(newRules);

  const added = newKeys.filter((key) => !oldKeys.includes(key));
  const removed = oldKeys.filter((key) => !newKeys.includes(key));

  return JSON.stringify(
    {
      added,
      removed,
    },
    null,
    2
  );
}
