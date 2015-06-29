'use strict';

var request = require('request'),
    config  = require('../../config'),
    fdaUrl  = config.fdaUrl,
    apiKey  = config.fdaKey;

var fda = {};

/**
 * @memberof fda.controller
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 *
 * @description
 * Get event data for and of the fda categories
 */
fda.getEvent = function getEvent(req, res) {
  var qs     = req.query,
      params = req.params;

  qs.api_key = qs.api_key || apiKey;

  var opts = {
    qs       : qs,
    keepAlive: true
  };

  request(fdaUrl + params.type + '/event.json', opts, function (err, response, body) {
    var data;

    try {
      data = JSON.parse(body);
    }
    catch (e) {
      data = body;
    }

    res.send(data);
  });
};

/**
 * @memberof fda.controller
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 *
 * @description
 * Get label information from open FDA data. Dedupe fda data for cleaner results
 */
fda.getLabel = function getLabel(req, res) {
  var qs     = req.query,
      params = req.params,
      flags = [];

  qs.search = decodeURI(qs.search);
  qs.alerts = qs.alerts || '';
  qs.api_key = qs.api_key || apiKey;

  var opts = {
    qs       : qs,
    keepAlive: true
  };

  flags = opts.qs.alerts.split(':');

  delete opts.qs.alerts;

  // Make the request for the label information
  request(fdaUrl + params.type + '/label.json', opts, function (err, response, body) {
    var data;

    // Make sure that the data coming back is JSON
    try {
      data = JSON.parse(body);
    }
    catch (e) {
      data = body;
    }

    flags.forEach(function (flag) {
      try {
        require('./alerts/' + flag)(data.results);
      }
      catch(e) {}
    });

    res.send(data);
  });
};

/**
 * @memberof fda.controller
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 *
 * @description
 * Get event data for and of the fda categories
 */
fda.getEnforcement = function getEnforcement(req, res) {
  var qs     = req.query,
      params = req.params;

  qs.search = decodeURI(qs.search);

  qs.api_key = qs.api_key || apiKey;

  var opts = {
    qs       : qs,
    keepAlive: true
  };

  request(fdaUrl + params.type + '/enforcement.json', opts, function (err, response, body) {
    var data;

    try {
      data = JSON.parse(body);
    }
    catch (e) {
      data = body;
    }

    res.send(data);
  });
};


module.exports = fda;
