'use strict';

/**
 * @ngdoc controller
 *
 * @name rex.controller:Uses
 *
 * @description
 * Controller for rex
 */
(function() {

  angular
    .module('rex')
    .controller('UsesCtrl', UsesCtrl);

  function UsesCtrl() {
    var vm = this;

    vm.awesomeThings = ['Yeoman', 'Angular', 'Bower', 'Grunt'];
  }

})();

