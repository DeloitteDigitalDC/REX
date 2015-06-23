'use strict';

(function () {

  angular
    .module('rex')
    .config(function ($stateProvider) {
      $stateProvider
        .state('main.drugProfile.pregnancy', {
          url         : '/pregnancy',
          templateUrl : 'app/views/drug-profile/pregnancy/pregnancy.view.html',
          controller  : 'PregnancyCtrl',
          controllerAs: 'pregnancy',
          title       : 'Pregnancy',
          headerState : 'loggedIn'
        });
    });

})();
