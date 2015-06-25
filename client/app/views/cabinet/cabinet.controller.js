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

    init();

    /**
     * @memberof CabinetCtrl
     */
    function init() {
      vm.drugs = [];
      vm.noResults = false;

      user.details().then(function(data) {
        vm.drugs = data.data.drugs;

        console.log('drugs', vm.drugs);

        if(vm.drugs.length === 0){
          vm.noResults = false;
          return;
        } else{
          _queryRecalls();
        }

      });
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

      //TODO: add status:ongoing -- this isnt working with our API right now
      // var searchTerm = '(' + _.trimRight(query, '+') +')+AND+status:Ongoing';

      drug.enforce({search: query, limit: 100}).success(function (data) {
        recalls = data.results;

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
        if(drug) {
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

