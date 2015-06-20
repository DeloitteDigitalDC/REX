'use strict';

/**
 * @ngdoc factory
 *
 * @name user
 *
 * @description
 * Factory for user things -- create user, login/authentication
 */
(function() {

  angular
    .module('rex')
    .factory('user', user);

  function user($http, $log) {
    var userObj = {};

    return {
      login: login,
      createUser: createUser,
      getUser: getUser
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
      var promise = $http.post('/user/login', { username: username, password: password });

      promise.success(function(data) {
        userObj = data;
      });

      promise.error(function(err) {
        $log.error(err);
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
    function createUser(body){
      return $http.post('/user/createUser', body);
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


