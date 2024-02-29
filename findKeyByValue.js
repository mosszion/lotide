
const assertEqual = function(actual, expected) {
 
  if (actual === expected) {

    console.log(`✅✅✅✅ Assertion Passed:  ${actual} === ${expected}`);

  } else {

    console.log(`❌❌❌❌ Assertion Failed:  ${actual} !== ${expected}`);
  }


};

const findKeyByValue = function(obj, value) {
  let  keyValue = undefined;
  const keysOfObj = Object.keys(obj);
  
  for (let key of keysOfObj) {
    
    let valOfObj = obj[key];
    
   
    if (valOfObj === value) {
      keyValue = key;
    }
  }
  return keyValue;
  
};

findKeyByValue({a:1,b:3,c:4},3);
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
findKeyByValue(bestTVShowsByGenre, "The Wire");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
