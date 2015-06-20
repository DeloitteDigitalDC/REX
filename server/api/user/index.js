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

router.post('/login', ctrl.login);
router.post('/create', ctrl.createUser);

module.exports = router;

