'use strict';

/**
 * @ngdoc directive
 *
 * @name rexgAutofocus
 *
 * @description
 * a bit of a hack for autofocus fixes with angular apps
 */
(function () {

  angular
    .module('rex')
    .directive('rexAutofocus', rexAutofocus);

  function rexAutofocus($timeout) {
    return {
      restrict: 'A',
      link    : link
    };

    function link(scope, element) {
      $timeout(function () {
        element[0].focus();
      });
    }
  }

})();



