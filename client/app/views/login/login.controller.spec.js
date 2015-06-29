describe('Controller:LoginCtrl', function () {

  // load the controller's module
  beforeEach(module('rex'));
  beforeEach(module('templates'));

  var LoginCtrl, $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector ) {
    $httpBackend = $injector.get('$httpBackend');
    LoginCtrl = $injector.get('$controller')('LoginCtrl');

    $httpBackend.whenGET('/user/test@test.com/details/').respond(200, {
      data: {
        nickName: 'Foo'
      }
    });
  }));

  it('hits login endpoint', function () {
    $httpBackend.whenPOST('/user/login').respond(200, 'foo');

    LoginCtrl.login('user@mail.com', 'helloWOrld@1');

    $httpBackend.flush();
  });

});
