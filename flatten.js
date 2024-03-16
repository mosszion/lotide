const eqArrays = function(firstArr, secondArr) {
  if (firstArr.length === secondArr.length) {
   let isEqual = true;
   for (let i = 0; i < firstArr.length; i++){
    
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

 // This function takes in an array with other arrays inside, it can flatten it into a single-level array.
const flatten = function(arr) {   //takes in array input
  let flattened =[];
  for (item of arr) {    //looping through array elements
    if (Array.isArray(item)){    //checks if element is an array
      for (let inside of item) {  
       
        flattened.push(inside);
      }

    } else {
     
      flattened.push(item);
    }



 }
 return flattened;   //returns the flattened result
};

console.log(flatten([1,2,[3,4],[2,4]]));
assertArraysEqual(flatten([1,2,[3,4],[2,4]]),[1,2,3,4,2,4]);
console.log(eqArrays(flatten([1,2,[3,4],[2,4]]), [1,2,3,4,2,4]));


module.exports = flatten;