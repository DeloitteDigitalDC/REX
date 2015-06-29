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
    vm.id = $stateParams.id || 0;
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
      var searchKey = 'id:"';

      if(vm.id === 0){
        searchKey = 'openfda.brand_name.exact:"';
      }

      var drugs = drug.labels({
        search: searchKey + vm.id + '"',
        limit : 25
      }, vm.id);


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

