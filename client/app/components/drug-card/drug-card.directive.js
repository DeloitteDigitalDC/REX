'use strict';

/**
 * @ngdoc directive
 *
 * @name drugCard
 *
 * @description
 * directive for rex
 */
(function () {

  angular
    .module('rex')
    .directive('drugCard', drugCard);

  function drugCard($state) {
    return {
      restrict   : 'EA',
      templateUrl: 'app/components/drug-card/drug-card.directive.html',
      scope      : {
        drug: '=',
        key: '='
      },
      link       : link
    };

    function link($scope) {

      if($scope.drug){
        $scope.expired = checkExpired($scope.drug.expirationDate);
      }


      /**
       * @name checkExpired
       *
       * @memberof drugCard
       *
       * @param {Date} exprDate - expiration date
       * @returns {Boolean} - returns true if expired
       *
       * @description
       * user moment.js to determine if drug is expired and set $scope variable to we can assign a class in the view
       */
      function checkExpired(exprDate) {
        return moment(exprDate, 'mm/dd/YYYY').isBefore(moment());
      }

      /**
       * @name login
       *
       * @memberof drugCard
       *
       * @description
       * when a user clicks on a drug card, go to that drug's detailed page
       */
      $scope.goToDetails = function () {
        if($scope.drug.recalled){
          $state.go('main.drugProfile.recalls', {name: $scope.drug.name, cabinetId: $scope.key});
        } else {
          $state.go('main.drugProfile.uses', {name: $scope.drug.name, cabinetId: $scope.key});
        }

      };

    }
  }

})();


