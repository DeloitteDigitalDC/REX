'use strict';

/**
 * @ngdoc controller
 *
 * @name MainCtrl
 *
 * @description
 * Controller for mediq
 */
(function() {

  angular
    .module('mediq')
    .controller('MainCtrl', MainCtrl);

  function MainCtrl(isActive) {
    var vm = this;

    vm.user = { username: 'USER'};

    vm.isActive = isActive;
  }

})();
