'use strict';

/**
 * @ngdoc controller
 *
 * @name AppCtrl
 *
 * @description
 * The main application Controller for rex
 */
(function() {

  angular
    .module('rex')
    .controller('AppCtrl', AppCtrl);

  function AppCtrl($rootScope, $cookies, $state) {
    var vm = this;

    vm.title = 'REX'; // Default Title

    $rootScope.$on('$stateChangeSuccess', stateChangeSuccess); // Listen for state change

    /**
     *
     * @memberof AppCtrl
     *
     * @param {Object} event - the event object
     * @param {Object} newState - the new state object
     */
    function stateChangeSuccess(event, newState) {
      vm.title = newState.title;

      vm.headerState = newState.headerState;

      vm.state = newState;

      if(!newState.public) {
        if(!$cookies.get('token')) {
          event.preventDefault();

          $state.go('main.home');
        }
      }
      else {
        if($cookies.get('token')) {
          event.preventDefault();

          $state.go('main.cabinet');
        }
      }

      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  }

})();
