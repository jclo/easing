# Easing

[![NPM version][npm-image]][npm-url]
[![Travis CI][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependencies status][dependencies-image]][dependencies-url]
[![Dev Dependencies status][devdependencies-image]][devdependencies-url]
[![License][license-image]](LICENSE.md)
<!--- [![node version][node-image]][node-url] -->

[![NPM install][npm-install-image]][npm-install-url]

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
[npm-install-image]: https://nodei.co/npm/@mobilabs/easing.png?compact=true
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[download-image]: https://img.shields.io/npm/dm/@mobilabs/easing.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/jclo/easing.svg?style=flat-square
[coveralls-image]: https://img.shields.io/coveralls/jclo/easing/master.svg?style=flat-square
[dependencies-image]: https://david-dm.org/jclo/easing/status.svg?theme=shields.io
[devdependencies-image]: https://david-dm.org/jclo/easing/dev-status.svg?theme=shields.io
[license-image]: https://img.shields.io/npm/l/@mobilabs/easing.svg?style=flat-square

[npm-url]: https://www.npmjs.com/package/@mobilabs/easing
[npm-install-url]: https://nodei.co/npm/@mobilabs/easing
[node-url]: http://nodejs.org/download
[download-url]: https://www.npmjs.com/package/@mobilabs/easing
[travis-url]: https://travis-ci.org/jclo/easing
[coveralls-url]: https://coveralls.io/github/jclo/easing?branch=master
[dependencies-url]: https://david-dm.org/jclo/easing
[devdependencies-url]: https://david-dm.org/jclo/easing?type=dev
[license-url]: http://opensource.org/licenses/MIT
