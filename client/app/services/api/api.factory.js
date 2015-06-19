'use strict';

/**
 * @ngdoc factory
 *
 * @name api
 *
 * @description
 * Factory for vmc
 */
(function() {

  angular
    .module('rex')
    .factory('api', api);

  function api() {
    var base = '/fda',
        drug = base + '/drug',
        drugEvents = drug + '/event.json/',
        drugLabel = drug + '/label.json/',
        drugEnforcement = drug + '/enforcement.json/';

    return {
      drug: {
        event: drugEvents,
        label: drugLabel,
        enforcement: drugEnforcement
      }
    };
  }

})();

