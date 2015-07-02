'use strict';

/**
 * @namespace fda.controller
 */

var request = require('request'),
    config  = require('../../config'),
    utils   = require('../../utils'),
    fdaUrl  = config.fdaUrl,
    apiKey  = config.fdaKey;

var fda = {};

/**
 * Get event data for and of the fda categories
 *
 * @memberof fda.controller
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response objects
 *
 * @example
 * router.get('/:type/event', auth.ensureAuthenticated,  ctrl.getEvent);
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
    res.send(utils.confirmJSON(body));
  });
};

/**
 * Get event data for and of the fda categories
 *
 * @memberof fda.controller
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 *
 * @example
 * router.get('/:type/label', auth.ensureAuthenticated,  ctrl.getLabel);
 */
fda.getLabel = function getLabel(req, res) {
  var qs     = req.query,
      params = req.params,
      flags  = [];

  qs.search  = decodeURI(qs.search);
  qs.alerts  = qs.alerts || '';
  qs.api_key = qs.api_key || apiKey;

  var opts = {
    qs       : qs,
    keepAlive: true
  };

  flags = opts.qs.alerts.split(':');

  delete opts.qs.alerts;

  // Make the request for the label information
  request(fdaUrl + params.type + '/label.json', opts, function (err, response, body) {
    var data = utils.confirmJSON(body);

    // See if any alerts need to be checked
    flags.forEach(function (flag) {
      try {
        require('./alerts/' + flag)(data.results);
      }
      catch (e) {
      }
    });

    res.send(data);
  });
};

/**
 * Get event data for and of the fda categories
 *
 * @memberof fda.controller
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 *
 * @example
 * router.get('/:type/enforcement', auth.ensureAuthenticated,  ctrl.getEnforcement);
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
    res.send(utils.confirmJSON(body));
  });
};


module.exports = fda;
