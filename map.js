// Making our own version of map function


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

// Our map function block starts here 
/*This function takes an array and a callback function as arguments, and returns a new array containing the results of calling
 the callback function with each element of the original array.
 */
const words = ["This", "is", "the", "lighthouse", "map", "example"]; //given array of words
const map = function (array, callback) { // defining our map function, takes in array and callback function 
  const result = []; //
  for (let item of array) {
    result.push(callback(item));

  }
  
 
  return result ;

}
const result1 = map(words, word => word[0]);
const result2 = map(words, word => word.length);
const result3 = map(words, word => word + " :has " + word.length + " letters in it.");

console.log(result1)
console.log(result2)
console.log(result3)
assertArraysEqual(result1, [ 'T', 'i', 't', 'l', 'm', 'e' ])
assertArraysEqual(result2, [ 4, 2, 3, 10, 3, 7 ])
assertArraysEqual(result3, [
  'This :has 4 letters in it.',
  'is :has 2 letters in it.',
  'the :has 3 letters in it.',
  'lighthouse :has 10 letters in it.',
  'map :has 3 letters in it.',
  'example :has 7 letters in it.'
]);