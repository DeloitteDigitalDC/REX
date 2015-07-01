'use strict';

/**
 * @namespace app-server
 *
 * @description
 * node app server using the rex app module
 *
 * @example
 * PORT=node app-server.js
 */
var app    = require('./app'),
    port   = require('./config').port,
    server = require('http').createServer(app);

server.listen(port, function () {
  console.log('listen on port ' + port);
});
