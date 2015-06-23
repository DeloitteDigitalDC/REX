'use strict';

var fb      = require('../../firebase'),
    request = require('request'),
    config  = require('../../config'),
    url     = config.firebase;

var user = {};

/**
 * @name login
 *
 * @memberof user.controller
 *
 * @description
 * login through firebase
 */
user.login = function (req, res) {
  var uid = req.params.uid;

  var opts = {
    email   : req.body.username,
    password: req.body.password
  };

  fb.login(opts, __success, __error);

  function __success(auth) {
    request(url + '/users/' + uid + '.json?auth=' + auth.token, function (err, user) {
      user.token = auth.token;

      res.send(user);
    });
  }

  function __error(err) {
    res.sendStatus(500).send(err);
  }
};

/**
 * @name getDetails
 *
 * @memberof user.controller
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
 * @memberof user.controller
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

  fb.ref.changePassword(req.body, __changedResponse);

  function __changedResponse(err) {
    if (err) {
      res.sendStatus(500).send(err, 'Error changing password');
    }

    res.sendStatus(200).send('Password has been updated!');
  }
};

/**
 * @name createUser
 *
 * @memberof user.controller
 *
 * @description
 * create a new user
 */
user.createUser = function (req, res) {
  var data = req.body;

  var user = {
    email   : data.username,
    password: data.password
  };

  var details = {
    nickName: data.firstName
  };

  // create user
  fb.ref.createUser(user, function (err, userData) {
    if (err) {
      return res.send(err);
    }

    // if creation is successful log the use in
    fb.login(user, __success, __error);

    // on successful login update the current users data in the users collection
    function __success(authData) {
      request.put(config.firebase + '/users/' + userData.uid + '.json?auth=' + authData.token, {json: details}, function () {
        res.send(authData);
      });
    }

    function __error(error) {
      res.sendStatus(500).send(error);
    }
  });
};

module.exports = user;
