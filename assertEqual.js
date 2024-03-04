const assertEqual = function(actual, expected) {  // assertEqual takes two arrays actual and expected
  
  if (actual === expected) {        //checks if they are equal
    console.log(`✅✅✅✅ Assertion Passed: ${actual} === ${expected}`); //consoles pass message
 
  } else {
    console.log(`❌❌❌❌ Assertion Failed: ${actual} !== ${expected}`); //consoles fail message
  }

  
};
assertEqual("Lighthouse Labs", "Bootcmp");
assertEqual(1, 1);
