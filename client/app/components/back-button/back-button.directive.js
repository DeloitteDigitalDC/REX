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
        //TODO: change this to check for search state first when we implement search
        if ($state.includes('main.drugProfile.**')) {
          $state.go('main.cabinet');
        }
      };
    }
  }

})();


