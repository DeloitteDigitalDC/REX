'use strict';


//var router  = require('express').Router();
//var controller = require('./user.controller');


var express = require('express');
var controller = require('./user.controller');

var router = express.Router();

router.post('/login', controller.login);
router.post('/create', controller.createUser);

module.exports = router;

