'use strict';

/**
 * @ngdoc controller
 *
 * @name LoginCtrl
 *
 * @description
 * Controller for rex
 */
(function () {

  angular
    .module('rex')
    .controller('LoginCtrl', LoginCtrl);

  function LoginCtrl(user) {
    var vm = this;

    vm.userInfo = {};
    vm.loading = false;

    vm.login = login;

    /**
     * @memberof LoginCtrl
     *
     * @description
     * call user service to authenticate user
     */
    function login() {
      vm.loading = true;

      user
        .login(vm.userInfo.username, vm.userInfo.password)
        .success(function() {
          vm.loading = false;
        })
        .error(function() {
          vm.loading = false;
        });
    }
  }

})();

