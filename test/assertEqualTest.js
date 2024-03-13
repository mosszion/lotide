const assertEqual = require("../assertEqual")
const assert = require ('chai').assert; //import assert from chai fn
   

describe("#assertEqual", () => {
  it("returns true for 1 for 1", () => {
    assert.strictEqual(assertEqual(1, 1));
  });
  it("returns true '5' for '5'", () => {
    assert.strictEqual(assertEqual('5', '5'));
  })
});
