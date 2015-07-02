'use strict';

describe('directive:drug-card', function () {

  // load the directive's module and view
  beforeEach(module('rex'));
  beforeEach(module('templates'));

  var element, scope, $state;

  // Initialize a mock scope
  beforeEach(inject(function ($injector) {
    scope = $injector.get('$rootScope').$new();
    $state = $injector.get('$state');
  }));

  it('should be marked as expired', inject(function ($compile) {
    element = angular.element('<drug-card drug="{ name: \'Tylenol\', expirationDate: \'10/10/2014\', id:\'12345677\'}"></drug-card>');
    element = $compile(element)(scope);

    scope.$apply();

    expect(element.isolateScope().expired).toBe(true);
  }));

  it('should not be marked as expired', inject(function ($compile) {
    element = angular.element('<drug-card drug="{ name: \'Tylenol\', expirationDate: \'10/10/2016\', id:\'12345677\'}"></drug-card>');
    element = $compile(element)(scope);

    scope.$apply();

    expect(element.isolateScope().expired).toBe(false);
  }));

  it('should not die with no date', inject(function ($compile) {
    element = angular.element('<drug-card></drug-card>');
    element = $compile(element)(scope);

    scope.$apply();
  }));

  it('should go to the drug uses page', inject(function ($compile) {
    element = angular.element('<drug-card drug="{ name: \'Tylenol\', expirationDate: \'10/10/2016\', id:\'12345677\'}"></drug-card>');
    element = $compile(element)(scope);

    scope.$apply();

    element.isolateScope().goToDetails();

    scope.$apply();

    expect($state.current.name).toBe('main.drugProfile.uses');
  }));

  it('should go to the drug recalls page', inject(function ($compile) {
    element = angular.element('<drug-card drug="{ name: \'Tylenol\', expirationDate: \'10/10/2016\', recalled: true, id:\'12345677\'}"></drug-card>');
    element = $compile(element)(scope);

    scope.$apply();

    element.isolateScope().goToDetails();

    scope.$apply();

    expect($state.current.name).toBe('main.drugProfile.recalls');
  }));
});
