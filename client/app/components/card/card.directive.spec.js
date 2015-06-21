'use strict';

describe('directive:card', function () {

  // load the directive's module and view
  beforeEach(module('rex'));
  beforeEach(module('app/components/card/card.directive.html'));

  var element, scope;

  // Initialize a mock scope
  beforeEach(inject(function ($injector) {
    scope = $injector.get('$rootScope').$new();
  }));

  // compile the element to be tested
  it('should render a card with the text transcluded in', inject(function ($compile) {
    element = angular.element('<card>Hello World</card>');
    element = $compile(element)(scope);
    scope.$apply();

    var text = element.find('ng-transclude').find('span').text();

    console.log(element.isolateScope().foo);

    expect(text).toBe('Hello World');
  }));
});
