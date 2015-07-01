'use strict';

/**
 * @ngdoc directive
 *
 * @name cardFade
 *
 * @description
 * a card component that fades towards the bottom
 *
 * @example <card-fade>My Card Content</card-fade>
 */
(function() {

  angular
    .module('rex')
    .directive('cardFade', cardFade);

  function cardFade() {
    return {
      restrict: 'EA',
      templateUrl: 'app/components/card-fade/card-fade.directive.html',
      scope: {},
      transclude: true,
      link: link
    };

    function link() {
    }
  }

})();


