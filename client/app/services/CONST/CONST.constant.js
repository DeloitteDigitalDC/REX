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

  var base                 = '/fda',
      drug                 = base + '/drug',
      drugEvents           = drug + '/event.json/',
      drugLabel            = drug + '/label.json/',
      drugEnforcement      = drug + '/enforcement.json/';
  var loginErrorMessage    = 'Incorrect username or password',
      signUpSuccessMessage = 'Successfully created account',
      signUpErrorMessage   = 'There was a problem creating this account';


  angular.module('rex').constant('CONST', {
    drug  : {
      event      : drugEvents,
      label      : drugLabel,
      enforcement: drugEnforcement
    },
    string: {
      loginError   : loginErrorMessage,
      signUpSuccess: signUpSuccessMessage,
      signUpError  : signUpErrorMessage
    }
  });

})();

