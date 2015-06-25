'use strict';

/**
 * @ngdoc controller
 *
 * @name rex.controller:Search
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

  }

})();

