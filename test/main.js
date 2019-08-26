// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, no-unused-vars: 0, semi-style: 0 */

'use strict';

// -- Node modules
const { expect } = require('chai')
    ;

// -- Local modules
const Easing = require('../index.js')
    ;

// -- Local constants

// -- Local variables


// -- Main
describe('Test JEasing:', () => {
  // Test the lib:
  describe('Test JEasing.VERSION and JEasing.noConflict:', () => {
    it('Expects JEasing.VERSION to return a string.', () => {
      expect(Easing.VERSION).to.be.a('string');
    });
    it('Expects Easing.noConflict to return a function.', () => {
      expect(Easing.noConflict).to.be.a('function');
    });
  });

  describe('Test the JEasing methods:', () => {
    //
  });
});
