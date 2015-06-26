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

  function UsesCtrl(drug, $stateParams) {
    var vm = this;

    vm.fieldsLoaded = false;
    vm.drugName = $stateParams.name;
    vm.drugData = {};

    init();

    function init() {
      _getDrugData();
    }

    /**
     * gets the drug data
     *
     * @memberof UsesCtrl
     *
     * @private
     */
    function _getDrugData() {
      drug.labels({search: 'openfda.brand_name.exact:"' + vm.drugName + '"', limit: 25}, vm.drugName).then(function (res) {
        console.log(res);

        vm.drugData = res.data.results[0];
        vm.fieldsLoaded = true;
      });
    }

  }

})();

