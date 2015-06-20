'use strict';

/**
 * @ngdoc controller
 *
 * @name LoginCtrl
 *
 * @description
 * Controller for rex
 */
(function() {

  angular
    .module('rex')
    .controller('LoginCtrl', LoginCtrl);

  function LoginCtrl(user) {
    var vm = this;

    vm.userInfo = {};

    vm.login = login;

    function login() {
      user.login(vm.userInfo.username, vm.userInfo.password);
    }
  }

})();

