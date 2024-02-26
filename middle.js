const eqArrays = function(firstArr, secondArr) {
  if (firstArr.length === secondArr.length) {
    let isEqual = true;
    for (let i = 0; i < firstArr.length; i++) {
    
      if (firstArr[i] !== secondArr[i]) {
        isEqual = false;
      }
    }
    return isEqual;
  } else {
    return false;
  }
};

const assertArraysEqual = function(arr1, arr2) {
  let result = eqArrays(arr1, arr2);
  if (result) {
    console.log(`✅✅✅ Test Passed: Arrays are equal.`);
  } else {
    console.log(`❌❌❌ Test Failed: Arrays are not equal.`);
  }
};

const middle = function(ary) {
  if (ary.length < 3) {
    return [];
  } else if (ary.length === 3) {
    return [ary[1]];
  } else {
    let half = ary.length / 2;
    if (ary.length % 2 === 0) {
      
      return [ary[half - 1],ary[half]];
    } else {
      return [ary[Math.floor(half)]];

    }
  }
};

console.log(middle([1,3,6]));
console.log(middle([1,3,6,90,68,56,65,67]));
console.log(middle([1,3,6,7,9]));
console.log(middle([1,3]));
console.log(middle([1]));
assertArraysEqual(middle([1,3,6]),[3]);
assertArraysEqual(middle([1,3,6,90,68,56,65,67]),[90,68]);
assertArraysEqual(middle([1,3,6,7,9]),[6]);
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1]),[]);
