'use strict';

/**
 * @ngdoc controller
 *
 * @name AppCtrl
 *
 * @description
 * The main application Controller for rex
 */
(function () {

  angular
    .module('rex')
    .controller('AppCtrl', AppCtrl);

  function AppCtrl($rootScope, $cookies, $state, $mdDialog) {
    var vm = this;

    vm.title = 'REX'; // Default Title

    $rootScope.$on('$viewContentLoaded', function() {

      var interval = setInterval(function () {
        if (document.readyState === 'complete') {
          window.scrollTo(0, 0);

          clearInterval(interval);
        }
      });

    });

    $rootScope.$on('$stateChangeStart', stateChangeStart); // Listen for state change

    /**
     * @memberof AppCtrl
     *
     * @param {Object} event - the event object
     * @param {Object} newState - the new state object
     */
    function stateChangeStart(event, newState) {
      $mdDialog.cancel();

      vm.title = newState.title;
      vm.state = newState;

      vm.headerOptions = newState.buttonData;

      if (!newState.public) {
        if (!$cookies.get('uid')) {
          event.preventDefault();

          $state.go('main.home');
        }
      }
      else {
        if ($cookies.get('uid')) {
          event.preventDefault();

          $state.go('main.cabinet');
        }
      }
    }
  }

})();
