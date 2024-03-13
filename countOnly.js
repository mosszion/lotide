
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
 

  if (arrayNames.length < 1) {
    return `Noone`;
  } else {
    for (let i = 0; i < arrayNames.length; i++) {
      if (namesToCount[arrayNames[i]]) {
     
          
            
  
        countedItem[arrayNames[i]] = (countedItem[arrayNames[i]] || 0) + 1;
            
            
            
          
        
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



module.exports = countOnly;