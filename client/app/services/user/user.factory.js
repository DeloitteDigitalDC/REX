'use strict';

/**
 * @ngdoc factory
 *
 * @name user
 *
 * @description
 * Factory for managing users.
 */

/**
 * @typedef {Object} Drug
 *
 * A drug in the user cabinet
 *
 * @property {String} name - the name of the drug
 * @property {String} [notes] - notes to be added with the drug
 * @property {Date} [expirationDate] - the expiration date of the drug
 */
(function () {

  angular
    .module('rex')
    .factory('user', user);

  function user($http, $state, modals, notify, CONST, $cookies, $q, $rootScope) {
    var messages = CONST.messages,
        userObj  = {};

    return {
      login            : login,
      logout           : logout,
      createUser       : createUser,
      getDetails       : getDetails,
      setDetails       : setDetails,
      getCabinetDrugs  : getCabinetDrugs,
      addCabinetDrug   : addCabinetDrug,
      addDrug          : addDrug,
      deleteCabinetDrug: deleteCabinetDrug,
      editDrug         : editDrug
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
      var promise = $http.post('/user/login', {username: username, password: password});

      promise.success(function (data) {
        _authenticate(data);
      });

      promise.error(function (data, status) {
        if (status === 401) {
          notify.showAlert('Incorrect username or password', 'danger');
        }
      });

      return promise;
    }

    /**
     * Log the user out by removing the login cookies from browser
     *
     * @memberof user
     */
    function logout() {
      var logoutPromise = $http.get('/user/logout');

      logoutPromise.success(function () {
        $cookies.remove('uid');
        $cookies.remove('connect.sid');

        userObj = {};

        $state.go('main.home', {}, {reload: true});
      });
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
      var promise = $http.post('/user/create', {username: username, password: password, firstName: firstName});

      promise.success(function () {
        login(username, password);
      });

      promise.error(function (data, status) {
        if (status === 400) {
          notify.showAlert('Username already exists', 'danger');
        }
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
     * user.getDetails().then(function (data) {
     *   console.log(data);
     * })
     */
    function getDetails() {
      var deferred;

      if (userObj.data) {
        deferred = $q.defer();

        deferred.resolve(userObj);

        return deferred.promise;
      }
      else {
        deferred = $http.get('/user/' + $cookies.get('uid') + '/details/');

        deferred.success(function (data) {
          userObj = data.data;
        });

        return deferred;
      }
    }

    /**
     * set details for a given user
     *
     * @memberof user
     *
     * @example
     * user.setDetails().then(function (data) {
     *   console.log(data);
     * })
     */
    function setDetails(details) {
      var deferred = $http.patch('/user/' + $cookies.get('uid') + '/details/', details);

      deferred.success(function () {
        _.extend(userObj.pregnant, details.pregnant); // attach the new data to the userObj
      });

      return deferred;
    }

    /**
     * return just the drug data from the cached user object.
     *
     * @memberof user
     */
    function getCabinetDrugs() {
      userObj = userObj || {};

      userObj.drugs = userObj.drugs || [];

      return userObj.drugs;
    }

    /**
     * Add a drug to your drug cabinet. Launches a modal.
     *
     * @memberof user
     *
     * @param {Object} evt - the click event
     * @param {Drug} drug - the drug to add to your cabinet
     * @param {Function} [cb] - optional callback
     */
    function addCabinetDrug(evt, drug, cb) {
      var modal = modals.addDrug(evt, drug);

      modal.then(function (data) {
        addDrug(data, cb);
      });

      return modal;
    }

    /**
     * Saves the drug to the user's cabinet
     *
     * @param {Drug} drug - the drug to add to your cabinet
     * @param {Function} [cb] - optional callback
     *
     * @return {IHttpPromise<T>|*|{}}
     */
    function addDrug(drug, cb) {
      $rootScope.loading = true;

      var promise   = $http.post('/user/' + $cookies.get('uid') + '/cabinet', drug);
      console.info(userObj);
      userObj.drugs = userObj.drugs || [];

      promise.success(function () {
        userObj.drugs.push(drug);

        $rootScope.loading = false;

        if (cb) {
          cb();
        }

        notify.showAlert('Drug successfully added to you cabinet', 'success');
      });

      promise.error(function () {
        $rootScope.loading = false;

        notify.showAlert('Error adding drug', 'danger');
      });

      return promise;
    }

    /**
     * Saves the drug to the user's cabinet
     *
     * @param {Drug} drug - the drug to add to your cabinet
     * @param {Function} [cb] - optional callback
     *
     * @return {IHttpPromise<T>|*|{}}
     */
    function editDrug(drug, cb) {
      $rootScope.loading = true;

      var promise   = $http.patch('/user/' + $cookies.get('uid') + '/cabinet/' + drug.id, drug);
      console.info(userObj);
      userObj.drugs = userObj.drugs || [];

      promise.success(function () {
        $rootScope.loading = false;

        if (cb) {
          cb();
        }

        notify.showAlert('Drug successfully added to you cabinet', 'success');
      });

      promise.error(function () {
        $rootScope.loading = false;

        notify.showAlert('Error adding drug', 'danger');
      });

      return promise;
    }

    /**
     * Delete a drug from your drug cabinet.
     *
     * @memberof user
     *
     * @param {Object} drugId - the firebaseID of the drug to delete from your cabinet
     * @param {Function} [cb] - callback function
     */
    function deleteCabinetDrug(drugId, cb) {
      $rootScope.loading = true;

      var promise = $http.delete('/user/' + $cookies.get('uid') + '/cabinet/' + drugId);

      userObj.drugs = userObj.drugs || {};

      promise.success(function () {
        _.remove(userObj.drugs, function (drug) {
          return drug.id === drugId;
        });

        if (cb) {
          cb();
        }

        notify.showAlert('Drug successfully removed from you cabinet', 'success');

        $rootScope.loading = false;
      });

      promise.error(function () {
        notify.showAlert('Error deleting drug', 'danger');

        $rootScope.loading = false;
      });

      return promise;
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
      if (data.code) {
        notify.showAlert(messages[data.code], 'danger');

        $rootScope.loading = false;
      }
      else {
        _userLoggedIn(data.toLowerCase());

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
      var expireDate = moment().add(30, 'minutes').toDate();

      $cookies.put('uid', data, {expires: expireDate});

      getDetails();

      $state.go('main.cabinet', {}, {reload: true});
    }
  }

})();
