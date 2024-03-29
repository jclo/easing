# Easing

[![NPM version][npm-image]][npm-url]
[![GitHub last commit][commit-image]][commit-url]
[![Github workflow][ci-image]][ci-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![npm bundle size][npm-bundle-size-image]][npm-bundle-size-url]
[![License][license-image]](LICENSE.md)

Easing is a simple library that implements Robert Penner's easing equations. These equations are encapsulated in the module pattern. Easing is written in pure Javascript. It has no dependency.

Easing runs on both Node.js and ECMAScript 2015 (ES6) compliant browsers.


## Quick Startup

This README isn't a tutorial on Easing equations. If you need to understand what are the Easing equations, you can refer [here](https://easings.net/en).

### Node.js

```javascript
const Easing = require('easing');

// t: current time, b: beginning value, c: change in value, d: duration
const val = Easing.linear(t, b, c, d);

```

### Browser

```javascript
const val = Easing.linear(t, b, c, d);
```


## API

This library implements the following equations:

```
linear
swing
easeInSine
easeOutSine
easeInOutSine
easeInQuad
easeOutQuad
easeInOutQuad
easeInCubic
easeOutCubic
easeInOutCubic
easeInQuart
easeOutQuart
easeInOutQuart
easeInQuint
easeOutQuint
easeInOutQuint
easeInExpo
easeOutExpo
easeInOutExpo
easeInCirc
easeOutCirc
easeInOutCirc
easeInBack
easeOutBack
easeInOutBack
easeInElastic
easeOutElastic
easeInOutElastic
easeInBounce
easeOutBounce
easeInOutBounce
```


## License

[MIT](LICENSE.md).

<!--- URls -->

[npm-image]: https://img.shields.io/npm/v/@mobilabs/easing.svg?style=flat-square
[release-image]: https://img.shields.io/github/release/jclo/easing.svg?include_prereleases&style=flat-square
[commit-image]: https://img.shields.io/github/last-commit/jclo/easing.svg?style=flat-square
[ci-image]: https://github.com/jclo/easing/actions/workflows/ci.yml/badge.svg
[coveralls-image]: https://img.shields.io/coveralls/jclo/easing/master.svg?style=flat-square
[npm-bundle-size-image]: https://img.shields.io/bundlephobia/minzip/@mobilabs/easing.svg?style=flat-square
[license-image]: https://img.shields.io/npm/l/@mobilabs/easing.svg?style=flat-square

[npm-url]: https://www.npmjs.com/package/@mobilabs/easing
[release-url]: https://github.com/jclo/easing/tags
[commit-url]: https://github.com/jclo/easing/commits/master
[ci-url]: https://github.com/jclo/easing/actions/workflows/ci.yml
[coveralls-url]: https://coveralls.io/github/jclo/easing?branch=master
[npm-bundle-size-url]: https://img.shields.io/bundlephobia/minzip/@mobilabs/easing
[license-url]: http://opensource.org/licenses/MIT
