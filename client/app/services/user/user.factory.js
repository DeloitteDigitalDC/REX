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

  function user($http, $log, $state, notify, CONST) {
    var userObj = {};

    return {
      login     : login,
      createUser: createUser,
      getUser   : getUser
    };

    /* istanbul ignore next: Not testing functions that simply wrap http calls. Testing in controllers. */

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
        userObj = data;
        $state.go('main.cabinet');
      });

      promise.error(function () {
        notify.showAlert(CONST.string.loginError, 'danger');
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
     * @param {Object} body
     */
    function createUser(username, password, firstName) {
      var promise = $http.post('/user/create', {username: username, password: password, firstName: firstName});

      promise.success(function (data) {
        userObj = data;
        $state.go('main.cabinet');

      });

      promise.error(function () {
        notify.showAlert(CONST.string.signUpError, 'danger');
      });
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

  }

})();


