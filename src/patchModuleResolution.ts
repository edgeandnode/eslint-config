/* eslint-disable @typescript-eslint/no-unsafe-return */
/**
 * ESLint config constructor function enabling modern module resolution.
 *
 * Based on Next.js ESLint config.
 * @see https://github.com/vercel/next.js/blob/canary/packages/eslint-config-next/index.js
 *
 * @rushstack/eslint-patch is used to include plugins as dev
 * dependencies instead of imposing them as peer dependencies.
 *
 * @see https://www.npmjs.com/package/@rushstack/eslint-patch
 */
export function patchModuleResolution() {
  const keptPaths: string[] = [];
  const sortedPaths: string[] = [];
  const cwd = process.cwd().replace(/\\/g, "/");
  const originalPaths = require.resolve.paths("eslint-plugin-import") || [];

  // eslint throws a conflict error when plugins resolve to different
  // locations, since we want to lock our dependencies by default
  // but also need to allow using user dependencies this updates
  // our resolve paths to first check the cwd and iterate to
  // eslint-config-next's dependencies if needed

  for (let i = originalPaths.length - 1; i >= 0; i--) {
    const currentPath = originalPaths[i];

    if (currentPath.replace(/\\/g, "/").startsWith(cwd)) {
      sortedPaths.push(currentPath);
    } else {
      keptPaths.unshift(currentPath);
    }
  }

  // maintain order of node_modules outside of cwd
  sortedPaths.push(...keptPaths);

  const hookPropertyMap = new Map(
    [
      "eslint-plugin-import",
      "eslint-plugin-react",
      "eslint-plugin-jsx-a11y",
      "@next/eslint-plugin-next",
      "eslint-import-resolver-node",
      "eslint-import-resolver-typescript",
      "eslint-plugin-react-hooks",
      "eslint-plugin-simple-import-sort",
      "eslint-plugin-sonarjs",
    ].map((dependency) => [
      dependency,
      require.resolve(dependency, { paths: sortedPaths }),
    ])
  );

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const mod = require("module") as ModuleWithResolveFilename;

  const resolveFilename = mod._resolveFilename;
  mod._resolveFilename = function (
    request: string,
    parent: unknown,
    isMain: unknown,
    options: unknown
  ) {
    const hookResolved = hookPropertyMap.get(request);
    if (hookResolved) {
      request = hookResolved;
    }
    return resolveFilename.call(mod, request, parent, isMain, options);
  };

  require("@rushstack/eslint-patch/modern-module-resolution");
}

type ModuleWithResolveFilename = {
  _resolveFilename: (
    request: string,
    parent: unknown,
    isMain: unknown,
    options: unknown
  ) => unknown;
};
