'use strict';

(function () {

  angular
    .module('rex')
    .config(function ($stateProvider) {
      $stateProvider
        .state('main.cabinet', {
          url         : '/cabinet',
          templateUrl : 'app/views/cabinet/cabinet.view.html',
          controller  : 'CabinetCtrl',
          controllerAs: 'cabinet',
          title       : 'Drug Cabinet',
          buttonData  : {
            display: true,
            open   : false,
            link   : 'main.search.searchResults'
          }
        });
    });

})();
