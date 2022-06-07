module.exports = {
  extends: ["./dist"],
  parserOptions: {
    project: require.resolve("./tsconfig.eslint.json"),
  },
  ignorePatterns: ["!**/*"],
};
