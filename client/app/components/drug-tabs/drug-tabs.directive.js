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

  function drugTabs() {
    return {
      restrict: 'EA',
      templateUrl: 'app/components/drug-tabs/drug-tabs.directive.html',
      scope: {
        drugName : '='
      },
      link: link
    };

    function link() {
    }
  }

})();


