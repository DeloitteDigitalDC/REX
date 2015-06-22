'use strict';

/**
 * @ngdoc directive
 *
 * @name appSection
 *
 * @description
 * directive for rex
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


