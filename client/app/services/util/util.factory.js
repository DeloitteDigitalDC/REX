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
     // var string = 'openfda.brand_name.exact:';
      _.forEach(drugArray, function (el) {
        //TODO wrap multiple words in quotes, remove the word AND, ongoing status
        string = string + encodeURIComponent(el.name) + '+';
      });
      return string;
    }
  }

})();

