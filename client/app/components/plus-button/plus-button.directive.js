'use strict';

/**
 * @ngdoc directive
 *
 * @name plusButton
 *
 * @description
 * directive for rex
 */
(function() {

  angular
    .module('rex')
    .directive('plusButton', plusButton);

  function plusButton() {
    return {
      restrict: 'EA',
      templateUrl: 'app/components/plus-button/plus-button.directive.html',
      scope: {
        open: '='
      }
    };
  }

})();
