'use strict';

var _ = require('lodash');
var firebaseRef = require('../../firebase');

exports.login = function (req, res) {
  console.log("Request", req, req.body);
  firebaseRef.authWithPassword({
    email: req.body.username,
    password: req.body.password
  }, function (error, authData) {
    if (error) {
      console.log("Login Failed!", error);
      return handleError(res, error);
    } else {
      console.log("Authenticated successfully with payload:", authData);
      res.json("Authenticated successfully with payload:", authData);
    }
  });
};

exports.createUser = function (req, res) {
  firebaseRef.createUser({
    email: req.body.username,
    password: req.body.password
  }, function (error, userData) {
    if (error) {
      console.log("Error creating user:", error);
      res.json(error);
    } else {
      console.log("Successfully created user account with uid:", userData.uid);
      res.json("Successfully created user account with uid:", userData.uid);
    }
  });
}

function handleError(res, err) {
  return res.send(500, err);
}
