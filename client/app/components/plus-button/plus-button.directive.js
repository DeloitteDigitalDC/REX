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
    .directive('aPlusButton', aPlusButton);

  function aPlusButton() {
    return {
      restrict: 'EA',
      templateUrl: 'app/components/plus-button/plus-button.directive.html',
      scope: {
        open: '='
      }
    };
  }

})();


