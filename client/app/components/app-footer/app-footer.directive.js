'use strict';

/**
 * @ngdoc directive
 *
 * @name appFooter
 *
 * @description
 * directive for rex
 */
(function() {

  angular
    .module('rex')
    .directive('appFooter', appFooter);

  function appFooter() {
    return {
      restrict: 'EA',
      templateUrl: 'app/components/app-footer/app-footer.directive.html',
      scope: {},
      link: link
    };

    function link() {
    }
  }

})();


