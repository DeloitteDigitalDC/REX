/**
 * @module router
 *
 * @description
 * The main router. Include all routes here
 *
 * @type {config|exports|module.exports}
 */
var config = require('./config');

module.exports = function router(app) {
  app.use('/fda', require('./api/fda/'));
  app.use('/user', require('./api/user/'));

  app.get('/*', function (req, res) {
    res.sendFile('index.html', { root: config.appDir });
  });
};
