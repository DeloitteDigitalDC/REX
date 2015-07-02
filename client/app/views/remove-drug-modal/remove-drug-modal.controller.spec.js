'use strict';

describe('Controller:RemoveDrugModalCtrl', function () {

  // load the controller's module
  beforeEach(module('rex'));

  var RemoveDrugModalCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    RemoveDrugModalCtrl = $injector.get('$controller')('RemoveDrugModalCtrl', {
      $mdDialog: {
        hide: function() {},
        cancel: function() {}
      }
    });
  }));

  it('should submit or cancel without error', function () {
    RemoveDrugModalCtrl.submitDrugForm();

    RemoveDrugModalCtrl.cancel();
  });

});
