'use strict';

describe('Controller:AddDrugModalCtrl', function () {

  // load the controller's module
  beforeEach(module('rex'));

  var AddDrugModalCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    AddDrugModalCtrl = $injector.get('$controller')('AddDrugModalCtrl', {
      drugToAdd: {
        name: 'Advil'
      },
      $modalInstance: {}
    });
  }));

  it('condition of test', function () {

  });

});
