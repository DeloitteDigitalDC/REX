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
    vm.applicationId = $stateParams.applicationId || 0;

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
      var searchKey = 'openfda.application_number:"';

      if(vm.applicationId === 0){
        searchKey = 'openfda.brand_name.exact:"';
      }

      console.log(searchKey);

      drug.labels({search: searchKey + vm.applicationId  + '"', limit: 25, alerts: 'pregnancy'}, vm.applicationId).then(function (res) {
        console.log(res);

        vm.drugData = res.data.results[0];

        vm.fieldsLoaded = true;
      });
    }

  }

})();

