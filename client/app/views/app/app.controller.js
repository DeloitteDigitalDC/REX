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

  function AppCtrl($rootScope, $cookies, $state, $mdDialog, user) {
    var vm = this;

    vm.title = 'REX'; // Default Title

    $rootScope.$on('$stateChangeStart', stateChangeStart);
    $rootScope.$on('$stateChangeSuccess', stateChangeSuccess);

    /**
     * Listen for state change start. Update the title. redirect based on logged in and public routes.
     *
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

          user.logout();
        }
      }
      else {
        if ($cookies.get('uid')) {
          event.preventDefault();

          $state.go('main.cabinet');
        }
      }
    }

    /**
     * Listen for state change success
     *
     * @memberof AppCtrl
     *
     * @param {Object} event - the event object
     * @param {Object} newState - the new state object
     */
    function stateChangeSuccess(event, newState) {
      var interval;

      if(!newState.noScroll) {
        interval = setInterval(function () {
          if (document.readyState === 'complete') {
            window.scrollTo(0, 0);

            clearInterval(interval);
          }
        });
      }
    }
  }

})();
