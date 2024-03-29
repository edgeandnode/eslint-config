import type { Linter } from "eslint";

import { mapValues } from "../util/mapValues";

export const typescriptEslintRules: Linter.RulesRecord = {
  // based on `@typescript-eslint/recommended` config
  "@typescript-eslint/adjacent-overload-signatures": "error",
  /**
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-comment.md
   *
   * - `// @ts-ignore` comment is banned by default,
   * - `// @ts-nocheck` comment is banned by default,
   * - `// @ts-check` comment is allowed (and really awesome, use it a lot :))
   * - `// @ts-expect-error` comment is allowed with description longer than 3
   *    characters.
   */
  "@typescript-eslint/ban-ts-comment": [
    "warn",
    {
      "ts-expect-error": "allow-with-description",
      "ts-ignore": "allow-with-description",
      "ts-nocheck": "allow-with-description",
      "ts-check": false,
      minimumDescriptionLength: 3,
    },
  ],
  /**
   * @changed
   */
  "@typescript-eslint/ban-types": [
    "warn",
    {
      extendDefaults: true,
      types: {
        // see comment above `@typescript-eslint/no-empty-interface`
        "{}": false,
        // the rule triggers also on generic constraint `extends object`,
        // but `extends Record<string, unknown>` requires index signature
        // so any generic function given with `extends Record<string, unknown>
        // can't accept a type created with `interface` keyword
        object: false,
      },
    },
  ],
  /**
   * @changed
   * @motivation It's a great rule for libraries and projects in which module
   * boundary specifies public API. We create new files too often for it to
   * be practical. Subjectively, I think it's not too pleasant with our
   * current directory structure.
   */
  "@typescript-eslint/explicit-module-boundary-types": "off",
  "no-array-constructor": "off",
  "@typescript-eslint/no-array-constructor": "error",
  "no-empty-function": "off",
  /**
   * @changed
   * @motivation It's more annoying than helpful.
   */
  "@typescript-eslint/no-empty-function": "off",
  /**
   * @changed
   * @motivation False positive on interfaces used in place of intersection.
   *
   * This rule is also trying to save users from using empty interface type
   * `interface A {}` as a type for empty object, because, a small TypeScript
   * quirk, empty interface and `type A = {}` actually mean _a type for any
   * non-empty value_.
   *
   * Displaying warnings on common code, which is currently written, causes
   * unpleasant and counterproductive blinks of warning squigglies.
   */
  "@typescript-eslint/no-empty-interface": "off",
  /**
   * @changed
   * @see https://github.com/typescript-eslint/typescript-eslint/issues/1071#issuecomment-541921864
   *
   * @motivation There's now way to detect a safe use of any, but there are a
   * few save uses. Just be responsible.
   *
   * We can use [typecov](https://github.com/codechecks/typecov) to measure
   * type coverage if we're interested in getting rid of `any` from our code.
   */
  "@typescript-eslint/no-explicit-any": "off",
  "@typescript-eslint/no-extra-non-null-assertion": "error",
  "no-extra-semi": "off",
  /**
   * @changed to "off"
   * @motivation This is definitely Prettier's domain.
   */
  "@typescript-eslint/no-extra-semi": "off",
  "@typescript-eslint/no-inferrable-types": "error",
  "@typescript-eslint/no-misused-new": "error",
  "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
  /**
   * @changed
   * @motivation In some cases, like reading from a GraphQL response in a
   * React component, we might prefer an uncaught type error to propagate to
   * an error boundary.
   *
   * It's wise to prefer optional chaining over non null assertion, but we'd
   * like to keep both operators in our toolset.
   */
  "@typescript-eslint/no-non-null-assertion": "off",
  "@typescript-eslint/no-this-alias": "error",
  "no-unused-vars": "off",
  // Tons of false positives on types.
  "@typescript-eslint/no-unused-vars": "off",
  "@typescript-eslint/no-var-requires": "error",
  "@typescript-eslint/prefer-as-const": "error",
  "@typescript-eslint/prefer-namespace-keyword": "error",
  "@typescript-eslint/triple-slash-reference": "error",
  // Use only `x as T` assertion. Forget about `<T> x` assertion.
  "@typescript-eslint/consistent-type-assertions": "warn",
  /**
   * @changed
   * @motivation type-only namespaces are supported by Babel, often emitted by
   * code generation tools, and generally a valid way to group types.
   */
  "@typescript-eslint/no-namespace": [
    "warn",
    {
      allowDeclarations: true,
      allowDefinitionFiles: true,
    },
  ],

  "@typescript-eslint/no-unused-expressions": [
    "error",
    {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: true,
    },
  ],

  // False positives in TypeScript
  // These have corresponding typescript-eslint rulle
  "require-await": "off",
  "no-use-before-define": "off",
  "no-useless-constructor": "off",

  // based on `@typescript-eslint/eslint-recommended` and eslint:recommended config

  // TypeScript provides better types with rest args over `arguments`
  "prefer-rest-params": "error",
  // TypeScript transpiles spread to apply, so no need for manual apply
  "prefer-spread": "error",
  // TypeScript provides better types with `const`
  "prefer-const": "warn",
  /**
   * @changed
   * @motivation False positive inside `declare global` in TypeScript.
   * There's no chance anybody will write `var` instead of `let/const`
   * by accident in 2023/2024.
   */
  "no-var": "off",

  // choose based on the vibe
  "@typescript-eslint/array-type": "off",

  // we never used tslint
  "@typescript-eslint/ban-tslint-comment": "off",
};

