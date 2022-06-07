# @edgeandnode/eslint-config

### Installation

#### Install the package

```
pnpm add --save-dev @edgeandnode/eslint-config
```

#### Use the preset in your _.eslintrc.js_ file.

```js
// .eslintrc.js
module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["@edgeandnode", "@edgeandnode/eslint-config/next"],
  plugins: ["testing-library"],
  rules: {
    "testing-library/no-unnecessary-act": ["error", { isStrict: true }],
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        project: require.resolve("./tsconfig.json"),
      },
    },
  ],
};
```

#### Presets

- **@edgeandnode/eslint-config** — base profile built with _eslint-plugin-jsx-a11y_, _eslint-plugin-react_, _eslint-plugin-react-hooks_, _eslint-plugin-simple-import-sort_, _eslint-plugin-sonarjs_, and _eslint-plugin-simple-import-sort_

- **@edgeandnode/eslint-config/next** — profile for Next.js built with _@next/eslint-config-next_

## Development

- Mark changes from "default" rules present in common presets with `@changed`.
- Describe the background for a rule or it's disabling with a comment marked
  with `@motivation`.
- Use rules that affect semantics — detect bugs and "no morning coffee"
  mistakes.
- Avoid obtrusive code-style rules.
