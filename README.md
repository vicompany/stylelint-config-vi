# stylelint-config-vi

[![npm](https://img.shields.io/npm/v/stylelint-config-vi.svg)](https://npm.im/stylelint-config-vi)
[![Build Status](https://travis-ci.org/vicompany/stylelint-config-vi.svg?branch=master)](https://travis-ci.org/vicompany/stylelint-config-vi)

This package provides a [Stylelint shareable config](http://stylelint.io/user-guide/configuration/#extends) for the VI Company's Sass coding style.

## Installation

To make use of this config, install Stylelint and this package as a development dependency of your project:

    npm install stylelint stylelint-config-vi --save-dev

## Usage

Create a [`.stylelintrc.js`](http://stylelint.io/user-guide/configuration/#configuration) config file in the root of the project:

### .stylelintrc.js
```js
module.exports = {
  extends: 'stylelint-config-vi'
};
```

## License

MIT © [VI Company](http://vicompany.nl)
