'use strict';

describe('directive:app-section', function () {

  // load the directive's module and view
  beforeEach(module('rex'));
  beforeEach(module('templates'));

  var element, scope;

  // Initialize a mock scope
  beforeEach(inject(function ($injector) {
    scope = $injector.get('$rootScope').$new();
  }));

  // compile the element to be tested
  it('should place the h1 tag inside of the section structure', inject(function ($compile) {
    element = angular.element('<app-section><h1>Hello World</h1></app-section>');
    element = $compile(element)(scope);
    scope.$apply();

    var content = element.find('section').find('section');

    expect(content.find('h1')).toBeTruthy();
  }));
});
