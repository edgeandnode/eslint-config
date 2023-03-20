/* eslint-disable @typescript-eslint/no-var-requires */
const { opinionatedRules } = require("./dist/rules/opinionatedRules");

module.exports = {
  extends: ["./dist"],
  ignorePatterns: ["!**/*"],
  rules: {
    ...opinionatedRules,
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
