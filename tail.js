const assertEqual = function(actual, expected) {
 
  if (actual === expected) {
    console.log(`✅✅✅✅ Assertion Passed: ${actual} === ${expected}`);
 
  } else {
    console.log(`❌❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }

  
};

const tail = function(word) {
  if (word.length <= 1) {
    return [];

  } else {
    const tailed = [];
  
    for (let i = 1; i < word.length; i++) {
      tailed.push(word[i]);
    }
    return tailed;

  }
  
 
};


const result = tail(["Hello", "Lighthouse", "Labs"]);
const result2 = tail(["Hello"]);
console.log(result2);
assertEqual(result.length, 2);
assertEqual(result[0],"Lighthouse");
assertEqual(result[1],"Labs");
const words = ["Yo Yo", "Lighthouse", "Labs"];
const newWord = tail(words);
assertEqual(words.length, 3);
assertEqual(newWord.length, 2);
