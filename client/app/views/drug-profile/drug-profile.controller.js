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
    vm.cabinetId = $stateParams.cabinetId || 0;
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

    function removeCabinetDrug() {
      var modal = modals.removeDrug().result;

      modal.then(function () {
        removeDrug();
      });

      return modal;
    }

    /**
     * Add a drug to your drug cabinet
     *
     * @memberof DrugProfileCtrl
     */
    function addCabinetDrug(drug) {
      user.addCabinetDrug(drug).then(function() {
        checkCabinet();
      });
    }

    /**
     * Remove a drug from your drug cabinet
     *
     * @memberof DrugProfileCtrl
     */
    function removeDrug() {
       user.deleteCabinetDrug(vm.cabinetId, function (){
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

