'use strict';

describe('Controller:SignUpCtrl', function () {

  // load the controller's module
  beforeEach(module('rex'));
  beforeEach(module('templates'));

  var SignUpCtrl, $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    $httpBackend = $injector.get('$httpBackend');
    SignUpCtrl   = $injector.get('$controller')('SignUpCtrl');
  }));

  it('hits signUp endpoint', function () {
    $httpBackend.whenPOST('/user/create').respond(201, 'a value');

    SignUpCtrl.signUp('user@mail.com', 'helloWOrld@1', 'name');

    $httpBackend.flush();
  });

});
