/**
 * @namespace fda
 *
 * @example require('./fda')
 */

var request = require('request'),
    config  = require('../../config'),
    fdaUrl  = config.fdaUrl,
    apiKey  = config.fdaKey;

/**
 * @name getFDA
 *
 * @memberof fda
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 *
 * @description
 * A simple proxy for the FDA api data that also attaches the FDA api key
 */
module.exports.getFDA = function getFDA(req, res) {
  var qs = req.query;

  qs.api_key = qs.api_key || apiKey;

  var opts = {
    qs: qs,
    keepAlive: true
  };

  request(fdaUrl + req.params.type + '/' + req.params.cat, opts).pipe(res);
};