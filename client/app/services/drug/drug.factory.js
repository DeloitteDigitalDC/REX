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

  function drug($http, CONST) {
    var path = CONST.drug;

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
     */
    function events(qs) {
      return $http.get(path.event, {params: qs});
    }

    /**
     * @name labels
     *
     * @memberof drugs
     *
     * @param {Object} qs
     */
    function labels(qs) {
      return $http.get(path.drugLabel, {params: qs});
    }

    /**
     * @name enforcements
     *
     * @memberof drugs
     *
     * @param {Object} qs
     */
    function enforce(qs) {
      return $http.get(path.drugEnforcement, {params: qs});
    }
  }

})();

