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
      createBasicQry: createBasicQry,
      createUnionQry: createUnionQry
    };

    /**
     * Create string for drug query.  Intended for use when you are doing a search on all drugs in your cabinet (or future features that use lists of drugs)
     *
     * @memberof util
     *
     * @param {Object} drugs - list of drugs
     *
     * create string for drug query
     */
    function createBasicQry(drugs) {
      var string = 'openfda.brand_name:';

      for (var drug in drugs) {
        if (drugs.hasOwnProperty(drug)) {
          if (drugs[drug]) {
            string = string + encodeURIComponent(drugs[drug].name) + '+';
          }
        }
      }
      _.trimRight(string, '+');
      string = '(' + string + ')';

      return string;
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
    function createUnionQry(searchTerms) {
      var words = _.words(searchTerms);
      var qry   = '';

      _.forEach(words, function (w) {
        qry = qry + 'openfda.brand_name:"' + w + '"+';
      });

      debugger;

      qry = _.trimRight(qry, '+');
      qry       = '(' + qry + ')';

      return qry;
    }
  }

})();

