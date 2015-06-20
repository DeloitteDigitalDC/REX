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

    vm.login = login;

    /**
     * login function that calls our api which then authenticates using firebase
     */
    function login() {
      user.login(vm.username, vm.password);
    }
  }

})();

