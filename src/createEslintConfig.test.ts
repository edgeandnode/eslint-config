import { createEslintConfig } from "./createEslintConfig";

createEslintConfig({
  // @ts-expect-error Type 'number' is not assignable to type 'string'.ts(2322)
  ownPackageScope: 2,
});

createEslintConfig({
  ownPackageScope: "edgeandnode",
});

// @ts-expect-error Argument of type '{}' is not assignable to parameter of type '{ ownPackageScope: string; }'.
createEslintConfig({});
