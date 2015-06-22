'use strict';

/**
 * @ngdoc controller
 *
 * @name UserProfile
 *
 * @description
 * Controller for rex
 */
(function() {

  angular
    .module('rex')
    .controller('UserProfileCtrl', UserProfileCtrl);

  function UserProfileCtrl() {
    var vm = this;

    vm.fmlyBtnState = false;

    vm.fmlyBtnToggle = fmlyBtnToggle;

    function fmlyBtnToggle() {
      vm.fmlyBtnState = !vm.fmlyBtnState;
    }
  }

})();

