module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "./lib/shared",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/typescript",
    "prettier/@typescript-eslint",
  ],
  rules: {
    // promise rules
    "promise/prefer-await-to-then": "warn",
    "promise/prefer-await-to-callbacks": "warn",
    // typescript rules
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { prefer: "type-imports" },
    ],
    "@typescript-eslint/ban-tslint-comment": "error",
    "@typescript-eslint/member-ordering": "warn",
    "@typescript-eslint/no-require-imports": "warn",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
    "@typescript-eslint/no-unnecessary-condition": "error",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/prefer-ts-expect-error": "error",
    // typescript extension rules
    "dot-notation": "off",
    "@typescript-eslint/dot-notation": "error",
    "no-magic-numbers": "off",
    "@typescript-eslint/no-magic-numbers": [
      "error",
      {
        ignoreEnums: true,
      },
    ],
    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": "error",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": "error",
  },
};
