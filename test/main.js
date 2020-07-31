// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, no-unused-vars: 0, semi-style: 0 */

'use strict';

// -- Vendor Modules
const { expect } = require('chai')
    ;


// -- Local Modules
const Easing = require('../index.js')
    ;


// -- Local Constants


// -- Local Variables


// -- Main
describe('Test Easing:', () => {
  // Test the lib:
  describe('Test Easing.VERSION and Easing.noConflict:', () => {
    it('Expects Easing.VERSION to return a string.', () => {
      expect(Easing.VERSION).to.be.a('string');
    });
    it('Expects Easing.noConflict to return a function.', () => {
      expect(Easing.noConflict).to.be.a('function');
    });
  });

  describe('Test the Easing methods:', () => {
    //
  });
});
