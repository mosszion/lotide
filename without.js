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

const withOut = function(array1, array2) {
  let result = [];
  
  for (let i = 0; i < array1.length; i++) {
    let isFound = false;
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        isFound = true;
     
     
      }


    
    }
    if (!isFound) {
      result.push(array1[i]);
    }
   
  }

  return result;
};


withOut([1,2,3,4], [2,4]);

const words = ["hello", "world", "lighthouse"];
const trimmed = withOut(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

assertArraysEqual(words, trimmed);


