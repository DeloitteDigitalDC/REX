'use strict';

/**
 * @ngdoc directive
 *
 * @name userIcon
 *
 * @description
 * User icon for header and user profile.
 *
 * @property {String} hash - gravatar hash
 * @property {String} hash - gravatar hash
 *
 * @example <user-icon hash="jdiueuye893hjkfnjfijr" size="40"></user-icon>
 */
(function() {

  angular
    .module('rex')
    .directive('rexIcon', userIcon);

  function userIcon() {
    return {
      restrict: 'EA',
      templateUrl: 'app/components/user-icon/user-icon.directive.html',
      scope: {
        hash: '=',
        size: '@'
      }
    };
  }

})();


