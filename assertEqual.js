const assertEqual = function(actual, expected) {  // function takes two primitives arguments 
  
  if (actual === expected) {        //checks if they are equal
    console.log(`✅✅✅✅ Assertion Passed: ${actual} === ${expected}`); //consoles pass message
 
  } else {
    console.log(`❌❌❌❌ Assertion Failed: ${actual} !== ${expected}`); //consoles fail message
  }

  
};


module.exports = assertEqual;