

//Import functions
const assert = require ('chai').assert; //import assert from chai fn
const middle = require('../middle');          //Imports middle fn


//Test cases:

describe("#middle", () => {
  it("returns true if middle of [1,2,3] is [2]", () => {
    assert.deepEqual(middle([1,2,3]),[2]); //isTrue used for equal arrays
  });
  it("returns true if middle of [1,2,3,4] is [2,3]", () => {
    assert.deepEqual(middle([1,2,3,4]),[2,3]);
  })
});



