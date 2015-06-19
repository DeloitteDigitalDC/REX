'use strict';

/**
 * @ngdoc controller
 *
 * @name AboutCtrl
 *
 * @description
 * Controller for mediq
 */
(function() {

  angular
    .module('mediq')
    .controller('AboutCtrl', AboutCtrl);

  function AboutCtrl() {
    var vm = this;

    vm.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }

})();
