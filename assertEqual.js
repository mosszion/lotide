const assertEqual = function(actual, expected) {  // argument takes two primitives 
  
  if (actual === expected) {        //checks if they are equal
    console.log(`✅✅✅✅ Assertion Passed: ${actual} === ${expected}`); //consoles pass message
 
  } else {
    console.log(`❌❌❌❌ Assertion Failed: ${actual} !== ${expected}`); //consoles fail message
  }

  
};


module.exports = assertEqual;