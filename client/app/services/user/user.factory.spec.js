'use strict';

describe('factory:user', function () {

  // load the factory's module
  beforeEach(module('rex'));
  beforeEach(module('templates'));

  var user, $httpBackend;

  // initialize a new instance of the factory before each test
  beforeEach(inject(function ($injector) {
    user         = $injector.get('user');
    $httpBackend = $injector.get('$httpBackend');

    var myUser = {
      name: 'Ben',
      age : 125,
      sex : 'male'
    };

    var deferred = $q.defer();
    deferred.resolve('somevalue'); //  always resolved, you can do it from your spec
    spyOn(user, 'removeAndGetNext').and.returnValue(deferred.promise);

  }));

  it('should login and get user details', function () {

    $httpBackend.whenPOST('/user/login').respond(200, {
      name: 'Ben',
      age : 125,
      sex : 'male'
    });

    user.login('user@mail.com', 'helloWOrld@1');

    $httpBackend.flush();

    user.details().then(function(data) {
      console.log(data);

      expect(data.name).toBe('Ben');
    });
  });

  it('should create and account and get user details', function () {
    $httpBackend.whenPOST('/user/create').respond(200, {
      name: 'Lucy',
      age : 25
    });

    user.createUser('user@mail.com', 'helloWOrld@1', 'Lucy');

    $httpBackend.flush();
  });
});
