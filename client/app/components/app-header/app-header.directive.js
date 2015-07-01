'use strict';

/**
 * @ngdoc directive
 *
 * @name appHeader
 *
 * @description
 * The main header for the application
 *
 * @property {Object} user - the currently logged in user
 * @property {Object} headerOptions - options object for the header, set by the view state
 *
 * @example <app-header user="main.user" headerOptions="main.headerOptions"></app-header>
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
      scope.goHome = goHome;
      scope.goTo = goTo;

      /**
       * If the user is logged in take them to the cabinet else go to the home page.
       *
       * @memberof appHeader
       */
      function goHome() {
        if(scope.user.data) {
          $state.go('main.cabinet');
        }
        else {
          $state.go('main.home');
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


