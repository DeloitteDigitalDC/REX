'use strict';

describe('directive:card-fade', function () {

  // load the directive's module and view
  beforeEach(module('rex'));
  // Uncomment if template used
  // beforeEach(module('components/card-fade/card-fade.html'));

  var element, scope;

  // Initialize a mock scope
  beforeEach(inject(function ($injector) {
    scope = $injector.get('$rootScope').$new();
  }));

  // compile the element to be tested
  it('should be a thing', inject(function ($compile) {
    // element = angular.element('<card-fade></card-fade>');
    // element = $compile(element)(scope);

    // scope.$apply();
  }));
});
