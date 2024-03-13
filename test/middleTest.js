

//Import functions
const assert = require ('chai').assert; //import assert from chai fn
const middle = require('../middle');          //Imports middle fn


//Test cases:

describe("#middle", () => {
  it("returns [2] for middle of [1,2,3] ", () => {
    assert.deepEqual(middle([1,2,3]),[2]); //isTrue used for equal arrays
  });
  it("returns [2,3] for middle of [1,2,3,4]", () => {
    assert.deepEqual(middle([1,2,3,4]),[2,3]);
  })
  it("returns [] for middle of [1]", () => {
    assert.deepEqual(middle([1]),[]);
  })
  it("returns [5,7] for middle of [3,5,7,4]", () => {
    assert.deepEqual(middle([3,5,7,4]),[5,7]);
  })
});



