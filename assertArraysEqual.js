const eqArrays = function(firstArr, secondArr) {
  if(firstArr.length === secondArr.length){
   let isEqual = true;
   for(let i = 0; i < firstArr.length; i++){
    
     if(firstArr[i] !== secondArr[i]){
       isEqual = false;
     }
   }
   return isEqual;
  } else {
   return false;
  }
 };

 const assertArraysEqual = function(arr1, arr2) {  //intialize an assertArraysEqual fn with two array arguments
  let result = eqArrays(arr1, arr2);
  if(result) {     // check if arr1 is equal to arr2
    console.log(`✅✅✅ Test Passed: ${arr1} === ${arr2} : Arrays are equal.`); // if equal return this message
  } else {
    console.log(`❌❌❌ Test Failed: ${arr1} !== ${arr2} :Arrays are not equal.`); // else return this message
  }
 }

 assertArraysEqual([1,2,3], [1,2,3]); //Test Passed
 assertArraysEqual([1,2,3], [1,2,"3"]); //Test Failed
 assertArraysEqual([1,2,3], [1,2,5]); //Test Failed
