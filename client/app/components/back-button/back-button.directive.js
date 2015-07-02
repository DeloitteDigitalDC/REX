'use strict';

/**
 * @ngdoc directive
 *
 * @name backButton
 *
 * @description
 * back button to be used in the drug profile
 *
 * @example <back-button></back-button>
 */
(function() {

  angular
    .module('rex')
    .directive('backButton', backButton);

  function backButton($state) {
    return {
      restrict: 'EA',
      templateUrl: 'app/components/back-button/back-button.directive.html',
      scope: {},
      link: link
    };

    function link(scope) {
      scope.goBack = goBack;

      /**
       * Go back based on the current state
       *
       * @memberof backButton
       */
      function goBack(){
        if ($state.includes('main.search.**')) {
          $state.go('main.search.searchResults');
        }
        else {
          $state.go('main.cabinet');
        }
      }
    }
  }

})();


