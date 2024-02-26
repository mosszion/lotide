const assertEqual = function(actual, expected) {
 
  if (actual === expected) {
    console.log(`✅✅✅✅ Assertion Passed: ${actual} === ${expected}`);
 
  } else {
    console.log(`❌❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }

  
};

const tail = function(arr) {
  
  for(let i = 1; i < arr.length; i++) {
    console.log(arr[i]);

  }
 
};

tail([1,2,3]);
tail (['jello','hallo','sup']);