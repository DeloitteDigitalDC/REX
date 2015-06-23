'use strict';

/**
 * @ngdoc factory
 *
 * @name user
 *
 * @description
 * Factory for managing users.
 */
(function () {

  angular
    .module('rex')
    .factory('user', user);

  function user($http, $state, notify, CONST, $cookies) {
    var messages = CONST.messages,
        userObj  = {};

    return {
      login     : login,
      createUser: createUser,
      getUser   : getUser,
      details   : details,
      getCabinetDrugs     : getCabinetDrugs
    };

    /**
     * @name login
     *
     * @memberof user
     *
     * @description logs in a user
     *
     * @param {String} username - the username
     * @param {String} password - the password
     */
    function login(username, password) {
      var promise = $http.post('/user/login', {username: username, password: password});

      promise.success(function (data) {
        $cookies.put('jwt', data.token);
        $cookies.put('uid', data.uid);

        $state.go('main.cabinet');
      });

      promise.error(function () {
        notify.showAlert(CONST.messages.loginError, 'danger');
      });

      return promise;
    }

    /**
     * @name createUser
     *
     * @memberof user
     *
     * @description create a new user
     *
     * @param {String} username
     * @param {String} password
     * @param {String} firstName
     */
    function createUser(username, password, firstName) {
      var promise = $http.post('/user/create', {username: username, password: password, firstName: firstName});

      promise.success(function (data) {
        userObj = data;
        notify.showAlert(messages.signUpSuccess, 'success');
        $state.go('main.cabinet');

        console.log(data);
      });

      promise.error(function () {
        notify.showAlert(CONST.messages.signUpError, 'danger');
      });

      return promise;
    }

    /**
     * @name details
     *
     * @memberof user
     *
     * @description
     * returns the use details of the given uid.
     */
    function details() {
      return $http.get('/user/' + $cookies.get('uid') + '/details/');
    }

    /**
     * TODO: need to try to fetch user from firebase if not object stored
     * @name getUser
     *
     * @memberof user
     */
    function getUser() {
      return userObj;
    }


    /**
     * TODO: need to try to get this data from firebase
     * @name getCabinetDrugs
     *
     * @memberof user
     */
    function getCabinetDrugs(){
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
      var drugs = [
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
      return drugs;
    }

  }

})();


