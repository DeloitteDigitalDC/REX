'use strict';

describe('factory:user', function () {

  // load the factory's module
  beforeEach(module('rex'));
  beforeEach(module('templates'));

  var user, $httpBackend, $q;

  // initialize a new instance of the factory before each test
  beforeEach(inject(function ($injector) {
    user         = $injector.get('user');
    $httpBackend = $injector.get('$httpBackend');
    $q           = $injector.get('$q');


    var myUser = {
      name: 'Ben',
      age : 125,
      sex : 'male',
      data: {
        nickName: 'Foo'
      }
    };

    //$httpBackend.whenPOST('/user/login').respond(200, myUser);
    //
    //var deferred = $q.defer();
    //deferred.resolve(myUser); //  always resolved, you can do it from your spec
    //spyOn(user, 'getDetails').and.returnValue(deferred.promise);
  }));

  it('should login and get user details', function () {
    //user.login('user@mail.com', 'helloWOrld@1');
    //
    //$httpBackend.flush();
    //
    //user.getDetails().then(function (data) {
    //  expect(data.name).toBe('Ben');
    //});
  });

  it('should create and account and get user details', function () {
    //$httpBackend.whenPOST('/user/create').respond(200, {
    //  name: 'Lucy',
    //  age : 25,
    //  data: {
    //    nickName: 'foo'
    //  }
    //});
    //
    //user.createUser('user@mail.com', 'helloWOrld@1', 'Lucy');
    //
    //$httpBackend.flush();
  });
});
