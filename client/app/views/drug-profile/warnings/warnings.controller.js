'use strict';

/**
 * @ngdoc controller
 *
 * @name WarningsCtrl
 *
 * @description
 * Controller for rex
 */
(function () {

  angular
    .module('rex')
    .controller('WarningsCtrl', WarningsCtrl);

  function WarningsCtrl($stateParams, drug) {
    var vm = this;

    vm.fieldsLoaded = false;
    vm.drugName = $stateParams.name;
    vm.applicationId = $stateParams.applicationId || 0;
    vm.drugData = {};
    vm.otc = true;

    init();

    function init() {
      _getDrugData();
    }

    /**
     * gets the drug data
     *
     * @memberof WarningsCtrl
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

      drugs.then(function (drugs) {
        vm.drugData = drugs.data.results[0];

        if (vm.drugData.openfda.product_type[0] === 'HUMAN PRESCRIPTION DRUG') {
          vm.otc = false;
        }

        vm.fieldsLoaded = true;
      });
    }

  }

})();

