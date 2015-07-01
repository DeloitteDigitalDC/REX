'use strict';

describe('directive:search-input', function () {

  // load the directive's module and view
  beforeEach(module('rex'));
  beforeEach(module('templates'));

  var element, scope, $state, $httpBackend;

  // Initialize a mock scope
  beforeEach(inject(function ($injector) {
    scope = $injector.get('$rootScope').$new();
    $state = $injector.get('$state');
    $httpBackend = $injector.get('$httpBackend');

    $httpBackend.whenGET('/fda/drug/label/?limit=100&search=(openfda.brand_name:%22Advil%22)').respond(200, {

    });
  }));

  // compile the element to be tested
  it('should be a thing', inject(function ($compile) {
    element = angular.element('<search-input></search-input>');
    element = $compile(element)(scope);

    scope.$apply();

    var elScope = element.isolateScope();

    elScope.search.searchTerms = 'Advil';

    elScope.searchByName();

    $httpBackend.flush();

    expect(elScope.noResults).toBe(true);
  }));
});
