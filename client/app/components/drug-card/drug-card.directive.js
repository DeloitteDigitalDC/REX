'use strict';

/**
 * @ngdoc directive
 *
 * @name drugCard
 *
 * @description
 * component for creating a drug card that appears in the cabinet view
 *
 * @property {Object} drug - the drug object to be used for creation
 *
 * @example <drug-card drug="Cabinet.drugDetails"></drug-card>
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
        drug: '='
      },
      link       : link
    };

    function link(scope) {
      scope.goToDetails = goToDetails;

      var id;

      if (scope.drug) {
        id = scope.drug.id || 0;
        scope.expired = _checkExpired(scope.drug.expirationDate);
      }

      /**
       * when a user clicks on a drug card, go to that drug's detailed page
       *
       * @memberof drugCard
       */
      function goToDetails() {
        if (scope.drug.recalled) {
          $state.go('main.drugProfile.recalls', {name: scope.drug.name, id : id});
        }
        else {
          $state.go('main.drugProfile.uses', {name: scope.drug.name, id : id});
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
        return moment(exprDate).isBefore(moment());
      }
    }
  }

})();


