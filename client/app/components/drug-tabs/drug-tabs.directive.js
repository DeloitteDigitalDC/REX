'use strict';

/**
 * @ngdoc directive
 *
 * @name drugTabs
 *
 * @description
 * drug tabs for the drug profile
 *
 * @property {String} drugName - name of the current drug
 *
 * @example <drug-tabs drugName="'Advil'"></drug-tabs>
 */
(function () {

  angular
    .module('rex')
    .directive('drugTabs', drugTabs);

  function drugTabs($state) {
    return {
      restrict   : 'EA',
      templateUrl: 'app/components/drug-tabs/drug-tabs.directive.html',
      scope      : {
        drugName: '='
      },
      link       : link
    };

    function link(scope) {

      scope.inSearch = $state.includes('main.search.**');

    }
  }

})();


