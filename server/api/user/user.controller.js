'use strict';

var firebaseRef = require('../../firebase'),
    request     = require('request'),
    config      = require('../../config');

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
 * @name getDetails
 *
 * @param req
 * @param res
 */
user.getDetails = function (req, res) {
  request(config.firebase + '/users/' + req.params.uid + '.json?auth=' + req.cookies.jwt).pipe(res);
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
    email    : req.body.username,
    password : req.body.password,
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
