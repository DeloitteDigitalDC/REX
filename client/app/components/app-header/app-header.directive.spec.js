'use strict';

describe('directive:app-header', function () {

  // load the directive's module and view
  beforeEach(module('rex'));
  // Uncomment if template used
  // beforeEach(module('components/app-header/app-header.html'));

  var element, scope;

  // Initialize a mock scope
  beforeEach(inject(function ($injector) {
    scope = $injector.get('$rootScope').$new();
  }));

  // compile the element to be tested
  it('should be a thing', inject(function ($compile) {
    // element = angular.element('<app-header></app-header>');
    // element = $compile(element)(scope);

    // scope.$apply();
  }));
});
