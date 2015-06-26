'use strict';

/**
 * @ngdoc controller
 *
 * @name PregnancyCtrl
 *
 * @description
 * Controller for rex
 */
(function() {

  angular
    .module('rex')
    .controller('PregnancyCtrl', PregnancyCtrl);

  function PregnancyCtrl(drug, $stateParams) {
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
      drug.labels({search: 'openfda.brand_name.exact:"' + vm.drugName + '"'}, vm.drugName).then(function (labels) {
        vm.drugData = labels.data.results[0];

        vm.fieldsLoaded = true;
      });
    }
  }

})();

