'use strict';

/**
 * @ngdoc Controller
 *
 * @name rex.controller:Login
 *
 * @description
 * Controller for rex
 */
(function () {

  angular
    .module('rex')
    .controller('LoginCtrl', LoginCtrl);

  function LoginCtrl($http, userService, $log) {
    var vm = this;

    vm.login = function () {

      userService.login({username: vm.username, password: vm.password}).success(function (resp) {
        $log.log('success', resp);
      }).error(function (err) {
        $log.log('error', err);
      });
    };
  }

}());

