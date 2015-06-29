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

      if(vm.applicationId !== 0){
          drug.labels({search: 'openfda.application_number:"' + vm.applicationId  + '"', limit: 25}, vm.applicationId).then(function (res) {
          vm.drugData = res.data.results[0];
          console.log('by aplicationID', vm.drugData);
          vm.fieldsLoaded = true;
        });
      } else {
        drug.labels({search: 'openfda.brand_name.exact:"' + vm.drugName + '"', limit: 25}, vm.drugName).then(function (res) {
          vm.drugData = res.data.results[0];
          console.log(vm.drugData);
          vm.fieldsLoaded = true;
        });
      }


    }

  }

})();

