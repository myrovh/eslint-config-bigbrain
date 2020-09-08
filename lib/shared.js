module.exports = {
  plugins: ["unicorn", "sonarjs", "import"],
  extends: [
    "eslint:recommended",
    "plugin:unicorn/recommended",
    "plugin:sonarjs/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "prettier",
    "prettier/unicorn",
  ],
  rules: {
    // eslint rules
    "no-console": "warning",
    "require-atomic-updates": "error",
    "no-unreachable-loop": "error",
    eqeqeq: "warning",
    "no-shadow": "warning",
    "no-var": "warning",
    "prefer-template": "warning",
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
    "import/exports-last": "warning",
    "import/order": [
      "error",
      {
        "newlines-between": "never",
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
    "import/newline-after-import": "warning",
    "import/no-unassigned-import": "warning",
    "import/no-anonymous-default-export": "warning",
  },
};
