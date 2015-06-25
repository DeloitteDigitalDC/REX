'use strict';

/**
 * @ngdoc directive
 *
 * @name searchInput
 *
 * @description
 * directive for rex
 */
(function () {

  angular
    .module('rex')
    .directive('searchInput', searchInput);

  function searchInput(util, drug, $state) {
    return {
      restrict   : 'EA',
      templateUrl: 'app/components/search-input/search-input.directive.html',
      scope      : {
        searchResults: '='
      },
      link       : link
    };

    function link($scope) {
      $scope.search     = {};
      $scope.showLoader = false;
      $scope.noResults = false;


      $scope.searchByName = function () {

        $scope.searchResults = [];
        $state.go('main.search.searchResults');
        $scope.showLoader    = true;
        var query            = util.createUnionQry($scope.search.searchTerms);

        //TODO: save search results in factory and look in there before searching
        //search.searchDrugName(query);
        drug.enforce({search: query, limit: 100}).success(function (data) {
          console.log('data', data.results);
          $scope.searchResults = data.results;
          $scope.showLoader    = false;

        }).error(function (){
          $scope.noResults = true;
          $scope.showLoader    = false;
        });
      };
    }
  }

})();


