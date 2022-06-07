import { createEslintConfig } from "./createEslintConfig";
import { patchModuleResolution } from "./patchModuleResolution";

patchModuleResolution();

export = createEslintConfig({ ownPackageScope: "edgeandnode" });
