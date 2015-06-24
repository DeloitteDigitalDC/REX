'use strict';

var fb      = require('../../firebase'),
    request = require('request'),
    config  = require('../../config'),
    url     = config.firebase;

var user = {};

/**
 * @memberof user.controller
 *
 * @description
 * login through firebase
 */
user.login = function (req, res) {
  var opts = {
    email   : req.body.username,
    password: req.body.password
  };

  fb.login(opts, __success, __error);

  function __success(auth) {
    request(url + 'users/' + auth.uid + '/.json?auth=' + auth.token, function (err, reslt, body) {
      auth.data = JSON.parse(body);

      auth.success = 'LOGGED_IN';

      res.send(auth);
    });
  }

  function __error(err) {
    res.send(err);
  }
};

/**
 * get the details for the authenticated used;
 *
 * @memberof user.controller
 *
 * @param req
 * @param res
 */
user.getDetails = function (req, res) {
  request(config.firebase + '/users/' + req.params.uid + '.json?auth=' + req.cookies.token).pipe(res);
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
      res.send(err, 'Error changing password');
    }

    res.send('Password has been updated!');
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
    nickName: data.firstName,
    //Sample Seed Data
    drugs: {
      0: {
        name: 'Advil',
        expirationDate: '1/1/2015'
      },
      1: {
        name: 'Niacin',
        expirationDate: '1/1/2018'
      }
    }
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
      request.put(config.firebase + '/users/' + userData.uid + '.json?auth=' + authData.token, {json: details}, function (err, data, body) {
        authData.success = 'USER_CREATED';
        authData.data = body;

        res.send(authData);
      });
    }

    function __error(error) {
      res.send(error);
    }
  });
};

/**
 * @name getCabinetDrugs
 *
 * @memberof user.controller
 *
 * @param req
 * @param res
 */
user.getCabinetDrugs = function (req, res) {
  request(config.firebase + '/users/' + req.params.uid + '/cabinet/.json?auth=' + req.cookies.jwt).pipe(res);
};

/**
 * @name addCabinetDrug
 *
 * @memberof user.controller
 *
 * @param req
 * @param res
 */
user.addCabinetDrug = function (req, res) {
  request.post(config.firebase + '/users/' + req.params.uid + '/cabinet/.json?auth=' + req.cookies.jwt, req.body).pipe(res);
};

module.exports = user;
