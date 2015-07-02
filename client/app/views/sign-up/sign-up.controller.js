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
    vm.loading    = false;

    vm.signUp = signUp;

    /**
     * create a new user
     *
     * @memberof SignUp
     */
    function signUp() {
      if (vm.signUpForm.$invalid) {
        vm.showError = true;
      }
      else {
        vm.loading = true;

        user
          .createUser(vm.userInfo.username, vm.userInfo.password, vm.userInfo.firstName)
          .success(function () {
            vm.loading = false;
          })
          .error(function () {
            vm.loading = false;
          });
      }
    }
  }

})();

