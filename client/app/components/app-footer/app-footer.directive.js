'use strict';

/**
 * @ngdoc directive
 *
 * @name appFooter
 *
 * @description
 * main footer of the application
 *
 * @example <app-footer></app-footer>
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


