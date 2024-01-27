// ESLint declarations
/* global define */
/* eslint strict: ["error", "function"] */
(function(root, factory) {
  'use strict';

  /* c8 ignore start */
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([''], factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    /* eslint-disable-next-line no-param-reassign */
    module.exports = factory(root);
  } else {
    // Browser globals.
    /* eslint-disable-next-line no-param-reassign */
    root.Easing = factory(root);
  }
  /* c8 ignore stop */
}(this, (root) => {
  'use strict';

  /** **************************************************************************
   * _head provides the list of the constants that are defined at the global
   * level of this module and are accessible to all. So, they are considered
   * as reserved words for this library.
   * ************************************************************************ */
  /* eslint-disable one-var, no-unused-vars, semi-style */

  let Easing;

  /* eslint-enable one-var, no-unused-vars, semi-style */

  /** **************************************************************************
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
   * Private Static Methods:
   *  . _setTestMode                returns internal objects for testing purpose,
   *
   *
   * Public Static Methods:
   *  . noConflict                  returns a reference to this Easing object,
   *  . whoami                      returns the library name and version,
   *
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
   * @namespace    -
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* - */
  /* eslint-disable no-underscore-dangle */

  (function() {
    // START OF IIFE


    // -- Module Path


    // -- Local Modules


    // -- Local Constants
    // Saves the previous value of the library variable, so that it can be
    // restored later on, if noConflict is used.
    const previousEasing = root.Easing;


    // -- Local Variables


    // -- Main -----------------------------------------------------------------

    /* eslint-disable no-param-reassign, no-cond-assign, no-plusplus, no-else-return,
      max-len, no-return-assign, no-mixed-operators, no-restricted-properties,
      no-var, prefer-exponentiation-operator */
    /* istanbul ignore next */
    Easing = {

      // Useful to retrieve the library name and version when it is
      // embedded in another library as an object:
      _library: { name: 'Easing', version: '1.0.2' },


      // -- Private Static Methods ---------------------------------------------

      /**
       * Returns the internal objects for testing purpose.
       * (must not be deleted)
       *
       * @method ()
       * @private
       * @param {}            -,
       * @returns {Object}    returns a list of internal objects,
       * @since 0.0.0
       */
      _setTestMode() {
        return [];
      },


      // -- Public Static Methods ----------------------------------------------

      /**
       * Returns a reference to this Easing object.
       * (must not be deleted)
       *
       * Nota:
       * Running Easing in no conflict mode, returns the Easing variable to its
       * _ previous owner.
       *
       * @method ()
       * @public
       * @param {}            -,
       * @returns {Object}    returns the Easing object,
       * @since 0.0.0
       */
      noConflict() {
        /* eslint-disable-next-line no-param-reassign */
        root.Easing = previousEasing;
        return this;
      },

      /**
       * Returns the library name and version.
       * (must not be deleted)
       *
       * @method ()
       * @public
       * @param {}            -,
       * @returns {Object}    returns the library name and version,
       * @since 0.0.0
       */
      whoami() {
        return this._library;
      },

      /**
       * Defines the linear easing method.
       *
       * @function (arg1, arg2, arg3, arg4)
       * @private
       * @param {Number}      the current lapse time,
       * @param {Number}      the initial CSS property value,
       * @param {Number}      the difference between the final and the initial value,
       * @param {Number}      the animation duration,
       * @returns {Number}    returns the value of the CSS property at the current
       * @since 0.0.0         lapse time,
       */
      linear(t, b, c, d) {
        return c * (t / d) + b;
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
    /* eslint-enable no-param-reassign, no-cond-assign, no-plusplus, no-else-return,
    max-len, no-return-assign, no-mixed-operators, no-restricted-properties,
    no-var */

    // Attaches constants to Easing that provide name and version of the lib.
    Easing.NAME = 'Easing';
    Easing.VERSION = '1.0.2';

    // END OF IIFE
  }());
  /* eslint-enable no-underscore-dangle */

  // Returns the library name:
  return Easing;
}));
