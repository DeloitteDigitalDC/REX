'use strict';

/**
 * @ngdoc directive
 *
 * @name drugTabs
 *
 * @description
 * directive for rex
 */
(function() {

  angular
    .module('rex')
    .directive('drugTabs', drugTabs);

  function drugTabs($state) {
    return {
      restrict: 'EA',
      templateUrl: 'app/components/drug-tabs/drug-tabs.directive.html',
      scope: {
        drugName : '='
      },
      link: link
    };

    function link(scope) {

      scope.inSearch = false;

      if ($state.includes('main.search.**')){
        scope.inSearch = true;
      }

    }
  }

})();


