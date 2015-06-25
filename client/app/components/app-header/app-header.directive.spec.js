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
    element = angular.element('<app-header user="{ data: { nickName: \'Danny\'} }"></app-header>');
    element = $compile(element)(scope);
    scope.$apply();

    var login = element.find('section').find('section').find('section');

    expect(element.isolateScope().user.data.nickName).toBe('Danny');
    expect(login.hasClass('logged-in')).toBe(true);
  }));

});
