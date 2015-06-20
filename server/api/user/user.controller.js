'use strict';

var firebaseRef = require('../../firebase');

var user = {};

/**
 * @name router.user.login
 *
 * @memberof router.user
 *
 * @description
 * login through firebase
 */
user.login = function (req, res) {
  var opts = {
    email   : req.body.username,
    password: req.body.password
  };

  firebaseRef.authWithPassword(opts, function (error, authData) {
    if (error) { return res.send(500, error) }

    res.json('Authenticated successfully with payload:', authData);
  });
  
};

/**
 * @name router.user.createUser
 *
 * @memberof router.user
 *
 * @description
 * create a new user
 */
user.createUser = function (req, res) {
  var opts = {
    email   : req.body.username,
    password: req.body.password
  };

  firebaseRef.createUser(opts, function (error, userData) {
    if (error) { return res.send(500, error) }

    res.json('Successfully created user account with uid:', userData.uid);
  });
};

module.exports = user;