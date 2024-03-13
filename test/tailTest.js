//Import functions
const tail = require ('../tail'); //import tail
const assert = require ('chai').assert; //import assert from chai fn


//Test cases:

describe("#tail", () => {
  it("returns [2,3] for tail [1,2,3]", () => {
    assert.deepEqual(tail([1,2,3]), [2,3]); //deepEqual used for equal arrays
  });
  it("returns [] for tail ['5']", () => {
    assert.deepEqual(tail(['5']), []);
  })
  it("returns [5,7,4] for tail of [3,5,7,4]", () => {
    assert.deepEqual(tail([3,5,7,4]),[5,7,4]);
  })
  it("returns [7,6,5,4,3,2,1] for tail of [8,7,6,5,4,3,2,1]", () => {
    assert.deepEqual(tail([8,7,6,5,4,3,2,1]),[7,6,5,4,3,2,1]);
  })
});

