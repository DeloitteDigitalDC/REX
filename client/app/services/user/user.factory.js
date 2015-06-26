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
        cookies  = ['uid', 'token'],
        userObj  = {};

    return {
      login          : login,
      logout         : logout,
      createUser     : createUser,
      details        : details,
      getCabinetDrugs: getCabinetDrugs,
      addCabinetDrug : addCabinetDrug,
      addDrug        : addDrug,
      deleteCabinetDrug: deleteCabinetDrug
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
          userObj.data = data;
        });

        return deferred;
      }
    }

    /**
     *
     * return just the drug data from the cached user object.
     *
     * @memberof user
     */
    function getCabinetDrugs() {
      userObj = userObj || {};

      userObj.data = userObj.data || {};

      console.log(userObj);

      return userObj.data.drugs;
    }

    /**
     * Add a drug to your drug cabinet. Launches a modal.
     *
     * @memberof user
     *
     * @param {Drug} drug - the drug to add to your cabinet
     */
    function addCabinetDrug(drug) {
      var modal = modals.addDrug(drug).result;

      modal.then(function () {
        addDrug(drug);

        modal.close();
      });

      return modal;
    }

    /**
     * Saves the drug to the user's cabinet
     *
     * @param {Drug} drug - the drug to add to your cabinet
     *
     * @return {IHttpPromise<T>|*|{}}
     */
    function addDrug(drug) {
      var promise = $http.post('/user/' + $cookies.get('uid') + '/cabinet', drug);

      userObj.data.drugs = userObj.data.drugs || {};

      promise.success(function (res) {
        userObj.data.drugs[res.name] = drug;

        notify.showAlert('Drug successfully added to you cabinet', 'success');
      });

      promise.error(function () {
        notify.showAlert('Error adding drug', 'danger');
      });

      return promise;
    }
    
    /**
     * Delete a drug from your drug cabinet.
     *
     * @memberof user
     *
     * @param {Object} drug - the drug to delete from your cabinet
     * @param {String} drug.name - the name of the drug
     */
    function deleteCabinetDrug(drug, drugId) {
      $rootScope.loading = true;

     var promise = $http.delete('/user/' + $cookies.get('uid') + '/cabinet/'+ drugId);

      userObj.data.drugs = userObj.data.drugs || {};

      promise.success(function (res) {

        delete userObj.data.drugs[drugId];

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
      console.log(userObj);

      $state.go('main.cabinet', {}, {reload: true});
    }
  }

})();
