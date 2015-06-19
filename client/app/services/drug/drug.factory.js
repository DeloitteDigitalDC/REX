'use strict';

/**
 * @ngdoc factory
 *
 * @name drugs
 *
 * @description
 * Factory for vmc
 */
(function() {

  angular
    .module('rex')
    .factory('drug', drug);

  function drug($http, api) {
    return {
      events: events,
      labels: labels,
      enforcements: enforcements
    };

    /**
     * @name events
     *
     * @memberof drugs
     *
     * @param {Object} qs
     *
     * @return {HttpPromise}
     */
    function events(qs) {
      return $http.get(api.drug.event, { params: qs });
    }

    /**
     * @name labels
     *
     * @memberof drugs
     *
     * @param {Object} qs
     *
     * @return {HttpPromise}
     */
    function labels(qs) {
      return $http.get(api.url.drugLabel, { params: qs });
    }

    /**
     * @name enforcements
     *
     * @memberof drugs
     *
     * @param {Object} qs
     *
     * @return {HttpPromise}
     */
    function enforcements(qs) {
      return $http.get(api.url.drugEnforcement, { params: qs });
    }
  }

})();

