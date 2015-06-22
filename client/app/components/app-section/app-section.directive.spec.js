'use strict';

describe('directive:app-section', function () {

  // load the directive's module and view
  beforeEach(module('rex'));
  // Uncomment if template used
  // beforeEach(module('components/app-section/app-section.directive.html'));

  var element, scope;

  // Initialize a mock scope
  beforeEach(inject(function ($injector) {
    scope = $injector.get('$rootScope').$new();
  }));

  // compile the element to be tested
  it('should be a thing', inject(function ($compile) {
    // element = angular.element('<app-section></app-section>');
    // element = $compile(element)(scope);

    // scope.$apply();
  }));
});
