'use strict';

/**
 * @ngdoc factory
 *
 * @name notify
 *
 * @description
 * Factory for rex
 */
(function () {

  angular
    .module('rex')
    .factory('notify', notify);

  function notify($rootScope, $timeout) {
    var timeoutPromise = {};

    return {
      showAlert: showAlert,
      hideAlert: hideAlert
    };

    /**
     * @description Shows a notification at the top of the screen
     * @param {String} message - A message to display
     * @param {String} type - "success", "warning", or "danger" - Different colors of alert. Default is warning
     * @param {Number} timeout - How long the alert should display, default is 4000ms (4seconds)
     * @memberof notify
     */
    function showAlert(message, type, timeout) {
      $rootScope.alert = {};
      //Clear any existing counters
      $timeout.cancel(timeoutPromise);

      $rootScope.alert.visible = true;
      $rootScope.alert.type    = type || 'warning';
      $rootScope.alert.msg     = message;

      if (_.isUndefined(timeout)) {
        timeout = 4000;
      }

      timeoutPromise = $timeout(function () {
        $rootScope.alert.visible = false;
      }, timeout);
    }

    function hideAlert() {
      $timeout.cancel(timeoutPromise);
      //Wrapping in a timeout call so it waits until the digest cycle is over. Otherwise won't update until next cycle.
      $timeout(function () {
        if ($rootScope.alert) {
          $rootScope.alert.visible = false;
        }
      });
    }

    $rootScope.hideAlert = hideAlert;
  }

})();

