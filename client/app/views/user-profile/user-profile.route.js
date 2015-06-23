'use strict';

(function () {

  angular
    .module('rex')
    .config(function ($stateProvider) {
      $stateProvider
        .state('main.userProfile', {
          url         : '/user-profile',
          templateUrl : 'app/views/user-profile/user-profile.view.html',
          controller  : 'UserProfileCtrl',
          controllerAs: 'userProfile',
          title       : 'User profile',
          headerState : 'loggedIn'
        });
    });

})();
