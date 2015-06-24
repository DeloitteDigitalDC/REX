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
     *
     * @TODO check for best result when more than one is returned? not sure if they are always identical for the fields we care about
     */
    function _getDrugData() {
      drug.labels({search: 'openfda.brand_name.exact:"' + vm.drugName + '"', limit: 25}, vm.drugName).then(function (data) {
        vm.drugData = data.data.results[0];
        vm.fieldsLoaded = true;
      });
    }

  }

})();

