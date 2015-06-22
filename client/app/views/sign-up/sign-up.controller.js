'use strict';

/**
 * @ngdoc controller
 *
 * @name rex.controller:SignUp
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

    vm.userInfo = {};

    vm.signUp = signUp;

    function signUp() {
      user.createUser(vm.userInfo.username, vm.userInfo.password, vm.userInfo.firstName);
    }

  }

})();

