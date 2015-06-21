'use strict';

describe('factory:user', function () {

  // load the factory's module
  beforeEach(module('rex'));

  var user, $httpBackend;

  // initialize a new instance of the factory before each test
  beforeEach(inject(function ($injector) {
    user = $injector.get('user');
    $httpBackend = $injector.get('$httpBackend');
  }));

  it('should login and get user details', function () {
    $httpBackend.whenPOST('/user/login').respond(200, {
      name: 'Ben',
      age: 125,
      sex: 'male'
    });

    user.login('user@mail.com', 'helloWOrld@1');

    $httpBackend.flush();
    
    expect(user.getUser().name).toBe('Ben');
  });

});
