'use strict';

/**
 * @ngdoc controller
 *
 * @name SignUp
 *
 * @description
 * Controller for rex
 */
(function () {

  angular
    .module('rex')
    .controller('SignUpCtrl', SignUpCtrl);

  function SignUpCtrl(user) {
    var vm = this;

    vm.signUpForm = {};
    vm.userInfo   = {};
    vm.showError  = false;

    vm.signUp = signUp;

    /**
     *
     * @memberof SignUp
     *
     * @description
     * create a new user
     */
    function signUp() {
      if (vm.signUpForm.$invalid) {
        vm.showError = true;
      }
      else {
        user.createUser(vm.userInfo.username, vm.userInfo.password, vm.userInfo.firstName);
      }

    }
  }

})();

