const assertEqual = function(actual, expected) {
  let msgp = `✅✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  let msgf = `❌❌❌❌ Assertion Failed: ${actual} !== ${expected}`;
  if (actual === expected) {
    console.log(msgp);
 
  } else {
    console.log(msgf);
  }

  
};
assertEqual("Lighthouse Labs", "Bootcmp");
assertEqual(1, 1);
