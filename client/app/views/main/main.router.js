'use strict';

(function() {

  angular
    .module('mediq')
    .config(function ($stateProvider) {
      $stateProvider
        .state('main', {
          url: '',
          templateUrl: 'app/views/main/main.view.html',
          controller: 'MainCtrl',
          controllerAs: 'MainCtrl',
          title: 'main'
        });
    });

}());
