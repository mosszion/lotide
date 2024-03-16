const eqArrays = function(firstArr, secondArr) {
  if (firstArr.length === secondArr.length) {
    let isEqual = true;
    for (let i = 0; i < firstArr.length; i++) {
    
      if (firstArr[i] !== secondArr[i]) {
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
  if (result) {
    console.log(`✅✅✅ Test Passed: Arrays are equal.`);
  } else {
    console.log(`❌❌❌ Test Failed: Arrays are not equal.`);
  }
};
//A function which takes in two arrays which will return a subset of a given array, removing unwanted elements. 
const without = function(array1, array2) { //takes in two arrays
  let result = [];   //initialize empty array
  
  for (let i = 0; i < array1.length; i++) { //going through the first array
    let isFound = false;    //define flag
    for (let j = 0; j < array2.length; j++) {  //going through the second array
      if (array1[i] === array2[j]) {
        isFound = true;  //if found change flag status
     
     
      }


    
    }
    if (!isFound) {   //if not found push the element to result 
      result.push(array1[i]);
    }
   
  }

  return result;  //return result
};


without([1,2,3,4], [2,4]);


const words = ["hello", "world", "lighthouse"];
const trimmed = without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

assertArraysEqual(words, trimmed);


module.exports= without;