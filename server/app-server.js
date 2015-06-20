/**
 * @namespace app-server
 *
 * @description
 * node app server using the rex app module
 *
 * @type {app|exports|module.exports}
 */
var app    = require('./app'),
    server = require('http').createServer(app);

server.listen(3000, function() {
  console.log('listen on port 3000');
});
