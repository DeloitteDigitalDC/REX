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

  function MainCtrl(userDetails) {
    var vm = this;

    vm.user = userDetails.data;
  }

})();
