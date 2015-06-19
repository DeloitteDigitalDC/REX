'use strict';

/**
 * @ngdoc controller
 * @name rex.controller:Login
 * @description
 * Controller for rex
 */
(function() {

  angular
    .module('rex')
    .controller('LoginCtrl', LoginCtrl);

  function LoginCtrl(user, $log) {
    var vm = this;

    vm.login = login;

    /**
     * login function that calls our api which then authenticates using firebase
     */
    function login() {
      user.login({username: vm.username, password: vm.password}).success(function (resp) {
        $log.log('success', resp);
      }).error(function (err) {
        $log.log('error', err);
      });
    };
  }

})();

