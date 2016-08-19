'use strict';

describe('Component: BoxofficeComponent', function () {

  // load the controller's module
  beforeEach(module('getmovieApp'));

  var BoxofficeComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    BoxofficeComponent = $componentController('boxoffice', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
