'use strict';

describe('Controller: AppCtrl', function () {

  // load the controller's module
  beforeEach(module('rex'));
  beforeEach(module('templates'));

  var AppCtrl, $state, $rootScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    AppCtrl = $injector.get('$controller')('AppCtrl');
    $state = $injector.get('$state');
    $rootScope = $injector.get('$rootScope');
  }));

  it('should display REX as default title', function () {
    expect(AppCtrl.title).toBe('REX');
  });

  it('should change title and headerState to Login/login', function () {
    $state.go('main.login');

    $rootScope.$digest();

    expect(AppCtrl.title).toBe('Login');
    expect(AppCtrl.headerState).toBe('login');
  });

});
