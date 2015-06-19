'use strict';

/**
 * @ngdoc controller
 *
 * @name HomeCtrl
 *
 * @description
 * Controller for mediq
 */
(function() {

  angular
    .module('mediq')
    .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl(drug) {

    drug.events({ search: 'patient.patientonsetage:56', limit: 25 }).success(function (data) {
      console.log(data);
    });

  }

})();
