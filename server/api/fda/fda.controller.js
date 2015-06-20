'use strict';

var request = require('request'),
    config  = require('../../config'),
    fdaUrl  = config.fdaUrl,
    apiKey  = config.fdaKey;

var fda = {};

/**
 * @name getFDA
 *
 * @memberof router.fda
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 *
 * @description
 * A simple proxy for the FDA api data that also attaches the FDA api key
 */
fda.getFDA = function getFDA(req, res) {
  var qs     = req.query,
      params = req.params;

  qs.api_key = qs.api_key || apiKey;

  var opts = {
    qs       : qs,
    keepAlive: true
  };

  request(fdaUrl + params.type + '/' + params.cat, opts).pipe(res);
};

module.exports = fda;