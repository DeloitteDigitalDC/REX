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
        vm.userDetails = userData.data.data;

        if(vm.userDetails.pregnant === 1){
          vm.userDetails.pregnant = true;
        }
      });
    }

    /**
     * user the current user
     *
     * @memberof UserProfileCtrl
     */
    function updateUser() {
      user.setDetails({pregnant : vm.userDetails.pregnant});
    }
  }

})();

