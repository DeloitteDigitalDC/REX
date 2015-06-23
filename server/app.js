/**
 * @namespace rex
 *
 * @description
 * The main app module for rex. Use this app to create your server. Exposes the application for use.
 *
 * @example
 * var server = require('http').createServer(require('./app'));
 */
var express    = require('express'),
    bodyparser = require('body-parser'),
    config     = require('./config');

var app = express(); // create the express app

app.use(express.static(config.appDir)); // use the static app directory
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.use(require('cookie-parser')());

require('./router')(app); // include the router

module.exports = app;
