'use strict';

/**
 * @ngdoc directive
 *
 * @name card
 *
 * @description
 * directive for rex
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
      transclude : true,
      link       : link
    };

    function link() {
    }
  }

})();


