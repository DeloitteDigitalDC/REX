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
    if (error) {
      return res.sendStatus(500).send(error);
    }
    res.send(authData);
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
  console.log('body', req.body);

  var opts = {
    email   : req.body.username,
    password: req.body.password,
    firstName: req.body.firstName
  };

  firebaseRef.createUser(opts, function (error, userData) {
    if (error) {
      return res.send(error);
    }
    res.send(userData);
  });
};

module.exports = user;
