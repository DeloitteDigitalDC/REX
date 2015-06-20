'use strict';

/**
 * @ngdoc directive
 *
 * @name header
 *
 * @description
 * directive for rex
 */
(function() {

  angular
    .module('rex')
    .directive('header', header);

  function header() {
    return {
        restrict: 'EA',
        // templateUrl: 'app/components/header/header.html'
        scope: {},
        link: link
    };

    function link() {
    }
  }

})();


