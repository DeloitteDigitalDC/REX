'use strict';

/**
 * @ngdoc factory
 *
 * @name drugs
 *
 * @description
 * Factory for querying the fda api for information about drugs.
 */
(function () {

  angular
    .module('rex')
    .factory('drug', drug);

  function drug($http, CONST, $q) {
    var path = CONST.drug;
    var cachedDrugLabel, cachedDrugName, labelPromise;

    return {
      events : events,
      labels : labels,
      enforce: enforce
    };

    /**
     * @name events
     *
     * @memberof drugs
     *
     * @param {Object} qs
     *
     * @example
     * drug.events({ search: 'patient.patientonsetage:56', limit: 25 }).success(function (data) {
     *     console.log(data);
     *   });
     */
    function events(qs) {
      return $http.get(path.event, {params: qs});
    }

    /**
     *
     * @memberof drugs
     *
     * @param {Object} qs
     */
    function labels(qs, drugName) {
      if (drugName === cachedDrugName) {
        labelPromise = _returnCachedLabel();
      } else {
        labelPromise = _returnHttpPromise(qs, drugName);
      }


      return labelPromise;
    }

    /**
     * @name enforcements
     *
     * @memberof drugs
     *
     * @param {Object} qs
     */
    function enforce(qs) {
      return $http.get(path.enforcement, {params: qs});
    }

    /**
     * returns already cached label info
     *
     * @memberof drugs
     *
     * @returns {Object} labelPromise
     *
     * @private
     */
    function _returnCachedLabel() {
      labelPromise = $q.defer();
      labelPromise.resolve(cachedDrugLabel);
      return labelPromise.promise;
    }

    /**
     * calls api for label info
     *
     * @memberof drugs
     *
     * @returns {Object} labelPromise
     *
     * @private
     */
    function _returnHttpPromise(qs, drugName) {
      labelPromise  = $http.get(path.label, {params: qs});
      labelPromise.then(function (data) {
        cachedDrugName  = drugName;
        cachedDrugLabel = data;
      });
      return labelPromise;

    }
  }

})();

