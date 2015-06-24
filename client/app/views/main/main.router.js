'use strict';

(function () {

  var __redirect = function(initial, paths, location) {
    var redirect = initial;

    for (var i = 0, len = paths.length; i < len; i++) {
      if (location === paths[i]) {
        redirect = !initial;

        break;
      }
    }

    return redirect;
  };

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
            userDetails: function (user, $cookies, $location, CONST) {
              var location = $location.path();

              if (!$cookies.get('token')) {
                if (__redirect(true, CONST.paths.publicPaths, location)) {
                  $location.path('/');
                }
              }
              else {
                if (__redirect(false, CONST.paths.logInRestricted, location)) {
                  $location.path('/cabinet');
                }

                return user.details();

              }
            }
          }
        });
    });

})();
