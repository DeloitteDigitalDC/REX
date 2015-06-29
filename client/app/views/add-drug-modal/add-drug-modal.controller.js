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
      { id: '01', label: 'January' },
      { id: '02', label: 'February' },
      { id: '03', label: 'March' },
      { id: '04', label: 'April' },
      { id: '05', label: 'May' },
      { id: '06', label: 'June' },
      { id: '07', label: 'July' },
      { id: '08', label: 'August' },
      { id: '09', label: 'September' },
      { id: '10', label: 'October' },
      { id: '11', label: 'November' },
      { id: '12', label: 'December' }
    ];

    vm.expirationMonth = vm.expiration.months[0];

    var yearCount = 10;

    vm.expiration.years = _makeYearArray(yearCount);

    vm.expirationYear = vm.expiration.years[yearCount];

    vm.submit = function () {
      vm.drug.expirationDate = vm.expirationMonth.id + '/' + vm.expirationYear.name;
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

  }

})();

