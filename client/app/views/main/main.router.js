'use strict';

(function() {
  
  angular
    .module('rex')
    .config(function ($stateProvider) {
      $stateProvider
        .state('main', {
          url: '',
          templateUrl: 'app/views/main/main.view.html',
          controller: 'MainCtrl',
          controllerAs: 'MainCtrl',
          title: 'Main',
          resolve: {
            userDetails: function(user, $cookies, $location) {
              if(!$cookies.get('token')) {

                var redirect = true;

                switch($location.path()) {
                  case '/':
                  case '/login':
                  case '/sign-up':
                    redirect = false;
                    break;
                }

                if(redirect) {
                  $location.path('/');
                }
              }
              else {
                return user.details();
              }
            }
          }
        });
    });

})();
