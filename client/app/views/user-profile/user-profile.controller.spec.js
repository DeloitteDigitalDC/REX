'use strict';

describe('Controller:UserProfileCtrl', function () {

  // load the controller's module
  beforeEach(module('rex'));
  beforeEach(module('templates'));

  var UserProfileCtrl, $httpBackend, $controller;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    $controller = $injector.get('$controller');
    $httpBackend = $injector.get('$httpBackend');

    $injector.get('$cookies').put('uid', 'dblue@foo.com');
  }));

  it('should initiate and bring in the user', function () {
    UserProfileCtrl = $controller('UserProfileCtrl');

    $httpBackend.whenGET('/user/dblue@foo.com/details/').respond({
      data: {
        nickName: 'George'
      }
    });

    $httpBackend.flush();

    expect(UserProfileCtrl.userDetails.nickName).toBe('George');
    expect(UserProfileCtrl.userDetails.pregnant).toBeFalsy();
  });


  it('should set the users pregnant status to true', function () {
    UserProfileCtrl = $controller('UserProfileCtrl');

    $httpBackend.whenGET('/user/dblue@foo.com/details/').respond({
      data: {
        nickName: 'George',
        pregnant: 1
      }
    });

    $httpBackend.flush();

    expect(UserProfileCtrl.userDetails.nickName).toBe('George');
    expect(UserProfileCtrl.userDetails.pregnant).toBe(true);
  });

  it('should call the user.setDetails method', inject(function() {
    UserProfileCtrl.updateUser();
  }));

});
