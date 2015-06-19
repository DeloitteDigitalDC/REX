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

  function LoginCtrl($http) {
    var vm = this;

    vm.login = function () {
      console.log(vm.username, vm.password);
      $http.post('/user/login', {username: vm.username, password: vm.password}).success(function (resp) {
        console.log(resp);
      });
    }
  }

}());

