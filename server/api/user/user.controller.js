'use strict';

var fb      = require('../../firebase'),
    request = require('request'),
    config  = require('../../config'),
    md5     = require('MD5'),
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
      try {
        auth.data = JSON.parse(body);
      }
      catch (e) {
        auth.data = body;
      }

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
  request(config.firebase + '/users/' + req.params.uid + '.json?auth=' + req.cookies.token, function (err, data, body) {
    var convertedData = require('../../utils/convertToArray')(body);

    res.send(convertedData);
  });
};

/**
 * set the details for the authenticated used;
 *
 * @memberof user.controller
 *
 * @param req
 * @param res
 */
user.setDetails = function (req, res) {
  request.patch(config.firebase + '/users/' + req.params.uid + '.json?auth=' + req.cookies.token, {json: req.body}).pipe(res);
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
    nickName    : data.firstName,
    email       : data.username,
    gravatarHash: md5(data.username.toLowerCase())
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
        authData.data    = body;

        res.send(authData);
      });
    }

    function __error(error) {
      res.send(error);
    }
  });
};

/**
 * get cabinet drugs
 *
 * @memberof user.controller
 *
 * @param req
 * @param res
 */
user.getCabinetDrugs = function (req, res) {
  request(config.firebase + '/users/' + req.params.uid + '/drugs/.json?auth=' + req.cookies.token).pipe(res);
};

/**
 *
 * @memberof user.controller
 *
 * @param req
 * @param res
 */
user.addCabinetDrug = function (req, res) {
  request.post(config.firebase + '/users/' + req.params.uid + '/drugs/.json?auth=' + req.cookies.token, {json: req.body}).pipe(res);
};

/**
 * add drug to your cabinet
 *
 * @memberof user.controller
 *
 * @param req
 * @param res
 */
user.deleteCabinetDrug = function (req, res) {
  request.del(config.firebase + '/users/' + req.params.uid + '/drugs/' + req.params.drugId + '.json?auth=' + req.cookies.token).pipe(res);
};

module.exports = user;
