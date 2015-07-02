'use strict';

/**
 * @ngdoc constant
 *
 * @name CONST
 *
 * @description
 * Constants and other immutable stuff
 */

(function () {

  // fda api paths
  var base            = '/fda',
      drug            = base + '/drug',
      drugEvents      = drug + '/event/',
      drugLabel       = drug + '/label/',
      drugEnforcement = drug + '/enforcement/';

  angular.module('rex').constant('CONST', {

    drug: {
      event      : drugEvents,
      label      : drugLabel,
      enforcement: drugEnforcement
    },

    messages: {
      'INVALID_USER'    : 'Incorrect username',
      'INVALID_PASSWORD': 'Invalid password',
      'EMAIL_TAKEN'     : 'There is already an account with this email',
      'USER_CREATED'    : 'Successfully created account ',
      'LOGGED_IN'       : 'Logged in as ',
      'INVALID_EMAIL'   : 'Invalid email'
    },

    months: [
      {id: '0', label: 'January'},
      {id: '1', label: 'February'},
      {id: '2', label: 'March'},
      {id: '3', label: 'April'},
      {id: '4', label: 'May'},
      {id: '5', label: 'June'},
      {id: '6', label: 'July'},
      {id: '7', label: 'August'},
      {id: '8', label: 'September'},
      {id: '9', label: 'October'},
      {id: '10', label: 'November'},
      {id: '11', label: 'December'}
    ]
  });

})();

