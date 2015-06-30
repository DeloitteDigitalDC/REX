'use strict';

(function () {

  angular
    .module('rex')
    .config(function ($stateProvider) {
      $stateProvider
        .state('main.drugProfile.uses', {
          url         : '/uses',
          templateUrl : 'app/views/drug-profile/uses/uses.view.html',
          controller  : 'UsesCtrl',
          controllerAs: 'uses',
          title       : 'Drug Details - Uses',
          noScroll    : true
        })
        .state('main.search.drugProfile.uses', {
          url         : '/uses',
          templateUrl : 'app/views/drug-profile/uses/uses.view.html',
          controller  : 'UsesCtrl',
          controllerAs: 'uses',
          title       : 'Drug Details - Uses',
          noScroll    : true,
          buttonData  : {
            display: true,
            open   : true,
            link   : 'main.cabinet'
          }
        });
    });

})();
