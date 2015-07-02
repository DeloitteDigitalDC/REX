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
      enforce: enforce,
      labelsSearch: labelsSearch
    };

    /* istanbul ignore next */
    /**
     * Query the
     *
     * @memberof drugs
     *
     * @param {Object} qs
     *
     * @example
     * drug.events({ search: 'patient.patientonsetage:56', limit: 25 }).success(function (data) {
     *   console.log(data);
     * });
     */
    function events(qs) {
      return $http.get(path.event, {params: qs});
    }

    /* istanbul ignore next */
    /**
     * @memberof drugs
     *
     * @param {Object} qs
     * @param {String} drugName
     *
     * @TODO check for best result when more than one is returned? not sure if they are always identical for the fields we care about
     *
     */
    function labels(qs, drugName) {
      if (drugName === cachedDrugName) {
        labelPromise = _returnCachedLabel();
      }
      else {
        labelPromise = _returnHttpPromise(qs, drugName);
      }

      return labelPromise;
    }

    /**
     * Simple search of the API
     *
     * @memberof drugs
     *
     * @param qs
     *
     * @return {*}
     */
    function labelsSearch(qs){
      return $http.get(path.label, {params: qs});
    }

    /**
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

