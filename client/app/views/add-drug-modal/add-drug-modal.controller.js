'use strict';

/**
 * @ngdoc controller
 *
 * @name AddDrugModal
 *
 * @description
 * Controller for rex
 */
(function() {

  angular
    .module('rex')
    .controller('AddDrugModalCtrl', AddDrugModalCtrl);

  function AddDrugModalCtrl(drugToAdd, $mdDialog) {
    var vm = this;

    vm.drug = drugToAdd;

    vm.expiration = {};

    vm.expiration.months =
    [
      { id: '0', label: 'January' },
      { id: '1', label: 'February' },
      { id: '2', label: 'March' },
      { id: '3', label: 'April' },
      { id: '4', label: 'May' },
      { id: '5', label: 'June' },
      { id: '6', label: 'July' },
      { id: '7', label: 'August' },
      { id: '8', label: 'September' },
      { id: '9', label: 'October' },
      { id: '10', label: 'November' },
      { id: '11', label: 'December' }
    ];

    vm.expirationMonth = vm.expiration.months[0];

    var yearCount = 10;

    vm.expiration.years = _makeYearArray(yearCount);

    vm.expirationYear = vm.expiration.years[yearCount];

    vm.submit = function () {
      vm.drug.expirationDate = makeDateFromMonthYear(vm.expirationMonth.id, vm.expirationYear.name);
      $mdDialog.hide(vm.drug);
    };

    vm.cancel = function () {
      $mdDialog.cancel();
    };

    /**
     * creates and returns an array of expiration years based on the current year & the 'iterations' parameter passed in
     *
     * @param {number} iterations
     * @returns {Array}
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
     * @param month
     * @param year
     * @returns {Date}
     */
    function makeDateFromMonthYear(month, year) {
      return new Date(year, month, 1);
    }

  }

})();

