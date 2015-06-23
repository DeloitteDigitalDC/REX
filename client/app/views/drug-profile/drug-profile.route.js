'use strict';

(function () {

  angular
    .module('rex')
    .config(function ($stateProvider) {
      $stateProvider
        .state('main.drugProfile', {
          url         : '/drug-profile/:id/:name',
          templateUrl : 'app/views/drug-profile/drug-profile.view.html',
          controller  : 'DrugProfileCtrl',
          controllerAs: 'drugProfile',
          title       : 'Drug profile',
          headerState : 'loggedIn'
        });
    });

})();
