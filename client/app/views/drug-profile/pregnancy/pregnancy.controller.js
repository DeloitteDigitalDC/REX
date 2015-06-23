'use strict';

/**
 * @ngdoc controller
 *
 * @name rex.controller:Pregnancy
 *
 * @description
 * Controller for rex
 */
(function() {

  angular
    .module('rex')
    .controller('PregnancyCtrl', PregnancyCtrl);

  function PregnancyCtrl() {
    var vm = this;

    vm.awesomeThings = ['Yeoman', 'Angular', 'Bower', 'Grunt'];
  }

})();