const _typecheckedRules: Linter.RulesRecord = {
  // Needs `project` specified in parserOptions
  "@typescript-eslint/await-thenable": "warn",
  "@typescript-eslint/no-floating-promises": "warn",
  "@typescript-eslint/no-for-in-array": "error",
  "@typescript-eslint/no-implied-eval": "error",
  "@typescript-eslint/no-misused-promises": "error",
  /**
   * @changed from error to warn
   * @motivation It's a redundancy, but not a bug.
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

  // #region "@typescript-eslint/strict"
  // https://typescript-eslint.io/rules/

  "@typescript-eslint/no-base-to-string": "warn",
  "@typescript-eslint/no-unnecessary-boolean-literal-compare": "warn",
  "@typescript-eslint/no-unnecessary-condition": "warn",
  "@typescript-eslint/no-unnecessary-type-arguments": "warn",
  "@typescript-eslint/non-nullable-type-assertion-style": "warn",
  "@typescript-eslint/prefer-includes": "warn",
  "@typescript-eslint/prefer-return-this-type": "warn",
  "@typescript-eslint/prefer-string-starts-ends-with": "warn",

  "@typescript-eslint/no-confusing-void-expression": "off",

  "@typescript-eslint/no-duplicate-enum-values": ["error"],
  "@typescript-eslint/no-duplicate-type-constituents": ["error"],
  "@typescript-eslint/no-dynamic-delete": ["error"],
  "@typescript-eslint/no-extraneous-class": ["error"],
  "@typescript-eslint/no-invalid-void-type": ["error"],
  "@typescript-eslint/no-loss-of-precision": ["error"],
  "@typescript-eslint/no-meaningless-void-operator": ["error"],
  "@typescript-eslint/no-mixed-enums": ["error"],
  "@typescript-eslint/no-non-null-asserted-nullish-coalescing": ["error"],
  "@typescript-eslint/no-redundant-type-constituents": ["error"],
  "@typescript-eslint/no-throw-literal": ["error"],
  "@typescript-eslint/no-unnecessary-type-constraint": ["error"],
  "@typescript-eslint/no-unsafe-argument": ["error"],
  "@typescript-eslint/no-unsafe-declaration-merging": ["error"],
  "@typescript-eslint/no-unsafe-enum-comparison": ["error"],

  "@typescript-eslint/prefer-literal-enum-member": ["warn"],
  "@typescript-eslint/prefer-reduce-type-parameter": ["warn"],
  "@typescript-eslint/prefer-ts-expect-error": ["warn"],
  "@typescript-eslint/unified-signatures": ["warn"],

  // #endregion
};

/**
 * TypeScript ESLint rules requiring type checking provide useful semantic cannot be used if ESLint is
 * used without type checking.
 */
export const typecheckedRules = {
  on: _typecheckedRules,
  off: mapValues(_typecheckedRules, () => "off" as const),
};
