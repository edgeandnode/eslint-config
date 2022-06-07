import { builtinModules } from "module";

import type { Linter } from "eslint";

export function simpleImportSortRules(
  ownPackageScope: string
): Linter.RulesRecord {
  const scope = ownPackageScope.startsWith("@")
    ? ownPackageScope
    : `@${ownPackageScope}`;

  return {
    "simple-import-sort/exports": "warn",
    /**
     * @motivation
     * Grouping imports makes the code a little bit more `git diff`-friendly.
     */
    "simple-import-sort/imports": [
      "warn",
      {
        groups: [
          // Node.js builtins.
          // @ts-ignore `builtinModules` should be defined :o
          [`^(${builtinModules.join("|")})(/|$)`],
          // Packages. `react` related packages come first.
          ["^@?\\w"],
          // Internal packages.
          [`^${scope}(/.*|$)`],
          // Imports from Blitz app { @ = rootDir } alias
          ["^@/"],
          // Parent imports. Put `..` last.
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          // Other relative imports. Put same-folder imports and `.` last.
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          // Side effect imports.
          ["^\\u0000"],
        ],
      },
    ],
  };
}
