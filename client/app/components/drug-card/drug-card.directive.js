'use strict';

/**
 * @ngdoc directive
 *
 * @name drugCard
 *
 * @description
 * directive for rex
 */
(function() {

  angular
    .module('rex')
    .directive('drugCard', drugCard);

  function drugCard() {
    return {
      restrict: 'EA',
      templateUrl: 'app/components/drug-card/drug-card.directive.html',
      scope: {
        drug : "="
      },
      link: link
    };

    function link($scope) {
      $scope.expired = false;


    }
  }

})();


