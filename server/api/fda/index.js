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

router.get('/:type/:cat', ctrl.getFDA);

module.exports = router;
