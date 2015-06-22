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

  function SignUpCtrl(user, $scope) {
    var vm = this;

    vm.userInfo = {};
    vm.showError = false;

    vm.signUp = signUp;


    function signUp() {
      debugger;
      if(vm.signUpForm.$invalid){
        vm.showError = true;

      }else{
        //user.createUser(vm.userInfo.username, vm.userInfo.password, vm.userInfo.firstName);
        //TODO need to determine how exactly we are handling form validation

      }

    }
  }

})();

