const assertEqual = function(actual, expected) {
 
  if (actual === expected) {
    console.log(`✅✅✅✅ Assertion Passed: ${actual} === ${expected}`);
 
  } else {
    console.log(`❌❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }

  
};

const tail = function(arr) {
  const arr2 = [];
  
  for (let i = 1; i < arr.length; i++) {
    arr2.push(arr[i]);

  }
  console.log(arr2);
 
};

tail([1,2,3]);
tail(['jello','hallo','sup']);
