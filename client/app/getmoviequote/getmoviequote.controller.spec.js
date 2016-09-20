'use strict';

describe('Component: GetmoviequoteComponent', function () {

  // load the controller's module
  beforeEach(module('getmovieApp'));

  var GetmoviequoteComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    GetmoviequoteComponent = $componentController('getmoviequote', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
