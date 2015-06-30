'use strict';

(function () {

  angular
    .module('rex')
    .config(function ($stateProvider) {
      $stateProvider
        .state('main.search.searchResults', {
          url         : '/search-results',
          templateUrl : 'app/views/search/search-results/search-results.view.html',
          controller  : 'SearchResultsCtrl',
          controllerAs: 'searchResults',
          title       : 'Search',
          buttonData  : {
            display: true,
            open   : true,
            link   : 'main.cabinet'
          }
        });
    });

})();
