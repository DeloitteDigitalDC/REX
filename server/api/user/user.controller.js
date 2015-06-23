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
 *
 * @description
 * get the details for the authenticated used;
 */
user.getDetails = function (req, res) {
  request(config.firebase + '/users/' + req.params.uid + '.json?auth=' + req.cookies.jwt).pipe(res);
};

/**
 * @name getDetails
 *
 * @param req
 * @param res
 *
 * @description
 * reset a password
 */
user.resetPassword = function (req, res) {
  //{
  //  email: "bobtony@firebase.com",
  //  oldPassword: "correcthorsebatterystaple",
  //  newPassword: "shinynewpassword"
  //}

  firebaseRef.changePassword(req.body, _changedResponse);

  function _changedResponse(err) {
    if(err) {
      res.sendStatus(500).send(err, 'Error changing password');
    }

    res.sendStatus(200).send('Password has been updated!');
  }
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
  var data = req.body;

  var user = {
    email    : data.username,
    password : data.password
  };

  var details = {
    nickName: data.firstName
  };

  // create user
  firebaseRef.createUser(user, function (error, userData) {
    if (error) {
      return res.send(error);
    }

    firebaseRef.authWithPassword(user, function (error, authData) {
      if (error) {
        return res.sendStatus(500).send(error);
      }

      request.put(config.firebase + '/users/' + userData.uid + '.json?auth=' + authData.token, { json: details }, function () {
        res.send(authData);
      });
    });
  });
};

module.exports = user;
