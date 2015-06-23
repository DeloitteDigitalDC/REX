'use strict';

/**
 * @ngdoc controller
 *
 * @name rex.controller:Recalls
 *
 * @description
 * Controller for rex
 */
(function() {

  angular
    .module('rex')
    .controller('RecallsCtrl', RecallsCtrl);

  function RecallsCtrl() {
    var vm = this;

    vm.awesomeThings = ['Yeoman', 'Angular', 'Bower', 'Grunt'];
  }

})();

