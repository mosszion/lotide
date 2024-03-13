//Import functions
const tail = require ('../tail'); //import tail
const assert = require ('chai').assert; //import assert from chai fn


//Test cases:

describe("#tail", () => {
  it("returns [2,3] for [1,2,3]", () => {
    assert.deepEqual(tail([1,2,3]), [2,3]); //deepEqual used for equal arrays
  });
  it("returns ['5'] for []", () => {
    assert.deepEqual(tail(['5']), []);
  })
});

