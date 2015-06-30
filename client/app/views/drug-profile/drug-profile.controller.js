'use strict';

/**
 * @ngdoc controller
 *
 * @name DrugProfileCtrl
 *
 * @description
 * Controller for rex
 */
(function() {

  angular
    .module('rex')
    .controller('DrugProfileCtrl', DrugProfileCtrl);

  function DrugProfileCtrl($stateParams, user, $state, modals, drug) {
    var vm = this, cabinetDrugs;

    vm.drugName = $stateParams.name;
    vm.isSearch = $state.includes('main.search.**');
    vm.id = $stateParams.id || 0;
    vm.inCabinet = false;
    vm.fieldsLoaded = false;
    vm.drugData = {};
    vm.otc = true;
    vm.displayAlert = false;


    vm.addCabinetDrug = addCabinetDrug;
    vm.checkCabinet = checkCabinet;
    vm.editCabinetDrug = editCabinetDrug;

    init();

    /**
     * @memberof DrugProfileCtrl
     */
    function init() {
      checkCabinet();
      _getDrugData();
    }

    function _getDrugData() {
      var searchKey = 'id:"';

      if(vm.id === 0){
        searchKey = 'openfda.brand_name.exact:"';
      }

      user.getDetails().then(function(user) {
        var opts = {
          search: searchKey + vm.id  + '"',
          limit: 25,
          alerts: user.data.data.pregnant ? 'pregnancy' : null
        };

        drug.labels(opts, vm.id).then(function (res) {
          vm.drugData = res.data.results[0];

          if (vm.drugData.openfda.product_type[0] === 'HUMAN PRESCRIPTION DRUG') {
            vm.otc = false;
          }

          try {
            vm.displayAlert = (vm.drugData.alerts.pregnancy && user.data.data.pregnant);
          }
          catch(e) {
            vm.displayAlert = false;
          }

          vm.fieldsLoaded = true;
        });
      });
    }

    /**
     * remove cabinet drug
     *
     * @memberof DrugProfileCtrl
     *
     * @param evt
     *
     * @return {*}
     */
    function editCabinetDrug(evt) {
      var modal = modals.editDrug(evt);

      return modal;
    }

    /**
     * Add a drug to your drug cabinet
     *
     * @memberof DrugProfileCtrl
     */
    function addCabinetDrug(evt) {
      var drug = {name : vm.drugName, id: vm.id};

      user.addCabinetDrug(evt, drug, function () {
        checkCabinet();
      });
    }

    /**
     * Determine if the current drug is in the users drug cabinet
     *
     * @memberof DrugProfileCtrl
     *
     * @return {boolean}
     */
    function checkCabinet() {
      cabinetDrugs = user.getCabinetDrugs();

      vm.inCabinet = false;

      _.forEach(cabinetDrugs, function(drug) {
        if(drug.name === vm.drugName) {
          vm.inCabinet = true;
        }
      });
    }
  }

})();

