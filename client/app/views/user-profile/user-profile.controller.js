'use strict';

/**
 * @ngdoc controller
 *
 * @name UserProfileCtrl
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

    vm.userDetails= {};

    vm.logout = user.logout;
    vm.updateUser = updateUser;

    init();

    /**
     * @memberof UserProfileCtrl
     */
    function init() {
      user.getDetails().then(function (userData) {
        vm.userDetails = userData.data;
      });
    }

    /**
     * user the current user
     *
     * @memberof UserProfileCtrl
     */
    function updateUser() {
      user.setDetails(vm.userDetails).then(function(res) {
        vm.userDetails = res.data;
      });
    }
  }

})();

