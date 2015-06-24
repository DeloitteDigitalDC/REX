'use strict';

describe('directive:back-button', function () {

  // load the directive's module and view
  beforeEach(module('rex'));
  beforeEach(module('templates'));

  var element, scope;

  // Initialize a mock scope
  beforeEach(inject(function ($injector) {
    scope = $injector.get('$rootScope').$new();
  }));

  // compile the element to be tested
  it('state should undefined/default', inject(function ($compile) {
    element = angular.element('<back-button></back-button>');
    element = $compile(element)(scope);

    scope.$apply();

    expect(element.isolateScope().state).toBeFalsy();
  }));
});