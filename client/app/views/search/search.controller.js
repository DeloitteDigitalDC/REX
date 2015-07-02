'use strict';

/**
 * @ngdoc controller
 *
 * @name Search
 *
 * @description
 * Controller for rex
 */
(function() {

  angular
    .module('rex')
    .controller('SearchCtrl', SearchCtrl);

  function SearchCtrl() {
    var vm = this;

    vm.results = [];
    vm.noResults = false;
  }

})();

