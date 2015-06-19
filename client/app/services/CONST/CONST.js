(function () {
  'use strict';

  /**
   * @ngdoc factory
   * @name CONST
   * @description
   * Constants and other immutable stuff
   */
  angular.module('rex').constant('CONST', CONST());

  function CONST() {

    var service = {
      API_URL: url
    };

    /**
     * @description
     * URL for our proxy server
     */
    var url = 'http://localhost:9000';

    return service;

  }

})();

