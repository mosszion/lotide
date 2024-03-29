
const assertEqual = function(actual, expected) {
 
  if (actual === expected) {

    console.log(`✅✅✅✅ Assertion Passed:  ${actual} === ${expected}`);

  } else {

    console.log(`❌❌❌❌ Assertion Failed:  ${actual} !== ${expected}`);
  }


};
const eqArrays = function(firstArr, secondArr) {
  if(firstArr.length === secondArr.length){
   
   for(let i = 0; i < firstArr.length; i++){
    
     if(firstArr[i] !== secondArr[i]){
       return false;
     }
   }
   return true;
  } else {
   return false;
  }
 };

// This function checks two objects for equality
 
const eqObjects = function (object1, object2) {  //function takes two objects

  const keyOfObject1 =Object.keys(object1);
  const keyOfObject2 =Object.keys(object2);
  let eqObject = true;
  if (keyOfObject1.length === keyOfObject2.length) {
   

    for (let key of keyOfObject1) {
      //check if there is an array value
      if (Array.isArray(object1[key]) && Array.isArray(object2[key]))
      { if (!eqArrays(object1[key], object2[key])){

      
        eqObject = false;
      }

      } else { // if primitive value use this code
        if (object1[key] !== object2[key]){
        
          eqObject = false;
        }

      }
      
     
   
     
      }
      
      
  
    
    return eqObject;
 
  } else {
    return false;
  }
}

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  


let result = eqObjects(actual, expected);
  if(result) {
    console.log(`✅✅✅ Test Passed: ${inspect(actual)} === ${inspect(expected)} are equal.`);
  } else {
    console.log(`❌❌❌ Test Failed: ${inspect(actual)} !== ${inspect(expected)} are not equal.`);
  }
 };


assertObjectsEqual({"a":1,"b":2}, {"b":2,"a":1}); //Test passed


module.exports = assertObjectsEqual;