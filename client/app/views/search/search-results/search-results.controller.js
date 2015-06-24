'use strict';

/**
 * @ngdoc controller
 *
 * @name rex.controller:SearchResults
 *
 * @description
 * Controller for rex
 */
(function() {

  angular
    .module('rex')
    .controller('SearchResultsCtrl', SearchResultsCtrl);

  function SearchResultsCtrl() {
    var vm = this;

    vm.awesomeThings = ['Yeoman', 'Angular', 'Bower', 'Grunt'];
  }

})();

