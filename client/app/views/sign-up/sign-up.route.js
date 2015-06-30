'use strict';

(function () {

  angular
    .module('rex')
    .config(function ($stateProvider) {
      $stateProvider
        .state('main.signUp', {
          url           : '/sign-up',
          templateUrl   : 'app/views/sign-up/sign-up.view.html',
          controller    : 'SignUpCtrl',
          controllerAs  : 'signUp',
          title         : 'Sign Up',
          public        : true
        });
    });
})();
