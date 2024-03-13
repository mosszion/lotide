const eqArrays = require ('../eqArrays');         //import eqArray fn
const assertEqual = require ('../assertEqual');   //import assertEqual fn


console.log(eqArrays([1,2,3],[1,2,3]));          //True

assertEqual (eqArrays([1,2,3],[1,2,3]),true);    //Pass