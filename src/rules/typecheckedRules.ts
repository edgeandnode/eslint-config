import type { Linter } from "eslint";

import { mapValues } from "../util/mapValues";

const rules: Linter.RulesRecord = {
  // Needs `project` specified in parserOptions
  "@typescript-eslint/await-thenable": "warn",
  "@typescript-eslint/no-floating-promises": "warn",
  "@typescript-eslint/no-for-in-array": "error",
  "@typescript-eslint/no-implied-eval": "error",
  "@typescript-eslint/no-misused-promises": "error",
  /**
   * @changed from error to warn
   * @motivation It's a redundancy, but not a 
   */
  "@typescript-eslint/no-unnecessary-type-assertion": "warn",

  /**
   * @changed
   * @motivation Those two can be ran on CI, but ESLint language server doesn't
   * play with them well.
   */
  "@typescript-eslint/no-unsafe-assignment": "off",
  "@typescript-eslint/no-unsafe-call": "off",

  /**
   * @changed
   * @motivation False positives on enums generated from GraphQL.
   */
  "@typescript-eslint/no-unsafe-member-access": "off",
  "@typescript-eslint/no-unsafe-return": "warn",
  "@typescript-eslint/prefer-regexp-exec": "warn",
  "@typescript-eslint/require-await": "off",
  /**
   * @changed
   * @motivation Implicit string coercion is harmless in our usecases.
   */
  "@typescript-eslint/restrict-plus-operands": "off",
  /**
   * @changed
   * @motivation Blocked by Theme UI strict types.
   */
  "@typescript-eslint/restrict-template-expressions": "off",
  /**
   * @changed
   * @motivation Hard to detect. A lot of false positives.
   */
  "@typescript-eslint/unbound-method": "off",
  "@typescript-eslint/no-use-before-define": [
    "warn",
    {
      functions: false,
      classes: false,
      variables: false,
      typedefs: false,
    },
  ],
  "@typescript-eslint/no-useless-constructor": "warn",
};

/**
 * TypeScript ESLint rules requiring type checking provide useful semantic cannot be used if ESLint is
 * used without type checking.
 */
export const typecheckedRules = {
  on: rules,
  off: mapValues(rules, () => "off" as const),
};
