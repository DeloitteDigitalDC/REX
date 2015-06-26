'use strict';

describe('Controller:UserProfileCtrl', function () {

  // load the controller's module
  beforeEach(module('rex'));

  var UserProfileCtrl, $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    $httpBackend = $injector.get('$httpBackend');
    UserProfileCtrl = $injector.get('$controller')('UserProfileCtrl');

  }));

  it('condition of test', function () {

  });

});
