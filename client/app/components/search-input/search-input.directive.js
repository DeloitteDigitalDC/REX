'use strict';

/**
 * @ngdoc directive
 *
 * @name searchInput
 *
 * @description
 * directive for rex
 */
(function() {

  angular
    .module('rex')
    .directive('searchInput', searchInput);

  function searchInput() {
    return {
      restrict: 'EA',
      templateUrl: 'app/components/search-input/search-input.directive.html',
      scope: {},
      link: link
    };

    function link() {
    }
  }

})();


