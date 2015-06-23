'use strict';

describe('directive:app-header', function () {

  // load the directive's module and view
  beforeEach(module('rex'));
  beforeEach(module('templates'));

  var element, scope;

  // Initialize a mock scope
  beforeEach(inject(function ($injector) {
    scope = $injector.get('$rootScope').$new();
  }));

  // compile the element to be tested
  it('should be have the state of login', inject(function ($compile) {
    element = angular.element('<app-header state="\'login\'"></app-header>');
    element = $compile(element)(scope);
    scope.$apply();

    var login = element.find('section').find('section').find('section');

    expect(element.isolateScope().state).toBe('login');
    expect(login.hasClass('login')).toBe(true);
  }));

  it('state should undefined/default', inject(function ($compile) {
    element = angular.element('<app-header></app-header>');
    element = $compile(element)(scope);
    scope.$apply();

    expect(element.isolateScope().state).toBeFalsy();
  }));
});
