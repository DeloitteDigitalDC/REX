'use strict';

describe('directive:search-input', function () {

  // load the directive's module and view
  beforeEach(module('rex'));
  // Uncomment if template used
  // beforeEach(module('templates'));

  var element, scope;

  // Initialize a mock scope
  beforeEach(inject(function ($injector) {
    scope = $injector.get('$rootScope').$new();
  }));

  // compile the element to be tested
  it('should be a thing', inject(function ($compile) {
    // element = angular.element('<search-input></search-input>');
    // element = $compile(element)(scope);

    // scope.$apply();
  }));
});
