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

 const assertArraysEqual = function(arr1, arr2) {
  let result = eqArrays(arr1, arr2);
  if(result) {
    console.log(`✅✅✅ Test Passed: Arrays are equal.`);
  } else {
    console.log(`❌❌❌ Test Failed: Arrays are not equal.`);
  }
 }

 assertArraysEqual([1,2,3], [1,2,3]);
 assertArraysEqual([1,2,3], [1,2,"3"]);
 assertArraysEqual([1,2,3], [1,2,5]);
