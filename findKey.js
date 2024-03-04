//assertEqual function block

const assertEqual = function(actual, expected) {  // assertEqual takes two literals, actual and expected
  
  if (actual === expected) {        //checks if they are equal
    console.log(`✅✅✅✅ Assertion Passed: ${actual} === ${expected}`); //consoles pass message
 
  } else {
    console.log(`❌❌❌❌ Assertion Failed: ${actual} !== ${expected}`); //consoles fail message
  }

  
};


//findKey function block


//This function takes two arguments, one object and a callback
//Goes through the object and if it finds a truthy of the callback function
//returns the key associated with the value in the object

//lets intialize the function
const findKey = function (object, callback) {
 
  const keysOfObj = Object.keys(object);  //puts all keys into keysOfObj array
  
  for (let key of keysOfObj) { //iterate through the elements in keysOfObj
    
    let valOfObj = object[key];  //assigns obj[key] to valOfObj 
    
   
    if (callback(valOfObj)) { // checks the value of the key with the value given in the argument
      return key; //returns the key if found true 
    }
  }

  



}





assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma") //Pass
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 5), undefined) //Pass
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3), "Akaleri") // Pass

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3), "elBulli") // => Fail
