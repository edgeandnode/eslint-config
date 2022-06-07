import type { Linter } from "eslint";

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
  "@typescript-eslint/no-extra-semi": "error",
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
  "prefer-const": "error",
  // TypeScript transpiles `let/const` to `var` if you need it
  "no-var": "error",
};
