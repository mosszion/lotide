const assertArraysEqual = require ('../assertArraysEqual') //Import assertArraysEqual
const middle = require('../middle');          //Imports middle fn

//Test cases

assertArraysEqual(middle([1,3,6]),[3]);
assertArraysEqual(middle([1,3,6,90,68,56,65,67]),[90,68]);
assertArraysEqual(middle([1,3,6,7,9]),[6]);
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1]),[]);
