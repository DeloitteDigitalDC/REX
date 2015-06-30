'use strict';

describe('factory:notify', function () {

  // load the factory's module
  beforeEach(module('rex'));

  var notify, $rootScope;

  // initialize a new instance of the factory before each test
  beforeEach(inject(function ($injector) {
    notify = $injector.get('notify');
    $rootScope = $injector.get('$rootScope');
  }));

  it('condition of test', function () {
    notify.showAlert('Hello World', 'danger');

    expect($rootScope.alert.visible).toBe(true);
    expect($rootScope.alert.msg).toBe('Hello World');
    expect($rootScope.alert.type).toBe('danger');
  });

});
