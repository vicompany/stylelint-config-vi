# stylelint-config-vi

[![npm](https://img.shields.io/npm/v/stylelint-config-vi.svg)](https://npm.im/stylelint-config-vi)
[![Build Status](https://travis-ci.org/vicompany/stylelint-config-vi.svg?branch=master)](https://travis-ci.org/vicompany/stylelint-config-vi)

This package provides a [Stylelint shareable config](http://stylelint.io/user-guide/configuration/#extends) for the VI Company's Sass coding style.

## Installation

To make use of this config, install Stylelint and this package as a development dependency of your project:

    npm i stylelint stylelint-config-vi -D

## Usage

Create a [`.stylelintrc.js`](http://stylelint.io/user-guide/configuration/#configuration) config file in the root of the project:

### .stylelintrc.js
```js
module.exports = {
  extends: 'stylelint-config-vi'
};
```
## Migration to Stylelint 14.0.0

If you use Stylelint to lint anything other than CSS files, you will need to install and configure these syntaxes.

### SCSS

Install the [PostCSS SCSS Syntax](https://github.com/postcss/postcss-scss):

    npm i postcss postcss-scss -D

Update your `.stylelintrc.js` file

### .stylelintrc.js
```js
module.exports = {
  extends: 'stylelint-config-vi',
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
    },
  ],
};
```
Add the [language identifiers](https://code.visualstudio.com/docs/languages/overview#_language-identifier) you want to validate  using the `stylelint.validate` option:
1. To the **Workspace Settings**: `Ctrl+Shift+P` and select **Preferences: Open Workspace Settings (JSON)**
2. Or **User settings**: `Ctrl+Shift+P` and select **Preferences: Open Settings (JSON)`**

### Example VS Code config
```json
{
  "stylelint.validate": ["css", "postcss", "scss"]
}
```

### Vue.js

Install the [PostCSS HTML Syntax](https://github.com/gucong3000/postcss-html):

    npm i postcss-html -D

Update your `.stylelintrc.js` file

### .stylelintrc.js
```js
module.exports = {
  extends: 'stylelint-config-vi',
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html',
    },
  ],
};
```
Add the [language identifiers](https://code.visualstudio.com/docs/languages/overview#_language-identifier) you want to validate  using the `stylelint.validate` option:
1. To the **Workspace Settings**: `Ctrl+Shift+P` and select `Preferences: Open Workspace Settings (JSON)`
2. Or **User settings**: `Ctrl+Shift+P` and select `Preferences: Open Settings (JSON)`

### Example VS Code config
```json
{
  "stylelint.validate": ["css", "postcss", "vue"]
}
```

### References
- [Stylelint migration guide to 14.0.0](https://stylelint.io/migration-guide/to-14)
- [vscode-stylelint migration guide](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint&ssr=false#user-content-migrating-from-vscode-stylelint-0.x%2Fstylelint-13.x)

## License

MIT © [VI Company](http://vicompany.nl)
