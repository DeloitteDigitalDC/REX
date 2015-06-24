'use strict';

/**
 * @name router.user
 *
 * @memberof router
 *
 * @description
 * Exposes user endpoints such as logging in and creating
 */
var router = require('express').Router(),
    ctrl   = require('./user.controller');

// account
router.get('/:uid/details/', ctrl.getDetails);
router.put('/:email/password/reset', ctrl.getDetails);
router.post('/login', ctrl.login);
router.post('/create', ctrl.createUser);

// drug cabinet
router.get('/:uid/cabinet/', ctrl.getCabinetDrugs);
router.post('/:uid/cabinet/', ctrl.addCabinetDrug);

module.exports = router;

