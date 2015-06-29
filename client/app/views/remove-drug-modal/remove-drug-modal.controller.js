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

  function RemoveDrugModalCtrl($mdDialog) {
    var vm = this;

    vm.submitDrugForm = function() {
      $mdDialog.hide('confirm');
    };

    vm.cancel = function(){
      $mdDialog.cancel();
    };

  }

})();

