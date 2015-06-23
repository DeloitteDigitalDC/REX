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

  function CabinetCtrl(drug, util, user) {
    var vm = this;

    var recalls;

    function init() {
      vm.drugs = user.getCabinetDrugs();
      queryRecalls();
    }

    /**
     * @name queryRecalls
     *
     * @memberof CabinetCtrl
     *
     * @description create string and query for recalls
     *
     */
    function queryRecalls() {
      var query = util.createSearchQry(vm.drugs);
      //TODO: add status:ongoing -- this isnt working with our API right now
      // var searchTerm = '(' + _.trimRight(query, '+') +')+AND+status:Ongoing';
      var searchTerm = '(' + _.trimRight(query, '+') + ')';
      drug.enforce({search: searchTerm, limit: 100}).success(function (data) {
        console.log('enforce', data);
        recalls = data.results;
        compareRecalls();
      });
    }

    /**
     * @name compareRecalls
     *
     * @memberof CabinetCtrl
     *
     * @description loop through each of the users drugs and check if it matches one of the recalled drugs
     *
     */
    function compareRecalls() {
      _.forEach(vm.drugs, function (drug, idx) {
        _.forEach(recalls, function (recall) {
          if (recall.openfda.brand_name) {
            if (recall.openfda.brand_name[0] === drug.name) {
              vm.drugs[idx].recalled = true;
              console.log('drug match name', drug.name);
            }
          }
        });
      });
    }

    init();

  }

})();

