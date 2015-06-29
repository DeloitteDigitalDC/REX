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

  function DrugProfileCtrl($stateParams, user, $state, modals) {
    var vm = this, cabinetDrugs;

    vm.drugName = $stateParams.name;
    vm.isSearch = $state.includes('main.search.**');
    vm.id = $stateParams.id || 0;
    vm.inCabinet = false;


    vm.addCabinetDrug = addCabinetDrug;
    vm.checkCabinet = checkCabinet;
    vm.removeCabinetDrug = removeCabinetDrug;

    init();

    /**
     * @memberof DrugProfileCtrl
     */
    function init() {
      checkCabinet();
    }

    function removeCabinetDrug(evt) {
      var modal = modals.removeDrug(evt);

      modal.then(function () {
        removeDrug();

        $state.go('main.cabinet');
      });

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
     * Remove a drug from your drug cabinet
     *
     * @memberof DrugProfileCtrl
     */
    function removeDrug() {
       user.deleteCabinetDrug(vm.id, function (){
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

