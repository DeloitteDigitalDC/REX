'use strict';

/**
 * @namespace config
 *
 * @description
 * constants to be used all over the application
 */
var chalk = require('chalk');

var settings;

try {
  settings = require('./settings.json');
}
catch(e) {
  settings = {};
}

module.exports = {
  // url for the fda data
  fdaUrl: 'https://api.fda.gov/',

  // api key for fda data
  fdaKey: (function () {
    var key = process.env.FDA_KEY || settings.FDA_KEY ;

    if (!key) {
      console.log(chalk.magenta('### No API key has been attached. For production please provide and FDA API key. (FDA_KEY=thisisthekeyigotfromfda)'));
    }

    return key;
  })(),

  // the firebase instance to use
  firebase:(function() {
    var fb = process.env.FIREBASE || settings.FIREBASE;

    if(!fb) {
      throw new Error(chalk.bgRed(chalk.black(' No Firebase has been defined. Go to firebase.com and create a free account. ')));
    }

    return fb;
  })(),

  // the location of the front end application
  appDir: __dirname + '/../client',

  port: process.env.PORT || settings.PORT || 3000
};
