'use strict';

(function () {

  angular
    .module('rex')
    .config(function ($stateProvider) {
      $stateProvider
        .state('main.search', {
          url         : '/search',
          templateUrl : 'app/views/search/search.view.html',
          controller  : 'SearchCtrl',
          controllerAs: 'search',
          title       : 'Search',
          buttonData  : {
            display: true,
            open   : true,
            link   : 'main.cabinet'
          }
        });
    });

})();
