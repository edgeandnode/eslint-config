# @edgeandnode/eslint-config

### Installation

TBD

### Rules requiring type checking

Reference your _tsconfig.json_ in `"project"` to enable rules which require type
checking.

```json
{
  "root": true,
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "extends": ["@edgeandnode"]
}
```

## Development

- Mark changes from "default" rules present in common presets with `@changed`.
- Describe the background for a rule or it's disabling with a comment marked
  with `@motivation`.
- Use rules that affect semantics — detect bugs and "no morning coffee"
  mistakes.
- Avoid obtrusive code-style rules.
