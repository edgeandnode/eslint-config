module.exports = {
  extends: ["./dist"],
  parserOptions: {
    project: require.resolve("./tsconfig.json"),
  },
  ignorePatterns: ["!**/*"],
};
