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
          title       : 'Uses',
          headerState : 'loggedIn'
        });
    });

})();
