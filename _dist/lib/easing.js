/*! ****************************************************************************
 * Easing v0.0.0
 *
 * A simple library that implements Robert Penner's easing equations.
 * (you can download it from npm or github repositories)
 * Copyright (c) 2019 Mobilabs <contact@mobilabs.fr> (http://www.mobilabs.fr).
 * Released under the MIT license. You may obtain a copy of the License
 * at: http://www.opensource.org/licenses/mit-license.php).
 * ************************************************************************** */
// Based on ES6.lib template v0.0.3
// ESLint declarations
/* global define */
/* eslint strict: ["error", "function"] */
(function(root, factory) {
  'use strict';

  /* istanbul ignore next */
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([''], factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(root);
    // This is a hack to attach the lib to the browser root when this lib is
    // included inside another lib and the whole is browserifyied:
    /* eslint-disable-next-line no-param-reassign */
    if (root.Easing === null) root.Easing = factory(root);
  } else {
    // Browser globals.
    /* eslint-disable-next-line no-param-reassign */
    root.Easing = factory(root);
  }
}(this, (root) => {
  'use strict';

  // This is the list of the constants that are defined at the global level of
  // this module and are accessible to all. So, they are considered as reserved
  // words for this library.
  /* eslint-disable one-var, semi-style */
  let Easing
    ;
  /* eslint-enable one-var, semi-style */

  /* ***************************************************************************
   *
   * Defines easing functions.
   *
   * easing.js is just a literal object that contains a set of functions. It
   * can't be intantiated.
   *
   * Private Functions:
   *  . none,
   *
   *
   * Public Static Methods:
   *   . linear
   *   . swing
   *   . easeInSine
   *   . easeOutSine
   *   . easeInOutSine
   *   . easeInQuad
   *   . easeOutQuad
   *   . easeInOutQuad
   *   . easeInCubic
   *   . easeOutCubic
   *   . easeInOutCubic
   *   . easeInQuart
   *   . easeOutQuart
   *   . easeInOutQuart
   *   . easeInQuint
   *   . easeOutQuint
   *   . easeInOutQuint
   *   . easeInExpo
   *   . easeOutExpo
   *   . easeInOutExpo
   *   . easeInCirc
   *   . easeOutCirc
   *   . easeInOutCirc
   *   . easeInBack
   *   . easeOutBack
   *   . easeInOutBack
   *   . easeInElastic
   *   . easeOutElastic
   *   . easeInOutElastic
   *   . easeInBounce
   *   . easeOutBounce
   *   . easeInOutBounce
   *
   *
   *
   * @namespace    Easing
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* - */

  (function() {
    // IIFE

    // -- Module path


    // -- Local modules


    // -- Local constants
    // Saves the previous value of the library variable, so that it can be
    // restored later on, if noConflict is used.
    const previousEasing = root.Easing;


    // -- Local variables


    // -- Public Static Methods ------------------------------------------------

    /* eslint-disable no-param-reassign, no-cond-assign, no-plusplus, no-else-return,
      max-len, no-return-assign, no-mixed-operators, no-restricted-properties,
      no-var */
    /* istanbul ignore next */
    Easing = {

      /**
       * Returns a reference to this Easing object.
       *
       * Nota:
       * Running Easing in noConflic mode, returns the Easing variable to its
       _ previous owner.
       *
       * @method ()
       * @public
       * @param {}            -,
       * @returns {String}    returns the Easing object,
       * @since 0.0.0
       */
      /* istanbul ignore next */
      noConflict() {
        /* eslint-disable-next-line no-param-reassign */
        root.Easing = previousEasing;
        return this;
      },

      linear(t, b, c, d) {
        return c * t / d + b;
      },

      swing(t, b, c, d) {
        return c * (0.5 - Math.cos(t / d * Math.PI) / 2) + b;
      },

      easeInSine(t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
      },

      easeOutSine(t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
      },

      easeInOutSine(t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
      },

      easeInQuad(t, b, c, d) {
        return c * (t /= d) * t + b;
      },

      easeOutQuad(t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
      },

      easeInOutQuad(t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
      },

      easeInCubic(t, b, c, d) {
        return c * (t /= d) * t * t + b;
      },

      easeOutCubic(t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
      },

      easeInOutCubic(t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
      },

      easeInQuart(t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
      },

      easeOutQuart(t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
      },

      easeInOutQuart(t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
      },

      easeInQuint(t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
      },

      easeOutQuint(t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
      },

      easeInOutQuint(t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
      },

      easeInExpo(t, b, c, d) {
        return (t === 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
      },

      easeOutExpo(t, b, c, d) {
        return (t === d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
      },

      easeInOutExpo(t, b, c, d) {
        if (t === 0) return b;
        if (t === d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
      },

      easeInCirc(t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
      },

      easeOutCirc(t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
      },

      easeInOutCirc(t, b, c, d) {
        if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
      },

      easeInBack(t, b, c, d, s) {
        if (s === undefined) { s = 1.70158; }
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
      },

      easeOutBack(t, b, c, d, s) {
        if (s === undefined) { s = 1.70158; }
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
      },

      easeInOutBack(t, b, c, d, s) {
        if (s === undefined) { s = 1.70158; }
        if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
      },

      easeInElastic(t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t === 0) return b;
        if ((t /= d) === 1) return b + c;
        if (!p) { p = d * 0.3; }
        if (a < Math.abs(c)) {
          a = c;
          s = p / 4;
        } else {
          s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
      },

      easeOutElastic(t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t === 0) return b;
        if ((t /= d) === 1) return b + c;
        if (!p) { p = d * 0.3; }
        if (a < Math.abs(c)) {
          a = c;
          s = p / 4;
        } else {
          s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
      },

      easeInOutElastic(t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t === 0) return b;
        if ((t /= d / 2) === 2) return b + c;
        if (!p) { p = d * (0.3 * 1.5); }
        if (a < Math.abs(c)) {
          a = c;
          s = p / 4;
        } else {
          s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        if (t < 1) {
          return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        }
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
      },

      easeInBounce(t, b, c, d) {
        return c - this.easeOutBounce(d - t, 0, c, d) + b;
      },

      easeOutBounce(t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
          return c * (7.5625 * t * t) + b;
        } else if (t < (2 / 2.75)) {
          return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b;
        } else if (t < (2.5 / 2.75)) {
          return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b;
        } else {
          return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b;
        }
      },

      easeInOutBounce(t, b, c, d) {
        if (t < d / 2) {
          return this.easeInBounce(t * 2, 0, c, d) * 0.5 + b;
        }
        return this.easeOutBounce(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
      },
    };

    // Attaches a constant to ESLib that provides the version of the lib.
    Easing.VERSION = '0.0.0';
  }());
  /* eslint-enable no-param-reassign, no-cond-assign, no-plusplus, no-else-return,
    max-len, no-return-assign, no-mixed-operators, no-restricted-properties,
    no-var */


  // Returns the library name:
  return Easing;
}));
