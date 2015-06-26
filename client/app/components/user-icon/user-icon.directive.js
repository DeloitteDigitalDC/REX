'use strict';

/**
 * @ngdoc directive
 *
 * @name userIcon
 *
 * @description
 * directive for rex
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
      },
      link: link
    };

    function link() {
    }
  }

})();


