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

  function user($http, $state, notify, CONST, $cookies, $q, $rootScope) {
    var cookies = ['uid', 'token'],
        userObj = {};

    return {
      login          : login,
      logout         : logout,
      createUser     : createUser,
      details        : details,
      getCabinetDrugs: getCabinetDrugs,
      addCabinetDrug : addCabinetDrug
    };

    /**
     * logs in a user
     *
     * @memberof user
     *
     * @param {String} username - the username
     * @param {String} password - the password
     */
    function login(username, password) {
      $rootScope.loading = true;

      var promise = $http.post('/user/login', {username: username, password: password});

      promise.success(function (data) {
        _authenticate(data);
      });

      return promise;
    }

    /**
     * Log the user out by removing the login cookies from browser
     *
     * @memberof user
     */
    function logout() {
      _.forEach(cookies, function (cookie) {
        $cookies.remove(cookie);
      });

      $state.go('main.home', {}, {reload: true});
    }

    /**
     * Create a new user.
     *
     * @param {String} username
     * @param {String} password
     * @param {String} firstName
     *
     * @memberof user
     */
    function createUser(username, password, firstName) {
      $rootScope.loading = true;

      var promise = $http.post('/user/create', {username: username, password: password, firstName: firstName});

      promise.success(function (data) {
        console.log(data);

        _authenticate(data);
      });

      return promise;
    }

    /**
     * returns the use details of the given uid.
     * Will either return the user details stored in memory or fetch from the server.
     *
     * @memberof user
     *
     * @example
     * user.details().then(function (data) {
     *   console.log(data);
     * })
     */
    function details() {
      var deferred;

      if (userObj.data) {
        deferred = $q.defer();

        deferred.resolve(userObj);

        return deferred.promise;
      }
      else {
        deferred = $http.get('/user/' + $cookies.get('uid') + '/details/');

        deferred.success(function (data) {
          userObj.data = data.data;
        });

        return deferred;
      }
    }

    /**
     * @TODO need to try to get this data from firebase
     *
     * return just the drug data from the cached user object.
     *
     * @memberof user
     */
    function getCabinetDrugs() {
      return userObj.data.drugs;
    }

    /**
     * Add a drug to your drug cabinet.
     *
     * @memberof user
     *
     * @param {Object} drug - the drug to add to your cabinet
     * @param {String} drug.name - the name of the drug
     */
    function addCabinetDrug(drug) {
      return $http.post('/user/' + $cookies.get('uid') + '/cabinet', drug);
    }


    /**
     * Authenticate the user with the browser.
     * Displays the correct alert message and sets loadings to false.
     *
     * @memberof user
     *
     * @param {Object} data - the data returned from the login call.
     *
     * @private
     */
    function _authenticate(data) {
      console.log(data.code);
      if (data.code) {
        //notify.showAlert(messages[data.code], 'danger');

        $rootScope.loading = false;
      }
      else {
        _userLoggedIn(data);

        $rootScope.loading = false;
      }
    }

    /**
     * Sets the cookies for the authenticated user.
     *
     * @memberof {Object} user - the user object returned from the login call.
     *
     * @private
     */
    function _userLoggedIn(data) {
      var expireDate = new Date();

      expireDate.setDate(expireDate.getDate() + 1);

      _.forEach(cookies, function (cookie) {
        $cookies.put(cookie, data[cookie], {expires: expireDate});
      });

      userObj = data;

      $state.go('main.cabinet', {}, {reload: true});
    }
  }

})();
