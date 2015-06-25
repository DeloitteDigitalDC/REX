'use strict';

(function () {

  angular
    .module('rex')
    .config(function ($stateProvider) {
      $stateProvider
        .state('main.drugProfile.recalls', {
          url         : '/recalls',
          templateUrl : 'app/views/drug-profile/recalls/recalls.view.html',
          controller  : 'RecallsCtrl',
          controllerAs: 'recalls',
          title       : 'Recalls',
          headerState : 'loggedIn'
        })
        .state('main.search.drugProfile.recalls', {
          url         : '/recalls',
          templateUrl : 'app/views/drug-profile/recalls/recalls.view.html',
          controller  : 'RecallsCtrl',
          controllerAs: 'recalls',
          title       : 'Recalls',
          buttonData  : {
            display: true,
            open   : true,
            link   : 'main.cabinet'
          }
        });
    });

})();
