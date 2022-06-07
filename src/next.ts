import { Linter } from "eslint";

import { patchModuleResolution } from "./patchModuleResolution";

patchModuleResolution();

const nextPreset: Linter.Config = {
  extends: [
    "plugin:@next/next/recommended",
    "plugin:@next/next/core-web-vitals",
  ],
  rules: {
    "@next/next/no-img-element": "off",
  },
};

export = nextPreset;
