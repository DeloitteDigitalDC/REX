'use strict';

describe('Controller: HomeCtrl', function () {

  // load the controller's module
  beforeEach(module('rex'));

  var HomeCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    HomeCtrl = $injector.get('$controller')('HomeCtrl');
  }));

  it('should do nothing bc there is nothing to test', function () {

  });

});
