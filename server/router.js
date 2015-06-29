'use strict';

/**
 * @namespace router
 *
 * @description
 * The main router. Include all routes here
 *
 * @type {config|exports|module.exports}
 */
var config = require('./config');

module.exports = function router(app, db) {
  app.use('/fda', require('./api/fda/'));
  app.use('/user', require('./api/user/')(db));

  app.get('/*', function (req, res) {
    res.sendFile('index.html', { root: config.appDir });
  });
};
