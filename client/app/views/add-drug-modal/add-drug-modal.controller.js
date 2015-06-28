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

    vm.drug = drugToAdd;

    vm.submit = function () {
      $mdDialog.hide(vm.drug);
    };

    vm.cancel = function () {
      $mdDialog.cancel();
    };
  }

})();

