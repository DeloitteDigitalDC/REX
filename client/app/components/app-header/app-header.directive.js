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
      scope.buttonOpen = false;

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


