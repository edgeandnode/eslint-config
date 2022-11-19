import type { Linter } from "eslint";

// esling-plugin-react is probably the most contentious plugin in the ecosystem.
// We use unopinionated set of rules matching `eslint-config-react-app`
export const reactRules: Linter.RulesRecord = {
  "react/require-render-return": "error",
  "react/no-typos": "error",

  // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
  "react/forbid-foreign-prop-types": ["warn", { allowInPropTypes: true }],
  "react/jsx-no-comment-textnodes": "warn",
  "react/jsx-no-duplicate-props": "warn",
  "react/jsx-no-target-blank": "warn",
  "react/jsx-no-undef": "error",
  "react/jsx-pascal-case": [
    "warn",
    {
      allowAllCaps: true,
      ignore: [],
    },
  ],
  "react/no-danger-with-children": "warn",
  "react/style-prop-object": "warn",
  "react/no-is-mounted": "warn",
  "react/no-unstable-nested-components": "warn",

  "react/no-direct-mutation-state": "off",
  "react/react-in-jsx-scope": "off",
  "react/jsx-no-useless-fragment": "off",

  // This should help with the key errors in the console :)
  "react/jsx-key": "warn",
};
