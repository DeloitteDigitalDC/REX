'use strict';

/**
 * @namespace router
 *
 * @description
 * The main router. Include all routes here
 *
 * @example
 * require('./router')(app, auth)
 */
var config = require('./config');

module.exports = function router(app, auth) {
  app.use('/fda', require('./api/fda/')(auth));
  app.use('/user', require('./api/user/')(auth));

  app.get('/*', function (req, res) {
    res.sendFile('index.html', { root: config.appDir });
  });
};
