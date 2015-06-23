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
     * @name createSearchQry
     *
     * @memberof util
     *
     * @param {Object[]} drugArray - array of drug objects
     *
     * @description create string for drug query
     *
     */

    function createSearchQry(drugArray) {
      var string = 'openfda.brand_name:';
      _.forEach(drugArray, function (el) {

        string = string + encodeURIComponent(el.name) + '+';
      });
      return string;
    }
  }

})();

