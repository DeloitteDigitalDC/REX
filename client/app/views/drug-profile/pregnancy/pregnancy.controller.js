'use strict';

/**
 * @ngdoc controller
 *
 * @name PregnancyCtrl
 *
 * @description
 * Controller for rex
 */
(function () {

  angular
    .module('rex')
    .controller('PregnancyCtrl', PregnancyCtrl);

  function PregnancyCtrl(drug, $stateParams) {
    var vm = this;

    vm.fieldsLoaded = false;
    vm.drugName     = $stateParams.name;
    vm.applicationId = $stateParams.applicationId || 0;
    vm.drugData     = {};

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
      var drugs;

      if (vm.applicationId !== 0) {
        drugs = drug.labels({
          search: 'openfda.application_number:"' + vm.applicationId + '"',
          limit : 25
        }, vm.applicationId);
      } else {
        drugs = drug.labels({search: 'openfda.brand_name.exact:"' + vm.drugName + '"', limit: 25}, vm.drugName);
      }

      drugs.then(function (labels) {
        vm.drugData     = labels.data.results[0];
        vm.fieldsLoaded = true;
      });
    }
  }

})();

