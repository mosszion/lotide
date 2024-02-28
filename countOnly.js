
const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`✅✅✅✅ Assertion Passed:  ${actual} === ${expected}`);

  } else {
    console.log(`❌❌❌❌ Assertion Failed:  ${actual} !== ${expected}`);
  }


};


const countOnly = function(arrayNames, namesToCount) {
  let countedItem = {

  };
 

  let keys = [];
  for (let key in namesToCount) {
    keys.push(key);
  }
  if (arrayNames.length < 1) {
    return `😱 Ohh no !! No one has attended sofar!!`;
  } else {
    for (let i = 0; i < arrayNames.length; i++) {
      for (let j = 0; j < keys.length; j ++) {
        if (arrayNames[i] === keys[j]) {
     
          if (namesToCount[keys[j]]) {
            
  
            countedItem[keys[j]] = (countedItem[keys[j]] || 0) + 1;
            
            
            
          }
        }
      }
    }
    return countedItem;
  

  }
 
  
};

console.log(countOnly(["a","b","c","d","d"], {"a":true, "b": true, "c": false, "d":true}));
console.log(countOnly([], {"a":true, "b": true, "c": false, "d":true}));
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
