'use strict';

/**
 * @ngdoc directive
 *
 * @name plusButton
 *
 * @description
 * Red plus button that animates rotation to an X when marked as open
 *
 * @property {Boolean} open - whether the button should be in the open state
 *
 * @example <plus-button open="true"></plus-button>
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
