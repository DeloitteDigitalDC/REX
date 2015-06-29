'use strict';

describe('directive:back-button', function () {

  // load the directive's module and view
  beforeEach(module('rex'));
  beforeEach(module('templates'));

  var element, scope, $state;

  // Initialize a mock scope
  beforeEach(inject(function ($injector) {
    scope = $injector.get('$rootScope').$new();
    $state = $injector.get('$state');
  }));

  // compile the element to be tested
  it('should go to the results page', inject(function ($compile) {
    element = angular.element('<back-button></back-button>');
    element = $compile(element)(scope);

    $state.go('main.search.drugProfile');

    scope.$apply();

    var elScope = element.isolateScope();

    elScope.goBack();

    scope.$apply();

    expect($state.current.name).toBe('main.search.searchResults');
  }));

  it('should go to the cabinet page', inject(function ($compile) {
    element = angular.element('<back-button></back-button>');
    element = $compile(element)(scope);

    $state.go('main.drugProfile');

    scope.$apply();

    var elScope = element.isolateScope();

    elScope.goBack();

    scope.$apply();

    expect($state.current.name).toBe('main.cabinet');
  }));
});
