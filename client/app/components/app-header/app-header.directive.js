'use strict';

/**
 * @ngdoc directive
 *
 * @name appHeader
 *
 * @description
 * directive for rex
 */
(function () {

  angular
    .module('rex')
    .directive('appHeader', appHeader);

  function appHeader($state) {
    return {
      restrict: 'EA',
      templateUrl: 'app/components/app-header/app-header.directive.html',
      scope: {
        headerOptions: '=',
        user: '='
      },
      link: link
    };

    function link(scope) {
      scope.homeRoute = homeRoute();
      scope.goTo = goTo;

      /**
       *
       * If the user is logged in take them to the cabinet else go to the home page.
       *
       * @memberof appHeader
       * @returns {String} route name for use in ui-sref directive
       */
      function homeRoute() {
        if(typeof(scope.user) !== 'undefined' && scope.user.data) {
          return 'main.cabinet';
        }
        else {
          return 'main.home';
        }
      }

      /**
       * Go to the specified link
       *
       * @memberof appHeader
       */
      function goTo() {
        $state.go(scope.headerOptions.link);
      }
    }
  }

})();


