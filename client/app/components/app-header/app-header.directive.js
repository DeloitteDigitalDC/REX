'use strict';

/**
 * @ngdoc directive
 *
 * @name appHeader
 *
 * @description
 * directive for rex
 */
(function() {

  angular
    .module('rex')
    .directive('appHeader', appHeader);

  function appHeader() {
    return {
        restrict: 'EA',
        templateUrl: 'app/components/app-header/app-header.directive.html',
        scope: {
          loggedIn: '='
        },
        link: link
    };

    function link() {
    }
  }

})();


