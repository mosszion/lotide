
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
const letterPosition = function(sentence) {
  const results = {

  };
  for (let index = 0; index < sentence.length; index++) {
    const letter = sentence[index];
    if (letter !== ' ') {
      if (!results[letter]) {
        results[letter] = [];
      }
      results[letter].push(index);
    }
  }

  return results;
};
console.log(letterPosition("this is lighthouse"));

assertArraysEqual(letterPosition("hello").e, [1]);
assertArraysEqual(letterPosition("this is lighthouse").e, [17]);
assertArraysEqual(letterPosition("this is lighthouse").l, [8]);
assertArraysEqual(letterPosition("this is lighthouse").h, [1, 11, 13]);
assertArraysEqual(letterPosition("this is lighthouse").t, [0,12]);



module.exports = letterPosition;