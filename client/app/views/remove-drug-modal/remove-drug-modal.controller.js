'use strict';

/**
 * @ngdoc controller
 *
 * @name rex.controller:RemoveDrugModal
 *
 * @description
 * Controller for rex
 */
(function() {

  angular
    .module('rex')
    .controller('RemoveDrugModalCtrl', RemoveDrugModalCtrl);

  function RemoveDrugModalCtrl( $modalInstance) {
    var vm = this;

    vm.modal = $modalInstance;

    vm.submitDrugForm = function() {
      $modalInstance.close();
    };

    vm.cancel = function(){
      $modalInstance.dismiss();
    }

  }

})();

