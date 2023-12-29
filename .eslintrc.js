module.exports = {
  root: true,
  extends: ["universe/native"],
  plugins: ["unused-imports"],
  rules: {
    "unused-imports/no-unused-imports": "error",
  },
}
