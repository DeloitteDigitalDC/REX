'use strict';

/**
 * @ngdoc factory
 *
 * @name util
 *
 * @description
 * Factory for rex
 */
(function () {

  angular
    .module('rex')
    .factory('util', util);

  function util() {
    return {
      createBasicQry       : createBasicQry,
      createSingleSearchQry: createSingleSearchQry
    };

    /**
     * Create string for drug query.
     * Intended for use when you are doing a search on all drugs in your cabinet (or future features that use lists of drugs)
     *
     * @memberof util
     *
     * @param {Object} drugs - list of drugs
     *
     */
    function createBasicQry(drugs) {
      var string = 'openfda.brand_name:';

      for (var drug in drugs) {
        if (drugs.hasOwnProperty(drug)) {
          if (drugs[drug]) {
            var qryReadyDrug = checkForStopWords(drugs[drug].name);
            string           = string + encodeURIComponent(qryReadyDrug) + '+';
          }
        }
      }
      _.trimRight(string, '+');
      string = '(' + string + ')'; //+AND+status:Ongoing';

      return string;
    }

    /**
     * Remove stop words that break FDA API query
     *
     * @memberof util
     *
     * @param {String} name - drug name
     *
     */
    function checkForStopWords(name) {
      var words = _.words(name);
      var str = '';

      _.forEach(words, function (word) {
        if (word.toUpperCase() !== 'AND') {
          str = str + ' ' + word ;
        }
      });

      return _.trim(str);
    }


    /**
     * Create string for drug query.
     *
     * @memberof util
     *
     * @param {String} searchTerms - string from drug search
     *
     * @returns {String}
     */
    function createSingleSearchQry(searchTerms) {
      return '(' + 'openfda.brand_name:"' + searchTerms + '")';
    }
  }

})();

