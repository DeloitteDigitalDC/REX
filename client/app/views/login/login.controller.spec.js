describe('Controller:LoginCtrl', function () {

  // load the controller's module
  beforeEach(module('rex'));

  var LoginCtrl, $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector ) {
    $httpBackend = $injector.get('$httpBackend');
    LoginCtrl = $injector.get('$controller')('LoginCtrl');
  }));

  it('condition of test', function () {
    $httpBackend.whenPOST('/user/login').respond(201, 'a value');

    LoginCtrl.login('user@mail.com', 'helloWOrld@1');

    $httpBackend.flush();
  });

});
