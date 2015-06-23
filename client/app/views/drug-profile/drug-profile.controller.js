'use strict';

/**
 * @ngdoc controller
 *
 * @name rex.controller:DrugProfile
 *
 * @description
 * Controller for rex
 */
(function() {

  angular
    .module('rex')
    .controller('DrugProfileCtrl', DrugProfileCtrl);

  function DrugProfileCtrl($stateParams, drug) {
    var vm = this;
    vm.drugName = $stateParams.name;
    vm.drugData = {};

    function init(){
      getDrugData();
    }

    function getDrugData(){
      drug.labels({ search: 'openfda.brand_name.exact:"Advil PM"', limit: 25 }).success(function (data) {
        console.log(data);
        vm.drugData = data.results[0];
        console.log(vm.drugData);
      });
    }

    init();

  }

})();

