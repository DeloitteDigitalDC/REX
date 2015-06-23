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
      getUser   : getUser
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

        $state.go('main.cabinet');

        $http.get('/user/details/' + data.uid + '/').success(function(data) {
          console.log(data);
        });
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
        notify.showAlert(messages.signUpSuccess, 'danger');
        $state.go('main.cabinet');
      });

      promise.error(function () {
        notify.showAlert(CONST.messages.signUpError, 'danger');
      });

      return promise;
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


