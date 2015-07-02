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
          title       : 'Drug Details - Pregnancy',
          noScroll    : true
        })
        .state('main.search.drugProfile.pregnancy', {
          url         : '/pregnancy',
          templateUrl : 'app/views/drug-profile/pregnancy/pregnancy.view.html',
          controller  : 'PregnancyCtrl',
          controllerAs: 'pregnancy',
          title       : 'Drug Details - Pregnancy',
          noScroll    : true,
          buttonData  : {
            display: true,
            open   : true,
            link   : 'main.cabinet'
          }
        });
    });

})();
