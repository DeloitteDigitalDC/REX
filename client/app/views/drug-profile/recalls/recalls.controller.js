'use strict';

/**
 * @ngdoc controller
 *
 * @name RecallsCtrl
 *
 * @description
 * Controller for rex
 */
(function() {

  angular
    .module('rex')
    .controller('RecallsCtrl', RecallsCtrl);

  function RecallsCtrl($stateParams, drug, $scope, util) {
    var vm = this;

    vm.fieldsLoaded = false;
    vm.drugName = $stateParams.name;
    vm.recallData = [];

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
    function _getRecallData(){
      var query = util.createSingleSearchQry(vm.drugName);

      drug.enforce({search: query, limit: 100}).success(function (data) {
        vm.recallData = _.forEach(data.results, function(el, idx){
          el.report_date = _dateFormatter(el.report_date);
        });
        console.log(vm.recallData);
        vm.fieldsLoaded = true;
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
    function _dateFormatter(badDate){
      var formattedDate = moment(badDate, 'YYYYMMDD');
      return formattedDate.toDate();
    }

  }

})();

