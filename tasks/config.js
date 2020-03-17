/* eslint one-var: 0, semi-style: 0 */

'use strict';

// -- Vendor modules


// -- Local modules
const pack = require('../package.json');


// -- Local constants
const libname = 'Easing'
    , name    = libname.replace(/\s+/g, '').toLowerCase()
    ;


// -- Local variables


// -- Main

module.exports = {
  dist: './_dist',
  libdir: './lib',
  libname,
  parent: 'this',
  noparent: '-noparent',
  index: './index.js',
  distlink: `./_dist/lib/${name}.js`,

  // These are the Javascript files required to build the library.
  /* eslint-disable no-multi-spaces */
  src: [
    // This file must always be the first one as it opens the umd module.
    './src/_header',

    './src/easing.js',

    // This file must always be the last one as it closes the umd module.
    './src/_footer',
  ],
  /* eslint-enable no-multi-spaces */

  get license() {
    return ['/*! ****************************************************************************',
      ` * ${libname} v${pack.version}`,
      ' *',
      ` * ${pack.description}.`,
      ' * (you can download it from npm or github repositories)',
      ` * Copyright (c) ${(new Date()).getFullYear()} ${pack.author.name} <${pack.author.email}> (${pack.author.url}).`,
      ' * Released under the MIT license. You may obtain a copy of the License',
      ' * at: http://www.opensource.org/licenses/mit-license.php).',
      ' * Built from ES6lib v0.0.9.',
      ' * ************************************************************************** */',
      ''].join('\n');
  },
};
