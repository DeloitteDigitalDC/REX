describe('Controller:LoginCtrl', function () {

  // load the controller's module
  beforeEach(module('rex'));

  var LoginCtrl;
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector ) {
    $httpBackend = $injector.get('$httpBackend');
    $httpBackend.whenPOST('/user/login').respond(201, 'a value');
    LoginCtrl = $injector.get('$controller')('LoginCtrl');
    $httpBackend.flush();
  }));

  it('condition of test', function () {


  });

});
