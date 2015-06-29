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

//from before:
  //router.patch('/:uid/details/', ctrl.setDetails);
//router.post('/login', ctrl.login);
//router.post('/create', ctrl.createUser);

  router.get('/:uid/details/', auth.ensureAuthenticated, ctrl.getDetails);
  router.get('/:uid/cabinet/', auth.ensureAuthenticated, ctrl.getCabinetDrugs);
  router.post('/:uid/cabinet/', auth.ensureAuthenticated, ctrl.addCabinetDrug);
  router.delete('/:uid/cabinet/:drugId', auth.ensureAuthenticated, ctrl.deleteCabinetDrug);

  //router.get('/:uid/details/', ctrl.getDetails);
  //router.get('/:uid/cabinet/', ctrl.getCabinetDrugs);
  //router.post('/:uid/cabinet/', ctrl.addCabinetDrug);
  //router.delete('/:uid/cabinet/:drugId', ctrl.deleteCabinetDrug);

  return router;
};

