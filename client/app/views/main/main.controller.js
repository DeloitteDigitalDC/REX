'use strict';

/**
 * @ngdoc controller
 *
 * @name MainCtrl
 *
 * @description
 * Controller for rex
 */
(function() {

  angular
    .module('rex')
    .controller('MainCtrl', MainCtrl);

  function MainCtrl(isActive, userDetails) {
    var vm = this;

    vm.isActive = isActive;

    vm.user = userDetails;
  }

})();
