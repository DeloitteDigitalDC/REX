'use strict';

var Firebase     = require('firebase'),
    firebasePath = require('./config').firebase,
    firebaseRef  = new Firebase(firebasePath);

var fb = {};

// Reference to the firebase reference
fb.ref = firebaseRef;

/**
 * @name login
 *
 * @memberof firebase
 *
 * @param {Object} opts
 * @param {Function} success
 * @param {Function} error
 */
fb.login = function (opts, success, error) {
  success = success || function () {};
  error   = error || function () {};

  firebaseRef.authWithPassword(opts, function (err, authData) {
    if (err) {
      return error(err);
    }

    success(authData);
  });
};

module.exports = fb;

