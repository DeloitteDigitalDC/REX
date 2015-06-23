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

  var base            = '/fda',
      drug            = base + '/drug',
      drugEvents      = drug + '/event.json/',
      drugLabel       = drug + '/label.json/',
      drugEnforcement = drug + '/enforcement.json/';

  angular.module('rex').constant('CONST', {
    drug: {
      event      : drugEvents,
      label      : drugLabel,
      enforcement: drugEnforcement
    },

    messages: {
      loginError   : 'Incorrect username or password',
      signUpSuccess: 'Successfully created account',
      signUpError  : 'There was a problem creating this account'
    }
  });

})();

