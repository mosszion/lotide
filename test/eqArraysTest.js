const eqArrays = require ('../eqArrays');         //import eqArray fn
const assertEqual = require ('../assertEqual');   //import assertEqual fn


// Test cases
console.log(eqArrays([1,2,3],[1,2,3]));          //True
assertEqual (eqArrays([1,2,3],[1,2,3]),true);    //Pass

assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);  //Pass
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);  //Pass
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);  //Fail