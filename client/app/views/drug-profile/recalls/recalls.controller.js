'use strict';

/**
 * @ngdoc controller
 *
 * @name RecallsCtrl
 *
 * @description
 * Controller for rex
 */
(function () {

  angular
    .module('rex')
    .controller('RecallsCtrl', RecallsCtrl);

  function RecallsCtrl($stateParams, drug, util) {
    var vm = this;

    vm.fieldsLoaded = false;
    vm.drugName     = $stateParams.name;
    vm.recallData   = [];
    vm.noData       = false;

    init();

    function init() {
      _getRecallData();
    }

    /**
     * gets recall data from the api and does some formatting
     *
     * @memberof RecallsCtrl
     *
     * @private
     */
    function _getRecallData() {
      var query = util.createSingleSearchQry(vm.drugName);

      var promise = drug.enforce({search: query, limit: 100});

      promise.success(function (data) {
        vm.recallData = _.forEach(data.results, function (el) {
          el.report_date = _dateFormatter(el.report_date);
        });

        vm.fieldsLoaded = true;
      });

      promise.error(function () {
        vm.fieldsLoaded = true;
        vm.noData       = true;
      });
    }

    /**
     * changes date returned from the API to javascript date
     *
     * @memberof RecallsCtrl
     *
     * @param badDate
     *
     * @returns {*}
     *
     * @private
     */
    function _dateFormatter(badDate) {
      var formattedDate = moment(badDate, 'YYYYMMDD');

      return formattedDate.toDate();
    }

  }

})();

