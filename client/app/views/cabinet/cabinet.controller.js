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
            recalled : '{{bool()}}',
            id : '{{index(1)}}'
           }
         ]
     */
    vm.drugs = [
      {
        "name": "Tylenol",
        "expirationDate": "2016-05-02T05:28:07",
        "recalled": false,
        "id": 1
      },
      {
        "name": "reprehenderit cupidatat",
        "expirationDate": "2015-10-29T16:00:55",
        "recalled": false,
        "id": 2
      },
      {
        "name": "adipisicing tempor",
        "expirationDate": "2016-03-17T05:41:15",
        "recalled": false,
        "id": 3
      },
      {
        "name": "Lorem magna",
        "expirationDate": "2016-02-28T16:18:23",
        "recalled": true,
        "id": 4
      },
      {
        "name": "excepteur quis",
        "expirationDate": "2016-12-31T03:36:19",
        "recalled": false,
        "id": 5
      },
      {
        "name": "reprehenderit non",
        "expirationDate": "2015-08-30T10:51:46",
        "recalled": true,
        "id": 6
      },
      {
        "name": "Lorem enim",
        "expirationDate": "2016-08-19T05:43:21",
        "recalled": false,
        "id": 7
      },
      {
        "name": "deserunt deserunt",
        "expirationDate": "2016-07-23T07:29:34",
        "recalled": true,
        "id": 8
      },
      {
        "name": "proident dolore",
        "expirationDate": "2015-07-10T17:40:21",
        "recalled": false,
        "id": 9
      },
      {
        "name": "deserunt laboris",
        "expirationDate": "2016-12-09T07:01:20",
        "recalled": false,
        "id": 10
      }
    ]



  }

})();

