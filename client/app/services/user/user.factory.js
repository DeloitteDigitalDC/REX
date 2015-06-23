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

  function user($http, $state, notify, CONST, $cookies, $q) {
    var messages = CONST.messages,
        userObj  = {};

    return {
      login     : login,
      logout    : logout,
      createUser: createUser,
      details   : details
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

        userObj = data;

        $state.go('main.cabinet');
      });

      promise.error(function () {
        notify.showAlert(CONST.messages.loginError, 'danger');
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
      $cookies.remove('jwt');
      $cookies.remove('uid');
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
      var deferred = $q.defer();

      if(userObj) {
        deferred.resolve(userObj.data);
      }
      else {
        return $http.get('/user/' + $cookies.get('uid') + '/details/');
      }

      return deferred.promise;
    }
  }

})();