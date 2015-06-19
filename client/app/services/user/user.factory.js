'use strict';

/**
 * @ngdoc factory
 *
 * @name userService
 *
 * @description
 * Factory for user things -- create user, login/authentication
 */
(function() {

  angular
    .module('rex')
    .factory('user', user);

  function user($http) {
    return {
      login: login,
      createUser: createUser
    };

    /* istanbul ignore next: Not testing functions that simply wrap http calls. Testing in controllers. */

    /**
     * @memberof userService
     * @param {Object} body - contains username and password
     * @return {HttpPromise}
     * @description logins a user
     */
    function login(body) {
      return $http.post('/user/login', body);
    }

    /**
     * @memberof userService
     * @param {Object} body
     * @return {HttpPromise}
     * @description create a new user
     */
    function createUser(body){
      return $http.post('/user/createUser', body);
    }

  }

})();

