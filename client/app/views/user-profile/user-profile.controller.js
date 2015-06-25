'use strict';

/**
 * @ngdoc controller
 *
 * @name UserProfile
 *
 * @description
 * Controller for rex
 */
(function() {

  angular
    .module('rex')
    .controller('UserProfileCtrl', UserProfileCtrl);

  function UserProfileCtrl(user) {
    var vm = this;

    vm.logout = user.logout;
  }

})();

