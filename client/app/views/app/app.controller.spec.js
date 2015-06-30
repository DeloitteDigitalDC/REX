'use strict';

describe('Controller: AppCtrl', function () {

  // load the controller's module
  beforeEach(module('rex'));
  beforeEach(module('templates'));

  var AppCtrl, $state, $rootScope, $cookies, $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    AppCtrl = $injector.get('$controller')('AppCtrl');
    $state = $injector.get('$state');
    $rootScope = $injector.get('$rootScope');
    $cookies = $injector.get('$cookies');
    $httpBackend = $injector.get('$httpBackend');

    $httpBackend.whenGET('/user/simpleLogin:1/details/').respond(200, {
      nickName: 'Foo'
    });

    $httpBackend.whenGET('/user/logout').respond(200);
  }));

  it('should display REX as default title', function () {
    expect(AppCtrl.title).toBe('REX');
  });

  it('should change title to Login', function () {
    $state.go('main.login');

    $rootScope.$digest();

    expect(AppCtrl.title).toBe('Sign In');
  });

  it('should go to cabinet and new home page', inject(function() {
    $cookies.put('token', '1234567890');
    $cookies.put('uid', 'simpleLogin:1');

    $httpBackend.flush();

    $state.go('main.home');

    $rootScope.$digest();

    expect($state.current.name).toBe('main.cabinet');
  }));

  it('should redirect from private page to main.home', inject(function() {
    $cookies.remove('token', '1234567890');
    $cookies.remove('uid', 'simpleLogin:1');

    $state.go('main.cabinet');

    $rootScope.$digest();

    expect($state.current.name).toBe('main.home');
  }));

});
