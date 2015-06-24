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
    var messages = CONST.messages,
        cookies  = ['uid', 'token'],
        userObj  = {};

    return {
      login          : login,
      logout         : logout,
      createUser     : createUser,
      details        : details,
      getCabinetDrugs: getCabinetDrugs
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
      $rootScope.loading = true;

      var promise = $http.post('/user/login', {username: username, password: password});

      promise.success(function (data) {
        _authenticate(data);
      });

      return promise;
    }

    /**
     * @name logout
     *
     * @memberof user
     *
     * @description log the user out by removing the login cookies from browser.
     */
    function logout() {
      _.forEach(cookies, function (cookie) {
        $cookies.remove(cookie);
      });
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
      $rootScope.loading = true;

      var promise = $http.post('/user/create', {username: username, password: password, firstName: firstName});

      promise.success(function (data) {
        _authenticate(data);
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
      var deferred;

      if (userObj.data) {
        deferred = $q.defer();

        deferred.resolve(userObj);

        return deferred.promise;
      }
      else {
        deferred = $http.get('/user/' + $cookies.get('uid') + '/details/');

        deferred.success(function (data) {
          user.data = data;
        });

        return deferred;
      }
    }

    /**
     * TODO: need to try to get this data from firebase
     * @name getCabinetDrugs
     *
     * @memberof user
     */
    function getCabinetDrugs() {
      return userObj.data.drugs;
    }

    /**
     * @name _authenticate
     *
     * @memberof user
     *
     * @param {Object} data
     *
     * @private
     */
    function _authenticate(data) {
      if (data.code) {
        notify.showAlert(CONST.messages[data.code], 'danger');

        $rootScope.loading = false;
      }
      else {
        _userLoggedIn(data);

        notify.showAlert(messages[data.success] + userObj.data.nickName, 'success');

        $rootScope.loading = false;
      }
    }

    /**
     * @name _userLoggedIn
     *
     * @memberof {Object} user
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

      $state.go('main.cabinet');
    }
  }

})();
