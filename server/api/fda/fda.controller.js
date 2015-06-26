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

  qs.search = decodeURI(qs.search);

  qs.api_key = qs.api_key || apiKey;

  var opts = {
    qs       : qs,
    keepAlive: true
  };

  request(fdaUrl + params.type + '/' + params.cat, opts, function (err, response, body) {
    var data, length, uniqueNames = [], uniqueResults = [], currentResult, currentName;

    try {
      data = JSON.parse(body);
    }
    catch(e) {
      data = body;
    }

    length = data.results.length;

    (function unique(i) {
      currentResult = data.results[i];

      try {
        currentName = currentResult.openfda.brand_name[0];
      }
      catch(e) {
        currentName = [];
      }

      if(uniqueNames.indexOf(currentName) < 0) {
        uniqueNames.push(currentName);
        uniqueResults.push(currentResult);
      }

      if(i < length - 1) {
        unique(++i);
      }

    }(0));

    res.send(uniqueResults);
  });
};

module.exports = fda;
