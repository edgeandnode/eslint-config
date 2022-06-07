module.exports = {
  extends: ["./dist"],
  ignorePatterns: ["!**/*"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        project: require.resolve("./tsconfig.json"),
      },
    },
  ],
};
