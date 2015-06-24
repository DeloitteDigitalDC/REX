'use strict';

/**
 * @ngdoc factory
 *
 * @name util
 *
 * @description
 * Factory for rex
 */
(function() {

  angular
    .module('rex')
    .factory('util', util);

  function util() {
    return {
      createSearchQry: createSearchQry
    };

    /**
     *
     * @memberof util
     *
     * @param {Object} drugs - list of drugs
     *
     * @description create string for drug query
     *
     */
    function createSearchQry(drugs) {
      var string = 'openfda.brand_name:';

      for(var drug in drugs) {
        if(drugs.hasOwnProperty(drug)) {
          if(drugs[drug]) {
            string = string + encodeURIComponent(drugs[drug].name) + '+';
          }
        }
      }

      return string;
    }
  }

})();

