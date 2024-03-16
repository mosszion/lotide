const eqArrays = require ('./eqArrays'); //import eqArrays function

 const assertArraysEqual = function(arr1, arr2) {  //intialize an assertArraysEqual fn with two array arguments
  let result = eqArrays(arr1, arr2);
  if(result) {     // check if arr1 is equal to arr2
    console.log(`✅✅✅ Test Passed: ${arr1} === ${arr2} : Arrays are equal.`); // if equal return this message
  } else {
    console.log(`❌❌❌ Test Failed: ${arr1} !== ${arr2} :Arrays are not equal.`); // else return this message
  }
 }

 module.exports = assertArraysEqual;
