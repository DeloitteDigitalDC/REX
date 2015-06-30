describe('Controller:LoginCtrl', function () {

  // load the controller's module
  beforeEach(module('rex'));
  beforeEach(module('templates'));

  var LoginCtrl, $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector ) {
    $httpBackend = $injector.get('$httpBackend');
    LoginCtrl   = $injector.get('$controller')('LoginCtrl');

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

  it('hits login endpoint', function () {
    LoginCtrl.login();

    $httpBackend.flush();
  });

});
