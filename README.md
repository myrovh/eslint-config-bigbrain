# eslint-config-bigbrain

Just my personal eslint config setup for regular javascript or typescript. I don't know why I called it bigbrain.

This config isn't really designed with pure javascript projects in mind even though a javascript linter is shipped. The base shared config is included for linting of any regular `.js` files that might be included in a project.

## shared

The shared config is used by all actually exported configs.

- [eslint](https://eslint.org/docs/rules/) recommended defaults plus a few extra rules
- [unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn) recommended defaults with a few minor additions
- [sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs) just recommended
- [import](https://github.com/benmosher/eslint-plugin-import) with import sorting enabled

## default

Regular javascript only eslint rules.

## typescript

Shared rules extended with typescript-eslint rules.

- shared
- [@typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)

## react

Extends typescript rules with react and jsx rules. Required plugins aren't included in the peerDependencies to avoid annoying warnings when you aren't using react rules.

```sh
yarn add -D eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
```

- typescript
- [react](https://github.com/yannickcr/eslint-plugin-react)
- [react-hooks](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks)
- [jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
