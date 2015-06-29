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
      restrict   : 'E',
      templateUrl: 'app/components/drug-card/drug-card.directive.html',
      scope      : {
        drug: '=',
        key : '='
      },
      link       : link
    };

    function link(scope) {
      scope.goToDetails = goToDetails;
      if (scope.drug) {
        scope.expired = _checkExpired(scope.drug.expirationDate);
      }

      /**
       * when a user clicks on a drug card, go to that drug's detailed page
       *
       * @memberof drugCard
       */
      function goToDetails() {
        if (scope.drug.recalled) {
          $state.go('main.drugProfile.recalls', {name: scope.drug.name, cabinetId: scope.drug.fbKey});
        }
        else {
          $state.go('main.drugProfile.uses', {name: scope.drug.name, cabinetId: scope.drug.fbKey});
        }
      }

      /**
       * use moment.js to determine if drug is expired and set $scope variable to we can assign a class in the view
       *
       * @memberof drugCard
       *
       * @param {Date} exprDate - expiration date
       *
       * @returns {Boolean} - returns true if expired
       *
       * @private
       */
      function _checkExpired(exprDate) {
        return moment(exprDate, 'mm/dd/YYYY').isBefore(moment());
      }
    }
  }

})();


