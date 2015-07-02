'use strict';

/**
 * @ngdoc controller
 *
 * @name AddDrugModalCtrl
 *
 * @description
 * Controller for rex
 */
(function() {

  angular
    .module('rex')
    .controller('AddDrugModalCtrl', AddDrugModalCtrl);

  function AddDrugModalCtrl(drugToAdd, CONST, $mdDialog) {
    var vm = this;
    var yearCount = 10;

    vm.drug = drugToAdd;
    vm.expiration = {};
    vm.expiration.months = CONST.months;
    vm.expirationMonth = vm.expiration.months[0];
    vm.expiration.years = _makeYearArray(yearCount);
    vm.expirationYear = vm.expiration.years[yearCount];

    vm.submit = submit;
    vm.cancel = $mdDialog.cancel;

    /**
     * Create the full expiration date and submit the form
     *
     * @memberof AddDrugModalCtrl
     */
    function submit() {
      vm.drug.expirationDate = _makeDateFromMonthYear(vm.expirationMonth.id, vm.expirationYear.name);

      $mdDialog.hide(vm.drug);
    }

    /**
     * creates and returns an array of expiration years based on the current year & the 'iterations' parameter passed in
     *
     * @memberof AddDrugModalCtrl
     *
     * @param {number} iterations
     *
     * @returns {Array}
     *
     * @private
     */
    function _makeYearArray(iterations){
      var currentYear = new Date().getFullYear(), arr = [];

      while(iterations !== -1){
        arr.push({id: iterations, name: currentYear + iterations});

        iterations = iterations-1;
      }

      return arr;
    }

    /**
     * Creates a JS date from a month/year tuple. Useful for manipulation and calculations.
     *
     * @memberof AddDrugModalCtrl
     *
     * @param {String} month - the expiration month
     * @param {String} year - the expiration year
     *
     * @returns {Date}
     *
     * @private
     */
    function _makeDateFromMonthYear(month, year) {
      return new Date(year, month, 1);
    }

  }

})();

