'use strict';

/**
 * @name router.user
 *
 * @memberof router
 *
 * @description
 * Exposes user endpoints such as logging in and creating
 */


module.exports = function(auth) {
  var router = require('express').Router(),
      ctrl   = require('./user.controller');

//TODO: authenticate all the routes
// account

  router.get('/:uid/details/', auth.ensureAuthenticated, ctrl.getDetails);
//router.patch('/:uid/details/', ctrl.setDetails);
//router.post('/login', ctrl.login);
//router.post('/create', ctrl.createUser);

// drug cabinet
  router.get('/:uid/cabinet/', auth.ensureAuthenticated, ctrl.getCabinetDrugs);
  router.post('/:uid/cabinet/', auth.ensureAuthenticated, ctrl.addCabinetDrug);
  router.delete('/:uid/cabinet/:drugId', auth.ensureAuthenticated, ctrl.deleteCabinetDrug);

  return router;
};

