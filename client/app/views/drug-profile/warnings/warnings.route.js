'use strict';

(function () {

  angular
    .module('rex')
    .config(function ($stateProvider) {
      $stateProvider
        .state('main.drugProfile.warnings', {
          url         : '/warnings',
          templateUrl : 'app/views/drug-profile/warnings/warnings.view.html',
          controller  : 'WarningsCtrl',
          controllerAs: 'warnings',
          title       : 'Warnings',
          headerState : 'loggedIn',
          noScroll    : true
        })
        .state('main.search.drugProfile.warnings', {
          url         : '/warnings',
          templateUrl : 'app/views/drug-profile/warnings/warnings.view.html',
          controller  : 'WarningsCtrl',
          controllerAs: 'warnings',
          title       : 'Warnings',
          headerState : 'loggedIn',
          noScroll    : true,
          buttonData  : {
            display: true,
            open   : true,
            link   : 'main.cabinet'
          }
        });
    });

})();
