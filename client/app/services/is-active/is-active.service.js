'use strict';

/**
 * @ngdoc factory
 *
 * @name isActive
 *
 * @description
 * Service for rex
 */
(function() {

  angular
    .module('rex')
    .factory('isActive', isActive);

  function isActive($location) {
    return function checkActive() {
      var links    = arguments,
          isActive = false;

      for(var i = 0, len = links.length; i < len; i++) {
        if(links[i] === $location.path()) {
          isActive = true;

          break;
        }
      }

      return isActive;
    };
  }

})();
