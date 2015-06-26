'use strict';

describe('Controller:UsesCtrl', function () {

  // load the controller's module
  beforeEach(module('rex'));
  beforeEach(module('templates'));

  var UsesCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    UsesCtrl = $injector.get('$controller')('UsesCtrl');
  }));

  //nothing in the controller to test
  it('condition of test', function () {


  });

});
