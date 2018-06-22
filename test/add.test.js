const {expect} = require('chai');

describe('canary test', function () {
  it('should pass canary test', function () {
    expect(true).to.eq(true);
  });
})

describe('add', function () {
  let add;

  beforeEach(function () {
    add = require('../services/add');
  });

  it('should add 5 and 4 and return 9', function () {
    const result = add(4, 5);

    expect(result).to.eq(9);
  });
})
