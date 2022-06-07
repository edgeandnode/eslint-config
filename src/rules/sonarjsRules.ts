import type { Linter } from "eslint";

export const sonarjsRules: Linter.RulesRecord = {
  // bug detection

  // 🐛 based on `typestrict` config
  "sonarjs/no-all-duplicated-branches": "error",
  "sonarjs/no-element-overwrite": "error",
  "sonarjs/no-collection-size-mischeck": "error",
  "sonarjs/no-duplicated-branches": "error",
  "sonarjs/no-identical-conditions": "error",
  "sonarjs/no-identical-expressions": "error",

  "sonarjs/no-one-iteration-loop": "error",

  /**
   * @see https://www.sonarsource.com/docs/CognitiveComplexity.pdf
   */
  "sonarjs/cognitive-complexity": "off",

  // 🤷 useless code detection
  "sonarjs/no-inverted-boolean-check": "warn",
  "sonarjs/no-useless-catch": "warn",
  "sonarjs/prefer-single-boolean-return": "warn",
  "sonarjs/prefer-object-literal": "warn",
};
