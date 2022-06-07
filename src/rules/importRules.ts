import type { Linter } from "eslint";

export const importRules: Linter.RulesRecord = {
  /**
   * @motivation Anonymous default export is the best way to get functions
   * name "default" in call stack. — Not a nice debugging experience.
   *
   * Use named exports instead of default exporting anonymous object — they
   * treeshake better.
   */
  "import/no-anonymous-default-export": "error",
};
