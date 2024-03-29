import type { Linter } from "eslint";

import { jsxA11yRules } from "./rules/jsxA11yRules";
import { nativeEslintRules } from "./rules/nativeEslintRules";
import { reactHooksRules } from "./rules/reactHooksRules";
import { reactRules } from "./rules/reactRules";
import { simpleImportSortRules } from "./rules/simpleImportSortRules";
import { sonarjsRules } from "./rules/sonarjsRules";
import {
  typecheckedRules,
  typescriptEslintRules,
} from "./rules/typescriptEslintRules";

export interface CreateConfigOptions {
  ownPackageScope: string;
  useRulesRequiringTypechecking?: boolean;
}

export const createEslintConfig = ({
  ownPackageScope,
  useRulesRequiringTypechecking = true,
}: CreateConfigOptions): Linter.Config => ({
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  settings: {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx", ".d.ts"],
    },
  },
  plugins: [
    "@typescript-eslint",
    "import",
    "simple-import-sort",
    "sonarjs",
    "@hasparus",
  ],
  rules: {
    ...nativeEslintRules,
    ...typescriptEslintRules,
    ...sonarjsRules,
    ...simpleImportSortRules(ownPackageScope),
  },
  overrides: [
    {
      files: ["*.md"],
      plugins: ["markdown"],
    },
    {
      files: ["*.ts", "*.tsx", "*.mts", "*.mtsx", "*.cts", "*.ctsx"],
      rules: {
        ...typecheckedRules[useRulesRequiringTypechecking ? "on" : "off"],
      },
    },
    {
      files: ["*.cts", "*.ctsx", "*.cjs", ".js", ".jsx"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
    {
      files: ["*.tsx"],
      settings: {
        react: { version: "99.99.99" /* eternal */ },
      },
      plugins: ["jsx-a11y", "react", "react-hooks"],
      rules: {
        ...jsxA11yRules,
        ...reactHooksRules,
        ...reactRules,
      },
    },
    {
      files: ["*.stories.tsx"],
      rules: {
        ...typecheckedRules.off,
        /**
         * @motivation Stories export "config / frontmatter" as default
         */
        "import/no-anonymous-default-export": "off",
      },
    },
    {
      // these will usually be scripts or workspace utility code
      parserOptions: { project: null },
      files: ["*.js", "*.cjs", "*.mjs"],
    },
  ],
});
