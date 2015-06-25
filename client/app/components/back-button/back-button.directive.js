'use strict';

/**
 * @ngdoc directive
 *
 * @name backButton
 *
 * @description
 * directive for rex
 */
(function() {

  angular
    .module('rex')
    .directive('backButton', backButton);

  function backButton($state) {
    return {
      restrict: 'EA',
      templateUrl: 'app/components/back-button/back-button.directive.html',
      scope: {
      },
      link: link
    };

    function link($scope) {
      $scope.goBack = function(){
        if ($state.includes('main.search.**')) {
          $state.go('main.search.searchResults');
        } else {
          $state.go('main.cabinet');
        }
      };
    }
  }

})();


