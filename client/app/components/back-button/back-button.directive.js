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
        state: '='
      },
      link: link
    };

    function link($scope) {
      $scope.goBack = function(){
        if (!$scope.state.name) {
          $state.go('main.cabinet');
        } else {
          $state.go($scope.state.name);
        }
      };
    }
  }

})();


