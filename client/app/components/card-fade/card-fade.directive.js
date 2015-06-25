'use strict';

/**
 * @ngdoc directive
 *
 * @name cardFade
 *
 * @description
 * directive for rex
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


