'use strict';

/**
 * @ngdoc directive
 *
 * @name appSection
 *
 * @description
 * A "section" of the application
 *
 * @example <app-section>My Section Content</app-section>
 */
(function() {

  angular
    .module('rex')
    .directive('appSection', appSection);

  function appSection() {
    return {
      restrict: 'EA',
      templateUrl: 'app/components/app-section/app-section.directive.html',
      scope: {},
      transclude: true,
      link: link
    };

    function link() {
    }
  }

})();


