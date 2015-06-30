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

    $httpBackend.whenPOST('/user/create').respond(201);

    $httpBackend.whenPOST('/user/login').respond(200, 'foo@username.com');

    $httpBackend.whenGET('/user/foo@username.com/details/').respond(200, {
      data: {
        nickName: 'Danny',
        drugs: [{
          name: 'Advil'
        }]
      }
    });
  }));

  it('hits signUp endpoint', function () {
    SignUpCtrl.signUp();

    $httpBackend.flush();
  });

  it('should show an error message', function () {
    SignUpCtrl.signUpForm.$invalid = true;

    SignUpCtrl.signUp();

    $httpBackend.flush();
  });

});
