// ESLint declarations:
/* global describe */
/* eslint one-var: 0, semi-style: 0 */

'use strict';

// -- Vendor Modules


// -- Local Modules
const Easing  = require('../index')
    , pack    = require('../package.json')
    , testlib = require('./int/lib')
    ;


// -- Local Constants
const libname = 'Easing';


// -- Local Variables


// -- Main
describe('Test Easing:', () => {
  testlib(Easing, libname, pack.version, 'without new');
});
