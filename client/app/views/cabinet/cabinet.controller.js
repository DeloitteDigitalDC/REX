'use strict';

/**
 * @ngdoc controller
 *
 * @name rex.controller:Cabinet
 *
 * @description
 * Controller for rex
 */
(function() {

  angular
    .module('rex')
    .controller('CabinetCtrl', CabinetCtrl);

  function CabinetCtrl() {
    var vm = this;

    vm.awesomeThings = ['Yeoman', 'Angular', 'Bower', 'Grunt'];
  }

})();

