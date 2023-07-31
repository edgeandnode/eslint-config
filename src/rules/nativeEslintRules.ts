import type { Linter } from "eslint";

export const nativeEslintRules: Linter.RulesRecord = {
  "array-callback-return": "warn",
  "dot-location": ["warn", "property"],
  eqeqeq: ["warn", "smart"],
  "new-parens": "warn",
  "no-caller": "warn",
  "no-cond-assign": ["warn", "except-parens"],
  "no-const-assign": "warn",
  "no-control-regex": "warn",
  "no-delete-var": "warn",
  "no-dupe-args": "off",
  "no-dupe-keys": "off",
  "no-duplicate-case": "warn",
  "no-empty-character-class": "warn",
  "no-empty-pattern": "warn",
  "no-eval": "warn",
  "no-ex-assign": "warn",
  "no-extend-native": "warn",
  "no-extra-bind": "warn",
  "no-extra-label": "warn",
  "no-fallthrough": "warn",
  "no-func-assign": "off",
  "no-implied-eval": "off",
  "no-invalid-regexp": "warn",
  "no-iterator": "warn",
  "no-label-var": "warn",
  "no-labels": [
    "warn",
    {
      allowLoop: true,
      allowSwitch: false,
    },
  ],
  "no-lone-blocks": "warn",
  /**
   * @changed
   * @motivation Too rigid. Warns on console.error used in callback inside loop.
   * I don't really see the benefit here.
   */
  "no-loop-func": "off",
  "no-mixed-operators": [
    "warn",
    {
      groups: [
        ["&", "|", "^", "~", "<<", ">>", ">>>"],
        ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
        ["&&", "||"],
        ["in", "instanceof"],
      ],
      allowSamePrecedence: false,
    },
  ],
  "no-multi-str": "warn",
  "no-native-reassign": "warn",
  "no-negated-in-lhs": "warn",
  "no-new-func": "warn",
  "no-new-object": "warn",
  "no-new-symbol": "warn",
  "no-new-wrappers": "warn",
  "no-obj-calls": "warn",
  "no-octal": "warn",
  "no-octal-escape": "warn",
  /**
   * @changed
   * @motivation False positives on declaration merging. TypeScript should
   * catch any dangerous redeclares.
   */
  "no-redeclare": "off",
  "no-regex-spaces": "warn",
  "no-restricted-syntax": ["warn", "WithStatement"],
  "no-script-url": "warn",
  "no-self-assign": "warn",
  "no-self-compare": "warn",
  "no-sequences": "warn",
  "no-shadow-restricted-names": "warn",
  "no-sparse-arrays": "warn",
  "no-template-curly-in-string": "warn",
  "no-this-before-super": "warn",
  "no-throw-literal": "warn",
  "no-restricted-globals": [
    "error",
    "addEventListener",
    "blur",
    "close",
    "closed",
    "confirm",
    "defaultStatus",
    "defaultstatus",
    "event",
    "external",
    "find",
    "focus",
    "frameElement",
    "frames",
    "history",
    "innerHeight",
    "innerWidth",
    "length",
    "location",
    "locationbar",
    "menubar",
    "moveBy",
    "moveTo",
    "name",
    "onblur",
    "onerror",
    "onfocus",
    "onload",
    "onresize",
    "onunload",
    "open",
    "opener",
    "opera",
    "outerHeight",
    "outerWidth",
    "pageXOffset",
    "pageYOffset",
    "parent",
    "print",
    "removeEventListener",
    "resizeBy",
    "resizeTo",
    "screen",
    "screenLeft",
    "screenTop",
    "screenX",
    "screenY",
    "scroll",
    "scrollbars",
    "scrollBy",
    "scrollTo",
    "scrollX",
    "scrollY",
    "self",
    "status",
    "statusbar",
    "stop",
    "toolbar",
    "top",
  ],
  "no-unexpected-multiline": "warn",
  "no-unused-labels": "warn",
  "no-useless-computed-key": "warn",
  "no-useless-concat": "warn",
  "no-useless-escape": "warn",
  "no-useless-rename": [
    "warn",
    {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    },
  ],
  "no-with": "warn",
  "no-whitespace-before-property": "warn",
  "require-yield": "warn",
  "rest-spread-spacing": ["warn", "never"],
  strict: ["warn", "never"],
  "unicode-bom": ["warn", "never"],
  "use-isnan": "warn",
  "valid-typeof": "warn",
  "no-unreachable": "off",
  "no-restricted-properties": [
    "error",
    {
      object: "require",
      property: "ensure",
      message:
        "Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting",
    },
    {
      object: "System",
      property: "import",
      message:
        "Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting",
    },
  ],
  "getter-return": "off",
  "default-case": "off",
  // TypeScript checks this
  "no-dupe-class-members": "off",
  // TypeScript checks this.
  "no-undef": "off",
};
