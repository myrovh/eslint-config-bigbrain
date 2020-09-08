# eslint-config-bigbrain

Just my personal eslint config setup for regular javascript or typescript. I don't know why I called it bigbrain.

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