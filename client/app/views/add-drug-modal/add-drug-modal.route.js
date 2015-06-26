'use strict';

(function () {

  angular
    .module('rex')
    .config(function ($stateProvider) {
      $stateProvider
        .state('main.search.drugProfile.addDrugModal', {
          url         : '/add-drug-modal',
          templateUrl : 'app/views/add-drug-modal/add-drug-modal.view.html',
          controller  : 'AddDrugModalCtrl',
          controllerAs: 'addDrugModal',
          title       : 'Add drug modal'
        });
    });

})();
