// Equal arrays checking block
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

// Assert arrays equal block

const assertArraysEqual = function(arr1, arr2) {
  let result = eqArrays(arr1, arr2);
  if(result) {
    console.log(`✅✅✅ Test Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌ Test Failed: ${arr1} !== ${arr2}`);
  }
};


//takeUntil function block
// the function takeUntil takes an array and callback and returns a mini array after its passed the callback function
const takeUntil = function(array, callback) { //takes an array and a callback
  const result = [];
  for (let item of array) {  // iterates items of array
    if(callback(item)){    // checks callback functions for an item 
      return result;           // if true the program returns result
    }
    else {
      result.push(item)    // if false it keeps pushing items into the result array
    }
  }
  return result;  //then finally returns the result array
    };
  
    
  
 

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5]; // array of numbers
const results1 = takeUntil(data1, x => x < 0); // takeUntil takes one array and callback for checking if x is below 0


console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ','); // should return ["I've", "been", "to", "Hollywood"]

assertArraysEqual(results1, [1,2,5,7,2])  // Test should pass
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"])  // Test should pass

module.exports = takeUntil;