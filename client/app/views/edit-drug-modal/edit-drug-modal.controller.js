'use strict';

/**
 * @ngdoc controller
 *
 * @name EditDrugModal
 *
 * @description
 * Controller for rex
 */
(function() {

  angular
    .module('rex')
    .controller('EditDrugModalCtrl', EditDrugModalCtrl);

  function EditDrugModalCtrl(drugToEdit, $mdDialog) {
    var vm = this;

    vm.drug = drugToEdit;
    vm.cancel = $mdDialog.cancel;

    console.log(vm.drug);
  }

})();

