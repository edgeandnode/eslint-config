/** @jsxImportSource react */

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

// -----------------------------------------------------------------------------

// eslint-disable-next-line no-lone-blocks
{
  // https://devblogs.microsoft.com/typescript/announcing-typescript-4-7/#optional-variance-annotations-for-type-parameters
  type F<in out T> = (x: T) => T;
}

{
  const f = <T,>(x: T) => x;
  type FNumber = typeof f<number>;
}

{
  function Component() {
    // eslint-disable-next-line react/no-unstable-nested-components
    function UnstableNestedComponent() {
      return <div />;
    }

    return (
      <div>
        <UnstableNestedComponent />
      </div>
    );
  }
}
