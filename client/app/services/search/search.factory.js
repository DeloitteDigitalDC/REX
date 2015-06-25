'use strict';

/**
 * @ngdoc factory
 *
 * @name rex.factory:search
 *
 * @description
 * Factory for rex
 */
(function() {

  angular
    .module('rex')
    .factory('search', search);

  function search(drug) {
    return {searchDrugName: searchDrugName };

    function searchDrugName(query){
      drug.enforce({search: query, limit: 100}).success(function (data) {
        console.log('data', data);
      });
    }
  }

})();

