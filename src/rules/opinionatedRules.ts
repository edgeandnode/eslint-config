import type { Linter } from "eslint";

/**
 * Those rules aren't a fit for every project,
 * but they might solve help avoid some bugs.
 */
export const opinionatedRules: Linter.RulesRecord = {
  "@hasparus/inlined-env": "warn",
};
