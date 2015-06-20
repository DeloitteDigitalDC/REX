'use strict';

/**
 * @namespace config
 *
 * @description
 * constants to be used all over the application
 */
var chalk = require('chalk');

var config = {

  // url for the fda data
  fdaUrl: 'https://api.fda.gov/',

  // api key for fda data
  fdaKey: (function () {
    var key = process.env.FDA_KEY;

    if (!key) {
      console.log(chalk.magenta('### No API key has been attached. For production please provide and FDA API key. (FDA_KEY=thisisthekeyigotfromfda)'));
    }

    return key;

  })(),

  // the firebase instance to use
  firebase: process.env.FIREBASE,

  // the location of the front end application
  appDir: __dirname + '/../client',

  port: process.env.PORT || 3000
};

module.exports = config;
