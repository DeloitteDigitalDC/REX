'use strict';

/**
 * @ngdoc controller
 *
 * @name AddDrugModal
 *
 * @description
 * Controller for rex
 */
(function() {

  angular
    .module('rex')
    .controller('AddDrugModalCtrl', AddDrugModalCtrl);

  function AddDrugModalCtrl(drugToAdd, $modalInstance) {
    var vm = this;

    vm.drug = drugToAdd;

    vm.modal = $modalInstance;

    vm.submitDrugForm = function() {
      $modalInstance.close(vm.drug);
    };
  }

})();

