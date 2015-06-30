'use strict';

(function () {

  angular
    .module('rex')
    .config(function ($stateProvider) {
      $stateProvider
        .state('main', {
          url         : '',
          templateUrl : 'app/views/main/main.view.html',
          controller  : 'MainCtrl',
          controllerAs: 'MainCtrl',
          title       : 'Main',
          resolve     : {
            userDetails: function (user, $cookies, $q) {
              if (!$cookies.get('uid')) {
                var deferred = $q.defer();

                deferred.resolve({});

                return deferred.promise;
              }
              else {
                return user.getDetails();
              }
            }
          }
        });
    });

})();
