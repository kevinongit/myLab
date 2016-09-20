'use strict';

describe('Component: GetengphraseComponent', function () {

  // load the controller's module
  beforeEach(module('getmovieApp'));

  var GetengphraseComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    GetengphraseComponent = $componentController('getengphrase', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
