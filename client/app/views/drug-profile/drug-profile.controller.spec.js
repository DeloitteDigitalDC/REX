'use strict';

describe('Controller:DrugProfileCtrl', function () {

  // load the controller's module
  beforeEach(module('rex'));

  var DrugProfileCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    DrugProfileCtrl = $injector.get('$controller')('DrugProfileCtrl');
  }));

  //nothing really to test in this controller
  it('condition of test', function () {

  });

});
