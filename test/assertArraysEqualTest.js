//Import functions
const assert = require ('chai').assert; //import assert from chai fn
const assertArraysEqual = require ('../assertArraysEqual')


//Test cases:

describe("#assertArraysEqual", () => {
  it("returns true for [1,2,3] and [1,2,3]", () => {
    assert.deepEqual(assertArraysEqual([1,2,3], [1,2,3])); //deepEqual used for equal arrays
  });
  it("returns true for  ['5'] and ['5']", () => {
    assert.deepEqual(assertArraysEqual(['5'],['5']));
  })
});

