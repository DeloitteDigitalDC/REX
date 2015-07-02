'use strict';

/**
 * @name router.fda
 *
 * @memberof router
 *
 * @description
 * Endpoint for interacting with fda open data api
 *
 * @example
 * GET /fda/drug/event
 *
 * @see fda.controller
 */
module.exports = function(auth) {
  var router = require('express').Router(),
      ctrl   = require('./fda.controller');

  router.get('/:type/event', auth.ensureAuthenticated,  ctrl.getEvent);

  router.get('/:type/label', auth.ensureAuthenticated, ctrl.getLabel);

  router.get('/:type/enforcement', auth.ensureAuthenticated, ctrl.getEnforcement);

  return router;
};
