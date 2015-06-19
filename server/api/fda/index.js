/**
 * @name router.fda
 *
 * @memberof router
 *
 * @description
 * Endpoint for interacting with fda open data api
 */
var router  = require('express').Router(),
    request = require('request'),
    config  = require('../../config'),
    fdaUrl  = config.fdaUrl,
    apiKey  = config.fdaKey;

/**
 * @name getFDA
 *
 * @memberof router.fda
 *
 * @description
 * A simple proxy for the FDA api data that also attaches the FDA api key
 */
router.get('/:type/:cat', function getFDA(req, res) {
  var qs = req.query;

  qs.api_key = apiKey;

  var opts = {
    qs: qs,
    keepAlive: true
  };

  request(fdaUrl + req.params.type + '/' + req.params.cat, opts).pipe(res);
});

module.exports = router;
