'use strict';

/**
 * @name router.fda
 *
 * @memberof router
 *
 * @description
 * Endpoint for interacting with fda open data api
 */
var router = require('express').Router(),
    ctrl   = require('./fda.controller');

router.get('/:type/event', ctrl.getEvent);

router.get('/:type/label', ctrl.getLabel);

router.get('/:type/enforcement', ctrl.getEnforcement);

module.exports = router;
