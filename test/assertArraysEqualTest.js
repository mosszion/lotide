const assertArraysEqual = require ('../assertArraysEqual')

assertArraysEqual([1,2,3], [1,2,3]); //Test Passed
assertArraysEqual([1,2,3], [1,2,"3"]); //Test Failed
assertArraysEqual([1,2,3], [1,2,5]); //Test Failed
