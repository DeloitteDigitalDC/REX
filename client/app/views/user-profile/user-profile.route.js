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
          controllerAs: 'UserProfile',
          title       : 'My Profile'
        });
    });

})();
