import type { Linter } from "eslint";

export const reactHooksRules: Linter.RulesRecord = {
  "react-hooks/exhaustive-deps": "warn",
  "react-hooks/rules-of-hooks": "error",
};
