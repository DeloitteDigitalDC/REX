'use strict';

/**
 * @ngdoc directive
 *
 * @name ngAutofocus
 *
 * @description
 * directive for rex
 */
(function () {

  angular
    .module('rex')
    .directive('ngAutofocus', ngAutofocus);

  function ngAutofocus($timeout) {
    return {
      restrict: 'A',
      link    : function (scope, element) {
        $timeout(function () {
          element[0].focus();
        });
      }
    };
  }

})();