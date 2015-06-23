'use strict';

describe('Controller:UsesCtrl', function () {

  // load the controller's module
  beforeEach(module('rex'));

  var UsesCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    UsesCtrl = $injector.get('$controller')('UsesCtrl');
  }));

  it('condition of test', function () {

  });

});
