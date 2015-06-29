'use strict';

describe('Controller:RemoveDrugModalCtrl', function () {

  // load the controller's module
  beforeEach(module('rex'));

  var RemoveDrugModalCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    RemoveDrugModalCtrl = $injector.get('$controller')('RemoveDrugModalCtrl', {
      $modalInstance: {}
    });
  }));

  it('condition of test', function () {

  });

});
