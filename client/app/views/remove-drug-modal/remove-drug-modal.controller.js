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

  function RemoveDrugModalCtrl( $modalInstance, $scope) {
    var vm = this;

    //vm.drug = drugToRemove;

    vm.modal = $modalInstance;

    $scope.submitDrugForm = function() {
      $modalInstance.close();
    };

  }

})();

