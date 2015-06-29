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

  function AddDrugModalCtrl(drugToAdd, $mdDialog) {
    var vm = this;
    var dateTest = /^\d{2}\/\d{2}\/\d{4}$/;

    vm.dateDirty = false;
    vm.dateValid = true;

    vm.drug = drugToAdd;

    vm.checkDate = function () {

      if(vm.drug.expirationDate){
        vm.dateDirty = vm.drug.expirationDate.length > 0;
      }

      if(vm.drug.date instanceof Date) {
        vm.drug.date = moment(vm.drug.expirationDate, 'MM/DD/YYYY');
      }

      vm.dateValid = dateTest.test(vm.drug.expirationDate);
    };

    vm.submit = function () {
      $mdDialog.hide(vm.drug);
    };

    vm.cancel = function () {
      $mdDialog.cancel();
    };
  }

})();

