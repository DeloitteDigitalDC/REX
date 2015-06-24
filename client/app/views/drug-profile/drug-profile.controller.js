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

    init();

    function init() {
      _getDrugData();
    }

    /**
     *
     * @memberof UsesCtrl
     *
     * @private
     *
     * @TODO check for best result when more than one is returned? not sure if they are always identical for the fields we care about
     */
    function _getDrugData() {
      drug.labels({search: 'openfda.brand_name.exact:"' + vm.drugName + '"', limit: 25}, vm.drugName).then(function (data) {
        console.log(data);
        vm.drugData = data.data.results[0];
        console.log(vm.drugData);
      });
    }

  }

})();

