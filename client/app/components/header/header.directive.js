'use strict';

/**
 * @ngdoc directive
 *
 * @name header
 *
 * @description
 * directive for rex
 */
(function () {

  angular
    .module('rex')
    .directive('header', header);

  function header() {
    return {
      restrict   : 'EA',
      templateUrl: 'app/components/header/header.directive.html',
      scope      : {
        //TODO are we going to pass this to the directive or find the value within the directive? determine once login stuff is set up
        loggedIn: '='
      },
      link       : link
    };

    function link() {
    }
  }

})();


