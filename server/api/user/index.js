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

router.get('/:uid/details/', ctrl.getDetails);
router.put('/:email/password/reset', ctrl.getDetails);

router.post('/login', ctrl.login);
router.post('/create', ctrl.createUser);

module.exports = router;

