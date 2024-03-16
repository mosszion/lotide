
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
    console.log(`✅✅✅ Test Passed: ${arr1} === ${arr2} are equal.`);
  } else {
    console.log(`❌❌❌ Test Failed: ${arr1} !== ${arr2} are not equal.`);
  }
};
// This function takes in a string and will return all the indices in the string where each character is found.
const letterPosition = function(sentence) {   //takes in a string 
  const results = {     //intialize an empty object

  };
  for (let index = 0; index < sentence.length; index++) {  //going through the letters in the string
    const letter = sentence[index];   //initialize a letter
    if (letter !== ' ') {             //checks if letter is a white space
      if (!results[letter]) {   //if not found result object 
        results[letter] = [];    // create an empty array
      }
      results[letter].push(index);  //if alredy present, add its index into the list
    }
  }

  return results;  //returns result object
};
console.log(letterPosition("this is lighthouse"));

assertArraysEqual(letterPosition("hello").e, [1]);
assertArraysEqual(letterPosition("this is lighthouse").e, [17]);
assertArraysEqual(letterPosition("this is lighthouse").l, [8]);
assertArraysEqual(letterPosition("this is lighthouse").h, [1, 11, 13]);
assertArraysEqual(letterPosition("this is lighthouse").t, [0,12]);



module.exports = letterPosition;