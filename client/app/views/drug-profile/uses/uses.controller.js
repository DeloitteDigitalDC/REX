'use strict';

/**
 * @ngdoc controller
 *
 * @name UsesCtrl
 *
 * @description
 * Controller for rex
 */
(function () {

  angular
    .module('rex')
    .controller('UsesCtrl', UsesCtrl);

  function UsesCtrl($stateParams, drug) {
    var vm = this;

    vm.drugName = $stateParams.name;
    vm.drugData = {};

    init();

    function init() {
      _getDrugData();
    }

    /**
     *
     * @name _getDrugData
     *
     * @memberof UsesCtrl
     *
     * @private
     *
     * @TODO check for best result when more than one is returned? not sure if they are always identical for the fields we care about
     */
    function _getDrugData() {
      drug.labels({search: 'openfda.brand_name.exact:"' + vm.drugName + '"', limit: 25}).success(function (data) {
        console.log(data);
        vm.drugData = data.results[0];
        console.log(vm.drugData);
      });
    }

  }

})();

