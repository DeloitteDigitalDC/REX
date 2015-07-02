'use strict';

describe('directive:app-header', function () {

  // load the directive's module and view
  beforeEach(module('rex'));
  beforeEach(module('templates'));

  var element, scope, $state, elScope;

  // Initialize a mock scope
  beforeEach(inject(function ($injector) {
    scope = $injector.get('$rootScope').$new();
    $state = $injector.get('$state');
  }));

  // compile the element to be tested
  it('should be have the state of login', inject(function ($compile) {
    element = angular.element('<app-header user="{ data: { nickName: \'Danny\'} }"></app-header>');
    element = $compile(element)(scope);
    scope.$apply();

    var elScope = element.isolateScope();
    var login = element.find('section').find('section').find('section');

    expect(elScope.user.data.nickName).toBe('Danny');
    expect(login.hasClass('logged-in')).toBe(true);
  }));

  // compile the element to be tested
  it('should go to the home state', inject(function ($compile) {
    element = angular.element('<app-header user="{}"></app-header>');
    element = $compile(element)(scope);
    scope.$apply();

    var elScope = element.isolateScope();

    scope.$apply();

    expect(elScope.homeRoute).toBe('main.home');
  }));

  // compile the element to be tested
  it('should go to the cabinet state', inject(function ($compile) {
    element = angular.element('<app-header user="{ data: { nickName: \'Danny\'} }"></app-header>');
    element = $compile(element)(scope);
    scope.$apply();

    var elScope = element.isolateScope();

    scope.$apply();

    expect(elScope.homeRoute).toBe('main.cabinet');
  }));

  it('goes to the specified link', inject(function ($compile) {
    element = angular.element('<app-header user="{ data: { nickName: \'Danny\'} }" header-options="{link: \'main.search\'}"></app-header>');
    element = $compile(element)(scope);
    scope.$apply();

    var elScope = element.isolateScope();

    elScope.goTo();

    scope.$apply();

    expect($state.current.name).toBe('main.search');
  }));

});
