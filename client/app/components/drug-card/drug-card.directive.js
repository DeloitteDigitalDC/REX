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

  function drugCard($state) {
    return {
      restrict: 'EA',
      templateUrl: 'app/components/drug-card/drug-card.directive.html',
      scope: {
        drug : "="
      },
      link: link
    };

    function link($scope) {

      /**
       * @name expired
       *
       * @memberof drugCard
       *
       * @description
       * user moment.js to determine if drug is expired and set $scope variable to we can assign a class in the view
       */
      $scope.expired = moment($scope.drug.expirationDate).isBefore(moment());

      /**
       * @name login
       *
       * @memberof drugCard
       *
       * @description
       * when a user clicks on a drug card, go to that drug's detailed page
       */
      $scope.goToDetails = function(){
        $state.go("main.drugProfile", {id:$scope.drug.id, name:$scope.drug.name})
      }

    }
  }

})();


