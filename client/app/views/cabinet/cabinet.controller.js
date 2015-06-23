'use strict';

/**
 * @ngdoc controller
 *
 * @name CabinetCtrl
 *
 * @description
 * Controller for rex
 */
(function () {

  angular
    .module('rex')
    .controller('CabinetCtrl', CabinetCtrl);

  function CabinetCtrl(drug, util) {
    var vm = this;

    var recalls;

    function init() {
      queryRecalls();
    }
    /**
     * @name queryRecalls
     *
     * @memberof CabinetCtrl
     *
     * @description create string and query for recalls
     *
     */
    function queryRecalls() {
      var query = util.createSearchQry(vm.drugs);
      //TODO: add status:ongoing -- this isnt working with our API right now
      // var searchTerm = '(' + _.trimRight(query, '+') +')+AND+status:Ongoing';
       var searchTerm = '(' + _.trimRight(query, '+') +')';
      drug.enforce({search: searchTerm, limit: 100}).success(function (data) {
        console.log('enforce', data);
        recalls = data.results;
        compareRecalls();
      });
    }

    /**
     * @name compareRecalls
     *
     * @memberof CabinetCtrl
     *
     * @description loop through each of the users drugs and check if it matches one of the recalled drugs
     *
     */
    function compareRecalls(){
      _.forEach(vm.drugs, function(drug, idx){
        _.forEach(recalls, function(recall){
          if(recall.openfda.brand_name){
            if(recall.openfda.brand_name[0] === drug.name){
              vm.drugs[idx].recalled = true;
              console.log('drug match name', drug.name);
            }
          }
        })
      })
    }


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
    //TODO: get list of drugs from out DB in user data
    vm.drugs = [
      {
        "name"          : "Tylenol",
        "expirationDate": "2016-05-02T05:28:07",
        "id"            : 1
      },
      {
        "name"          : "Advil", //ADVIL PM comes back but not matching our check
        "expirationDate": "2015-10-29T16:00:55",
        "id"            : 2
      },
      {
        "name"          : "OXYCODONE ACETAMINOPHEN", //OXYCODONE AND ACETAMINOPHEN comes back (and others) but not counting in our match
        "expirationDate": "2016-03-17T05:41:15",
        "id"            : 3
      },
      {
        "name"          : "NIACIN",
        "expirationDate": "2016-02-28T16:18:23",
        "id"            : 4
      }
    ];

    init();

  }

})();

