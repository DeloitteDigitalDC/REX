'use strict';

/**
 * @namespace rex
 *
 * @description
 * The main app module for rex. Use this app to create your server. Exposes the application for use.
 *
 * @example
 * var server = require('http').createServer(require('./app'));
 */
var express       = require('express'),
    bodyParser    = require('body-parser'),
    cookieParser  = require('cookie-parser'),
    config        = require('./config');


var app = express(); // create the express app

app.use(express.static(config.appDir)); // use the static app directory
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

var auth = require('./auth')(app);

require('./router')(app, auth); // include the router

module.exports = app;
