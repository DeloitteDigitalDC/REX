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

  function searchInput(util, drug) {
    return {
      restrict: 'EA',
      templateUrl: 'app/components/search-input/search-input.directive.html',
      scope: {},
      link: link
    };

    function link($scope) {
      $scope.search = {};

      $scope.searchByName = function(){

        var query = util.createUnionQry($scope.search.searchTerms);
        console.log('qry', query);

        drug.enforce({search: query, limit: 100}).success(function (data) {
          console.log('data', data);
        });

      };
    }
  }

})();


