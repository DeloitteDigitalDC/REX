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
      drugEvents      = drug + '/event.json/',
      drugLabel       = drug + '/label.json/',
      drugEnforcement = drug + '/enforcement.json/';

  // restricted route paths
  var shared          = ['/login', '/sign-up'],
      publicPaths     = ['/'].concat(shared),
      logInRestricted = [].concat(shared);

  angular.module('rex').constant('CONST', {

    drug: {
      event      : drugEvents,
      label      : drugLabel,
      enforcement: drugEnforcement
    },

    paths: {
      shared         : shared,
      publicPaths    : publicPaths,
      logInRestricted: logInRestricted
    },

    messages: {
      'INVALID_USER'    : 'Incorrect username',
      'INVALID_PASSWORD': 'Invalid password',
      'EMAIL_TAKEN'     : 'There is already an account with this email',
      'USER_CREATED'    : 'Successfully created account ',
      'LOGGED_IN'       : 'Logged in as '
    }
  });

})();

