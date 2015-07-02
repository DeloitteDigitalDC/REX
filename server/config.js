'use strict';

/**
 * @namespace config
 *
 * @description
 * constants to be used all over the application
 */
var chalk = require('chalk'),
    path = require('path'),
    settings;


try {
  settings = require(path.resolve(__dirname,'settings.json'));
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

  // the location of the front end application
  appDir: __dirname + '/../client',

  port: process.env.PORT || settings.PORT || 3000,

  sqliteLocation: process.env.SQLITELOCATION || settings.SQLITELOCATION || path.resolve(__dirname, 'db','database.sqlite3')
};
