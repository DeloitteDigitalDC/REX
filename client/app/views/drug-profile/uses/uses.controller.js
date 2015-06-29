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
    vm.id = $stateParams.id || 0;

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
      var searchKey = 'id:"';

      if(vm.id === 0){
        searchKey = 'openfda.brand_name.exact:"';
      }

      drug.labels({search: searchKey + vm.id  + '"', limit: 25, alerts: 'pregnancy'}, vm.id).then(function (res) {
        vm.drugData = res.data.results[0];

        vm.fieldsLoaded = true;
      });
    }

  }

})();

