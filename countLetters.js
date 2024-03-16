
const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`✅✅✅✅ Assertion Passed:  ${actual} === ${expected}`);

  } else {
    console.log(`❌❌❌❌ Assertion Failed:  ${actual} !== ${expected}`);
  }


};

// This function returns the number of instances of each letter in a given string

const countLetter = function(str) {  //takes string input
  const allLetters = [];
  for (let letter of str) {
    allLetters.push(letter);
  }
  const result = { };
 
  for (let item of allLetters) {
    if (item !== ' ') {                   // ignores blank space
      result[item] = (result[item] || 0) + 1;  //count number of instances

    }
    
  }
  return result;  //returns object with key value representation
};

console.log(countLetter("this is mine"));
console.log(countLetter("lighthouse in the house"));

const result1 = countLetter("lighthouse in the house");
assertEqual(result1["l"], 1);
assertEqual(result1["i"], 2);
assertEqual(result1["g"], 1);
assertEqual(result1["h"], 4);
assertEqual(result1["t"], 2);
assertEqual(result1["o"], 2);
assertEqual(result1["u"], 2);
assertEqual(result1["s"], 2);
assertEqual(result1["e"], 3);
assertEqual(result1["n"], 1);



module.exports = countLetters;