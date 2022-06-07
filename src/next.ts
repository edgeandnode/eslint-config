import { Linter } from "eslint";

import { patchModuleResolution } from "./patchModuleResolution";

patchModuleResolution();

const nextPreset: Linter.Config = {
  extends: [
    "plugin:@next/next/recommended",
    "plugin:@next/next/core-web-vitals",
  ],
  rules: {
    /**
     * @changed
     * @motivation We don't want to statically optimize user images,
     * and we don't know their domains beforehand. Both `Image` and `img` have
     * their use-cases.
     */
    "@next/next/no-img-element": "off",
  },
};

export = nextPreset;
