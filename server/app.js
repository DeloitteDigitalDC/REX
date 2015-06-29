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
    config        = require('./config'),
    sqlite3       = require('sqlite3'),
    db            = new sqlite3.Database('./server/auth/database.sqlite3');


var app = express(); // create the express app

app.use(express.static(config.appDir)); // use the static app directory
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

var auth = require('./auth')(app, db);

app.get('/authed', auth.ensureAuthenticated, function (req, res) {
  res.send();
});

require('./router')(app, db); // include the router

module.exports = app;
