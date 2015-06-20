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

  function drug($http, CONST) {
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
     */
    function events(qs) {
      return $http.get(CONST.drug.event, { params: qs });
    }

    /**
     * @name labels
     *
     * @memberof drugs
     *
     * @param {Object} qs
     */
    function labels(qs) {
      return $http.get(CONST.drug.drugLabel, { params: qs });
    }

    /**
     * @name enforcements
     *
     * @memberof drugs
     *
     * @param {Object} qs
     */
    function enforcements(qs) {
      return $http.get(CONST.drug.drugEnforcement, { params: qs });
    }
  }

})();

