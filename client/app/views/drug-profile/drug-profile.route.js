'use strict';

(function () {

  angular
    .module('rex')
    .config(function ($stateProvider) {
      $stateProvider
        .state('main.drugProfile', {
          url         : '/drug-profile/:name/:id',
          templateUrl : 'app/views/drug-profile/drug-profile.view.html',
          controller  : 'DrugProfileCtrl',
          controllerAs: 'drugProfile',
          title       : 'Drug profile',
          headerState : 'loggedIn'
        })
        .state('main.search.drugProfile', {
          url         : '/drug-profile/:name/:id',
          templateUrl : 'app/views/drug-profile/drug-profile-search.view.html',
          controller  : 'DrugProfileCtrl',
          controllerAs: 'drugProfile',
          title       : 'Drug profile',
          buttonData  : {
            display: true,
            open   : true,
            link   : 'main.cabinet'
          }
        });
    });

})();
