'use strict';

/**
 * @ngdoc controller
 *
 * @name CabinetCtrl
 *
 * @description
 * Controller for rex
 */
(function () {

  angular
    .module('rex')
    .controller('CabinetCtrl', CabinetCtrl);

  function CabinetCtrl(drug, util, user, $state) {
    var vm = this;

    vm.search = search;

    var recalls;

    init();

    /**
     * go to the search page
     *
     * @memberof CabinetCtrl
     */
    function search() {
      $state.go('main.search.searchResults');
    }

    /**
     * @memberof CabinetCtrl
     */
    function init() {
      vm.drugs = user.getCabinetDrugs();

      _queryRecalls();
    }

    /**
     * @memberof CabinetCtrl
     *
     * @description create string and query for recalls
     *
     * @private
     */
    function _queryRecalls() {
      var query = util.createBasicQry(vm.drugs);

      drug.enforce({search: query, limit: 100}).success(function (res) {
        recalls = res.results;
        _compareRecalls();
      });
    }

    /**
     * @memberof CabinetCtrl
     *
     * @description loop through each of the users drugs and check if it matches one of the recalled drugs
     */
    function _compareRecalls() {
      _.forEach(vm.drugs, function (drug) {
        if (drug) {
          _.forEach(recalls, function (recall) {

            if (recall.openfda.brand_name) {
              if ((recall.openfda.brand_name[0]).toUpperCase() === (drug.name).toUpperCase()) {
                drug.recalled = true;
              }
            }

          });
        }

      });
    }

  }

})();

