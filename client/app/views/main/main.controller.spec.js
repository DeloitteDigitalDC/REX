'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('rex'));
  beforeEach(module('templates'));

  var MainCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    //MainCtrl = $injector.get('$controller')('MainCtrl', {
    //  userDetails: {
    //    data: {
    //      nickName: 'Foo'
    //    }
    //  }
    //});
  }));

  it('User login value should set', function () {
    //expect(MainCtrl.user.data.nickName).toBe('Foo');
  });

});
