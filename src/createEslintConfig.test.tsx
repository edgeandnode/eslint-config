/** @jsxImportSource react */
/* eslint-disable no-lone-blocks */

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

{
  // https://devblogs.microsoft.com/typescript/announcing-typescript-4-7/#optional-variance-annotations-for-type-parameters
  type F<in out T> = (x: T) => T;
}

{
  const f = <T,>(x: T) => x;
  type FNumber = typeof f<number>;
}

{
  const x = 2;
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (1 < x) {
    console.log("1 < 2");
  }
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

{
  // eslint-disable-next-line @hasparus/inlined-env
  const { NODE_ENV } = process.env;
}
