'use strict';
var fb      = require('../../firebase'),
    request = require('request'),
    config  = require('../../config'),
    md5     = require('MD5'),
    url     = config.firebase,
    db      = require('../../db');

var user = {};

/**
 * @memberof user.controller
 *
 * @description
 * login through firebase
 */
//user.login = function (req, res) {
//  var opts = {
//    email   : req.body.username,
//    password: req.body.password
//  };
//
//  fb.login(opts, __success, __error);
//
//  function __success(auth) {
//    request(url + 'users/' + auth.uid + '/.json?auth=' + auth.token, function (err, reslt, body) {
//      try {
//        auth.data = JSON.parse(body);
//      }
//      catch (e) {
//        auth.data = body;
//      }
//
//      auth.success = 'LOGGED_IN';
//
//      res.send(auth);
//    });
//  }
//
//  function __error(err) {
//    res.send(err);
//  }
//};

/**
 * get the details for the authenticated used;
 *
 * @memberof user.controller
 *
 * @param req
 * @param res
 */
user.getDetails = function (req, res) {
  var userObj = {data: {}};
  console.log("getDetails", db);
  db.all('SELECT * FROM drugs WHERE username = ?', req.params.uid, function (err, rows) {
    if (err) {
      res.send(err);
      console.log(err);
    } else {
      userObj.uid        = req.params.uid;
      userObj.data.email = req.params.uid;
      userObj.data.drugs = rows;
      res.send(userObj);
      console.log(userObj);
    }
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
//user.setDetails = function (req, res) {
//  request.patch(config.firebase + '/users/' + req.params.uid + '.json?auth=' + req.cookies.token, {json: req.body}).pipe(res);
//};

/**
 * @name createUser
 *
 * @memberof user.controller
 *
 * @description
 * create a new user
 */
//user.createUser = function (req, res) {
//  var data = req.body;
//
//  var user = {
//    email   : data.username,
//    password: data.password
//  };
//
//  var details = {
//    nickName    : data.firstName,
//    email       : data.username,
//    gravatarHash: md5(data.username.toLowerCase())
//  };
//
//  // create user
//  fb.ref.createUser(user, function (err, userData) {
//    if (err) {
//      return res.send(err);
//    }
//
//    // if creation is successful log the use in
//    fb.login(user, __success, __error);
//
//    // on successful login update the current users data in the users collection
//    function __success(authData) {
//      request.put(config.firebase + '/users/' + userData.uid + '.json?auth=' + authData.token, {json: details}, function (err, data, body) {
//        authData.success = 'USER_CREATED';
//        authData.data    = body;
//
//        res.send(authData);
//      });
//    }
//
//    function __error(error) {
//      res.send(error);
//    }
//  });
//};

/**
 * get cabinet drugs
 *
 * @memberof user.controller
 *
 * @param req
 * @param res
 */
//user.getCabinetDrugs = function (req, res) {
//  request(config.firebase + '/users/' + req.params.uid + '/drugs/.json?auth=' + req.cookies.token).pipe(res);
//};

user.getCabinetDrugs = function (req, res) {
  request(config.firebase + '/users/' + req.params.uid + '/drugs/.json?auth=' + req.cookies.token).pipe(res);
  db.all('SELECT * FROM drugs WHERE username = ?', req.params.uid, function (err, rows) {
    if (err) {
      res.send(err);
      console.log(err);
    } else {
      res.send(rows);
      console.log(rows);
    }
  });

};

/**
 *
 * @memberof user.controller
 *
 * @param req
 * @param res
 */
user.addCabinetDrug = function (req, res) {
  db.run('INSERT INTO drugs (id, username, name) VALUES (?,?,?);', [req.body.id, req.params.uid, req.body.name],
         function (err, rows) {
           if (err) {
             res.send(err)
           } else {
             res.status(201).send('Drug ' + req.body.name + ' Created');
           }
         });
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
  //add delete function here
};

module.exports = user;
