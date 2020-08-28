// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, semi-style: 0, no-underscore-dangle: 0 */

'use strict';

// -- Vendor Modules
const { expect } = require('chai')
    ;


// -- Local Modules


// -- Local Constants


// -- Local Variables


// -- Main
module.exports = function(Easing, libname, version) {
  describe('Easing introspection:', () => {
    describe('Test the nature of Easing:', () => {
      it('Expects Easing to be an object.', () => {
        expect(Easing).to.be.an('object');
      });

      it('Expects Easing to own 38 properties.', () => {
        expect(Object.keys(Easing)).to.be.an('array').that.has.lengthOf(38);
      });
    });

    describe('Check the owned generic properties:', () => {
      it(`Expects Easing to own the property "NAME" whose value is "${libname}".`, () => {
        expect(Easing).to.own.property('NAME').that.is.equal(libname);
      });

      it(`Expects Easing to own the property "VERSION" whose value is "${version}".`, () => {
        expect(Easing).to.own.property('VERSION');
      });

      it('Expects Easing to own the property "_library" that is an object.', () => {
        expect(Easing).to.own.property('_library').that.is.an('object');
      });

      it('Expects Easing to own the property "_setTestMode" that is a function.', () => {
        expect(Easing).to.own.property('_setTestMode').that.is.a('function');
      });

      it('Expects Easing to own the property "noConflict" that is a function.', () => {
        expect(Easing).to.own.property('noConflict').that.is.a('function');
      });

      it('Expects Easing to own the property "whoami" that is a function.', () => {
        expect(Easing).to.own.property('whoami').that.is.a('function');
      });

      describe('Test the owned generic properties:', () => {
        it('Expects the property "_library" to own two properties.', () => {
          expect(Object.keys(Easing.whoami())).to.be.an('array').that.has.lengthOf(2);
        });
        it(`Expects the property "_library" to own the property "name" whose value is "${libname}".`, () => {
          expect(Easing.whoami()).to.own.property('name').that.is.equal(libname);
        });
        it(`Expects the property "_library" to own the property "version" whose value is "${version}".`, () => {
          expect(Easing.whoami()).to.own.property('version').that.is.equal(version);
        });

        it('Expects the property "_setTestMode" to return an array with 0 item.', () => {
          expect(Easing._setTestMode()).to.be.an('array').that.has.lengthOf(0);
        });

        it('Expects the property "noConflict" to return an object.', () => {
          expect(Easing.noConflict()).to.be.an('object');
        });

        it('Expects the property "whoami" to return an object.', () => {
          expect(Easing.whoami()).to.be.an('object');
        });
        it('Expects this object to own two properties.', () => {
          expect(Object.keys(Easing.whoami())).to.be.an('array').that.has.lengthOf(2);
        });
        it(`Expects this object to own the property "name" whose value is "${libname}".`, () => {
          expect(Easing.whoami()).to.own.property('name').that.is.equal(libname);
        });
        it(`Expects this object to own the property "version" whose value is "${version}".`, () => {
          expect(Easing.whoami()).to.own.property('version').that.is.equal(version);
        });
      });
    });

    describe('Check the owned specific properties:', () => {
      it('Expects Easing to own the property "linear" that is a function.', () => {
        expect(Easing).to.own.property('linear').that.is.a('function');
      });

      it('Expects Easing to own the property "swing" that is a function.', () => {
        expect(Easing).to.own.property('swing').that.is.a('function');
      });

      it('Expects Easing to own the property "easeInSine" that is a function.', () => {
        expect(Easing).to.own.property('easeInSine').that.is.a('function');
      });

      it('Expects Easing to own the property "easeOutSine" that is a function.', () => {
        expect(Easing).to.own.property('easeOutSine').that.is.a('function');
      });

      it('Expects Easing to own the property "easeInOutSine" that is a function.', () => {
        expect(Easing).to.own.property('easeInOutSine').that.is.a('function');
      });

      it('Expects Easing to own the property "easeInQuad" that is a function.', () => {
        expect(Easing).to.own.property('easeInQuad').that.is.a('function');
      });

      it('Expects Easing to own the property "easeOutQuad" that is a function.', () => {
        expect(Easing).to.own.property('easeOutQuad').that.is.a('function');
      });

      it('Expects Easing to own the property "easeInOutQuad" that is a function.', () => {
        expect(Easing).to.own.property('easeInOutQuad').that.is.a('function');
      });

      it('Expects Easing to own the property "easeInCubic" that is a function.', () => {
        expect(Easing).to.own.property('easeInCubic').that.is.a('function');
      });

      it('Expects Easing to own the property "easeOutCubic" that is a function.', () => {
        expect(Easing).to.own.property('easeOutCubic').that.is.a('function');
      });

      it('Expects Easing to own the property "easeInOutCubic" that is a function.', () => {
        expect(Easing).to.own.property('easeInOutCubic').that.is.a('function');
      });

      it('Expects Easing to own the property "easeInQuart" that is a function.', () => {
        expect(Easing).to.own.property('easeInQuart').that.is.a('function');
      });

      it('Expects Easing to own the property "easeOutQuart" that is a function.', () => {
        expect(Easing).to.own.property('easeOutQuart').that.is.a('function');
      });

      it('Expects Easing to own the property "easeInOutQuart" that is a function.', () => {
        expect(Easing).to.own.property('easeInOutQuart').that.is.a('function');
      });

      it('Expects Easing to own the property "easeInQuint" that is a function.', () => {
        expect(Easing).to.own.property('easeInQuint').that.is.a('function');
      });

      it('Expects Easing to own the property "easeOutQuint" that is a function.', () => {
        expect(Easing).to.own.property('easeOutQuint').that.is.a('function');
      });

      it('Expects Easing to own the property "easeInOutQuint" that is a function.', () => {
        expect(Easing).to.own.property('easeInOutQuint').that.is.a('function');
      });

      it('Expects Easing to own the property "easeInExpo" that is a function.', () => {
        expect(Easing).to.own.property('easeInExpo').that.is.a('function');
      });

      it('Expects Easing to own the property "easeOutExpo" that is a function.', () => {
        expect(Easing).to.own.property('easeOutExpo').that.is.a('function');
      });

      it('Expects Easing to own the property "easeInOutExpo" that is a function.', () => {
        expect(Easing).to.own.property('easeInOutExpo').that.is.a('function');
      });

      it('Expects Easing to own the property "easeInCirc" that is a function.', () => {
        expect(Easing).to.own.property('easeInCirc').that.is.a('function');
      });

      it('Expects Easing to own the property "easeOutCirc" that is a function.', () => {
        expect(Easing).to.own.property('easeOutCirc').that.is.a('function');
      });

      it('Expects Easing to own the property "easeInOutCirc" that is a function.', () => {
        expect(Easing).to.own.property('easeInOutCirc').that.is.a('function');
      });

      it('Expects Easing to own the property "easeInBack" that is a function.', () => {
        expect(Easing).to.own.property('easeInBack').that.is.a('function');
      });

      it('Expects Easing to own the property "easeOutBack" that is a function.', () => {
        expect(Easing).to.own.property('easeOutBack').that.is.a('function');
      });

      it('Expects Easing to own the property "easeInOutBack" that is a function.', () => {
        expect(Easing).to.own.property('easeInOutBack').that.is.a('function');
      });

      it('Expects Easing to own the property "easeInElastic" that is a function.', () => {
        expect(Easing).to.own.property('easeInElastic').that.is.a('function');
      });

      it('Expects Easing to own the property "easeOutElastic" that is a function.', () => {
        expect(Easing).to.own.property('easeOutElastic').that.is.a('function');
      });

      it('Expects Easing to own the property "easeInOutElastic" that is a function.', () => {
        expect(Easing).to.own.property('easeInOutElastic').that.is.a('function');
      });

      it('Expects Easing to own the property "easeInBounce" that is a function.', () => {
        expect(Easing).to.own.property('easeInBounce').that.is.a('function');
      });

      it('Expects Easing to own the property "easeOutBounce" that is a function.', () => {
        expect(Easing).to.own.property('easeOutBounce').that.is.a('function');
      });

      it('Expects Easing to own the property "easeInOutBounce" that is a function.', () => {
        expect(Easing).to.own.property('easeInOutBounce').that.is.a('function');
      });

      describe('Test the owned specific properties:', () => {
        it('Expects the property "linear" to return a number that is equal to 0.', () => {
          expect(Easing.linear(0, 0, 100, 100)).to.be.a('number').that.is.equal(0);
        });

        it('Expects the property "swing" to return a number that is equal to 0.', () => {
          expect(Easing.swing(0, 0, 100, 100)).to.be.a('number').that.is.equal(0);
        });

        it('Expects the property "easeInSine" to return a number that is equal to 0.', () => {
          expect(Easing.easeInSine(0, 0, 100, 100)).to.be.a('number').that.is.equal(0);
        });

        it('Expects the property "easeOutSine" to return a number that is equal to 0.', () => {
          expect(Easing.easeOutSine(0, 0, 100, 100)).to.be.a('number').that.is.equal(0);
        });

        it('Expects the property "easeInOutSine" to return a number that is equal to 0.', () => {
          expect(Easing.easeInOutSine(0, 0, 100, 100)).to.be.a('number').that.is.equal(0);
        });

        it('Expects the property "easeInQuad" to return a number that is equal to 0.', () => {
          expect(Easing.easeInQuad(0, 0, 100, 100)).to.be.a('number').that.is.equal(0);
        });

        it('Expects the property "easeOutQuad" to return a number that is equal to 0.', () => {
          expect(Easing.easeOutQuad(0, 0, 100, 100)).to.be.a('number').that.is.equal(0);
        });

        it('Expects the property "easeInOutQuad" to return a number that is equal to 0.', () => {
          expect(Easing.easeInOutQuad(0, 0, 100, 100)).to.be.a('number').that.is.equal(0);
        });

        it('Expects the property "easeInCubic" to return a number that is equal to 0.', () => {
          expect(Easing.easeInCubic(0, 0, 100, 100)).to.be.a('number').that.is.equal(0);
        });

        it('Expects the property "easeOutCubic" to return a number that is equal to 0.', () => {
          expect(Easing.easeOutCubic(0, 0, 100, 100)).to.be.a('number').that.is.equal(0);
        });

        it('Expects the property "easeInOutCubic" to return a number that is equal to 0.', () => {
          expect(Easing.easeInOutCubic(0, 0, 100, 100)).to.be.a('number').that.is.equal(0);
        });

        it('Expects the property "easeInQuart" to return a number that is equal to 0.', () => {
          expect(Easing.easeInQuart(0, 0, 100, 100)).to.be.a('number').that.is.equal(0);
        });

        it('Expects the property "easeOutQuart" to return a number that is equal to 0.', () => {
          expect(Easing.easeOutQuart(0, 0, 100, 100)).to.be.a('number').that.is.equal(0);
        });

        it('Expects the property "easeInOutQuart" to return a number that is equal to 0.', () => {
          expect(Easing.easeInOutQuart(0, 0, 100, 100)).to.be.a('number').that.is.equal(0);
        });

        it('Expects the property "easeInQuint" to return a number that is equal to 0.', () => {
          expect(Easing.easeInQuint(0, 0, 100, 100)).to.be.a('number').that.is.equal(0);
        });

        it('Expects the property "easeOutQuint" to return a number that is equal to 0.', () => {
          expect(Easing.easeOutQuint(0, 0, 100, 100)).to.be.a('number').that.is.equal(0);
        });

        it('Expects the property "easeInOutQuint" to return a number that is equal to 0.', () => {
          expect(Easing.easeInOutQuint(0, 0, 100, 100)).to.be.a('number').that.is.equal(0);
        });

        it('Expects the property "easeInExpo" to return a number that is equal to 0.', () => {
          expect(Easing.easeInExpo(0, 0, 100, 100)).to.be.a('number').that.is.equal(0);
        });

        it('Expects the property "easeOutExpo" to return a number that is equal to 0.', () => {
          expect(Easing.easeOutExpo(0, 0, 100, 100)).to.be.a('number').that.is.equal(0);
        });

        it('Expects the property "easeInOutExpo" to return a number that is equal to 0.', () => {
          expect(Easing.easeInOutExpo(0, 0, 100, 100)).to.be.a('number').that.is.equal(0);
        });

        it('Expects the property "easeInCirc" to return a number that is equal to 0.', () => {
          expect(Easing.easeInCirc(0, 0, 100, 100)).to.be.a('number').that.is.equal(0);
        });

        it('Expects the property "easeOutCirc" to return a number that is equal to 0.', () => {
          expect(Easing.easeOutCirc(0, 0, 100, 100)).to.be.a('number').that.is.equal(0);
        });

        it('Expects the property "easeInOutCirc" to return a number that is equal to 0.', () => {
          expect(Easing.easeInOutCirc(0, 0, 100, 100)).to.be.a('number').that.is.equal(0);
        });

        it('Expects the property "easeInBack" to return a number that is equal to 0.', () => {
          expect(Easing.easeInBack(0, 0, 100, 100)).to.be.a('number').that.is.equal(0);
        });

        it('Expects the property "easeOutBack" to return a number that is equal to 0.', () => {
          expect(Math.round(Easing.easeOutBack(0, 0, 100, 100))).to.be.a('number').that.is.equal(0);
        });

        it('Expects the property "easeInOutBack" to return a number that is equal to 0.', () => {
          expect(Easing.easeInOutBack(0, 0, 100, 100)).to.be.a('number').that.is.equal(0);
        });

        it('Expects the property "easeInElastic" to return a number that is equal to 0.', () => {
          expect(Easing.easeInElastic(0, 0, 100, 100)).to.be.a('number').that.is.equal(0);
        });

        it('Expects the property "easeOutElastic" to return a number that is equal to 0.', () => {
          expect(Easing.easeOutElastic(0, 0, 100, 100)).to.be.a('number').that.is.equal(0);
        });

        it('Expects the property "easeInOutElastic" to return a number that is equal to 0.', () => {
          expect(Easing.easeInOutElastic(0, 0, 100, 100)).to.be.a('number').that.is.equal(0);
        });

        it('Expects the property "easeInBounce" to return a number that is equal to 0.', () => {
          expect(Easing.easeInBounce(0, 0, 100, 100)).to.be.a('number').that.is.equal(0);
        });

        it('Expects the property "easeOutBounce" to return a number that is equal to 0.', () => {
          expect(Easing.easeOutBounce(0, 0, 100, 100)).to.be.a('number').that.is.equal(0);
        });

        it('Expects the property "easeInOutBounce" to return a number that is equal to 0.', () => {
          expect(Easing.easeInOutBounce(0, 0, 100, 100)).to.be.a('number').that.is.equal(0);
        });











      });
    });
  });
};
