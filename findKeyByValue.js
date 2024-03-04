//asertEqual function block
const assertEqual = function(actual, expected) {
 
  if (actual === expected) {

    console.log(`✅✅✅✅ Assertion Passed:  ${actual} === ${expected}`);

  } else {

    console.log(`❌❌❌❌ Assertion Failed:  ${actual} !== ${expected}`);
  }


};


//findKeyByValue is a function which takes two arguments one Object and a value
// checks if the value is one of the values in the object 
// Then if the value is found returns its key

const findKeyByValue = function(obj, value) {  //find key takes  two arguments : one object and one value
  let  keyValue ;
  const keysOfObj = Object.keys(obj);  //puts all keys into keysOfObj array
  
  for (let key of keysOfObj) { //iterate through the elements in keysOfObj
    
    let valOfObj = obj[key];  //assigns obj[key] to valOfObj 
    
   
    if (valOfObj === value) { // checks the value of the key with the value given in the argument
      return key; //returns the key if found true 
    }
  }
  return keyValue; // returns the key
  
};



const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
findKeyByValue(bestTVShowsByGenre, "The Wire");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); // Pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); //Pass
