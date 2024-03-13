
//Import functions
const assert = require ('chai').assert; //import assert from chai fn
const eqArrays = require ('../eqArrays');         //import eqArray fn


//Test cases:

describe("#eqArrays", () => {
  it("returns true for [1,2,3] and [1,2,3]", () => {
    assert.isTrue(eqArrays([1],[1])); //isTrue used for equal arrays
  });
  it("returns true for  ['5'] and ['5']", () => {
    assert.isTrue(eqArrays(['5'],['5']));
  })
});


