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
        searchResults: '=',
        noResults    : '='
      },
      link       : link
    };

    function link(scope) {
      scope.search     = {};
      scope.showLoader = false;
      scope.noResults  = false;

      scope.searchByName = searchByName;

      /**
       * Search for a drug by its name
       *
       * @memberof searchInput
       */
      function searchByName() {
        $state.go('main.search.searchResults');

        scope.noResults     = false;
        scope.searchResults = [];
        scope.showLoader    = true;

        var query;

        try {
          query = util.createSingleSearchQry(scope.search.searchTerms);
        }
        catch (e) {
          query = '';
        }

        var drugSearch = drug.labelsSearch({search: query, limit: 100});

        drugSearch.success(function (res) {
          scope.searchResults = res.results || [];

          if (scope.searchResults.length === 0) {
            scope.noResults = true;
          }

          scope.showLoader = false;
        });
      }
    }
  }

})();


