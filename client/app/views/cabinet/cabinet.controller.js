'use strict';

/**
 * @ngdoc controller
 *
 * @name rex.controller:Cabinet
 *
 * @description
 * Controller for rex
 */
(function () {

  angular
    .module('rex')
    .controller('CabinetCtrl', CabinetCtrl);

  function CabinetCtrl() {
    var vm = this;

    /**
     *
     * @type {*[]}
     *
     * @example json generator
     * [
     '{{repeat(10)}}',
         {
            name : '{{lorem(2, "words")}}',
            expirationDate : '{{date(new Date(2015, 0, 1), new Date(2017, 0, 1), "YYYY-MM-ddThh:mm:ss")}}',
            recalled : '{{bool()}}'
           }
         ]
     */
    vm.drugs = [
      {
        "name"          : "Tylenol",
        "expirationDate": "2015-11-18T16:13:59",
        "recalled"      : false
      },
      {
        "name"          : "voluptate veniam",
        "expirationDate": "2015-09-15T00:26:10",
        "recalled"      : false
      },
      {
        "name"          : "irure sunt",
        "expirationDate": "2015-02-12T01:04:32",
        "recalled"      : false
      },
      {
        "name"          : "culpa tempor",
        "expirationDate": "2015-06-17T17:57:54",
        "recalled"      : true
      },
      {
        "name"          : "labore aute",
        "expirationDate": "2016-10-09T03:41:13",
        "recalled"      : true
      },
      {
        "name"          : "labore elit",
        "expirationDate": "2016-09-29T13:41:18",
        "recalled"      : true
      },
      {
        "name"          : "voluptate nulla",
        "expirationDate": "2015-10-22T16:29:52",
        "recalled"      : false
      },
      {
        "name"          : "et ea",
        "expirationDate": "2015-01-23T16:17:55",
        "recalled"      : false
      },
      {
        "name"          : "voluptate ad",
        "expirationDate": "2016-05-15T20:40:22",
        "recalled"      : false
      },
      {
        "name"          : "labore fugiat",
        "expirationDate": "2015-09-24T15:24:27",
        "recalled"      : true
      }
    ]



  }

})();

