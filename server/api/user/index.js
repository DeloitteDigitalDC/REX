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


  router.get('/:uid/details/', auth.ensureAuthenticated, ctrl.getDetails);
  router.get('/:uid/cabinet/', auth.ensureAuthenticated, ctrl.getCabinetDrugs);
  router.post('/:uid/cabinet/', auth.ensureAuthenticated, ctrl.addCabinetDrug);
  router.delete('/:uid/cabinet/:drugId', auth.ensureAuthenticated, ctrl.deleteCabinetDrug);
  router.patch('/:uid/details/', auth.ensureAuthenticated, ctrl.setDetails);

  return router;
};

