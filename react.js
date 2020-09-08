module.exports = {
  plugins: ["react", "react-hooks", "jsx-a11y"],
  extends: [
    "./typescript",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier/react",
  ],
  rules: {
    // react rules
    "react/no-array-index-key": "error",
    "react/no-danger": "error",
    "react/no-multi-comp": ["error", { ignoreStateless: true }],
    "react/no-unescaped-entities": "error",
    "react/react-in-jsx-scope": "error",
    "react/void-dom-elements-no-children": "error",
    "react/jsx-fragments": "warning",
    "react/jsx-key": "error",
  },
};
