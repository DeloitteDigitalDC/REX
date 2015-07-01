'use strict';

/**
 * @ngdoc directive
 *
 * @name card
 *
 * @description
 * A card component
 *
 * @example <card>My Card Content</card>
 */
(function () {

  angular
    .module('rex')
    .directive('card', card);

  function card() {
    return {
      restrict   : 'EA',
      templateUrl: 'app/components/card/card.directive.html',
      scope      : {},
      transclude : true
    };
  }

})();


