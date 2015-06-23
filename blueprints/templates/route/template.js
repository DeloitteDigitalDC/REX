'use strict';

(function () {

  angular
    .module('<%= appName %>')
    .config(function ($stateProvider) {
      $stateProvider
        .state('main.<%= cameledName %>', {
          url         : '/<%= dashedName %>',
          templateUrl : 'app/views/<%= dashedName %>/<%= dashedName %>.view.html',
          controller  : '<%= classedName %>Ctrl',
          controllerAs: '<%= cameledName %>',
          title       : '<%= humanName %>'
        });
    });

})();
