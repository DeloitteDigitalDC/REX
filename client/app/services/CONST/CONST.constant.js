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
    }
  });

})();

