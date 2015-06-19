'use strict';
 describe('Controller:LoginCtrl', function () { 

  // load the controller's module
  beforeEach(module('rex'));

   var LoginCtrl; 
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    LoginCtrl = $injector.get('$controller')('LoginCtrl');
  }));

  it('condition of test', function () {

  });

});
