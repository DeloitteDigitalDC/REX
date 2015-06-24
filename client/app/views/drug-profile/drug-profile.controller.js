'use strict';

/**
 * @ngdoc controller
 *
 * @name rex.controller:DrugProfile
 *
 * @description
 * Controller for rex
 */
(function() {

  angular
    .module('rex')
    .controller('DrugProfileCtrl', DrugProfileCtrl);

  function DrugProfileCtrl($stateParams, drug) {
    var vm = this;

    vm.drugName = $stateParams.name;


  }

})();

