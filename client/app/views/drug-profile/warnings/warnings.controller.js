'use strict';

/**
 * @ngdoc controller
 *
 * @name rex.controller:Warnings
 *
 * @description
 * Controller for rex
 */
(function() {

  angular
    .module('rex')
    .controller('WarningsCtrl', WarningsCtrl);

  function WarningsCtrl() {
    var vm = this;

    vm.awesomeThings = ['Yeoman', 'Angular', 'Bower', 'Grunt'];
  }

})();

