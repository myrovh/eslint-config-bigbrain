module.exports = {
  plugins: ["unicorn", "import"],
  extends: [
    "eslint:recommended",
    "plugin:unicorn/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "prettier",
    "prettier/unicorn",
  ],
  rules: {
    // eslint rules
    "require-atomic-updates": "error",
    "no-unreachable-loop": "error",
    "no-unused-vars": ["warn", { ignoreRestSiblings: true }],
    eqeqeq: "warn",
    "no-shadow": "warn",
    "no-var": "warn",
    "prefer-template": "warn",
    // unicorn rules
    "unicorn/no-null": "off",
    "unicorn/prefer-flat-map": "error",
    "unicorn/prefer-replace-all": "error",
    "unicorn/prevent-abbreviations": "off",
    // import rules
    "import/no-webpack-loader-syntax": "error",
    "import/no-useless-path-segments": [
      "error",
      {
        noUselessIndex: true,
      },
    ],
    "import/no-relative-parent-imports": "error",
    "import/no-extraneous-dependencies": "error",
    "import/first": "error",
    "import/exports-last": "warn",
    "import/order": [
      "error",
      {
        "newlines-between": "never",
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
    "import/newline-after-import": "warn",
    "import/no-unassigned-import": "warn",
    "import/no-anonymous-default-export": "warn",
  },
};
