const assertEqual = function(actual, expected) {
  let msgp = `✅✅✅✅ Assertion Passed:  ${actual} === ${expected}`;
  let msgf = `❌❌❌❌ Assertion Failed:  ${actual} !== ${expected}`;
  if (actual === expected) {
    console.log(msgp);
 
  } else {
    console.log(msgf);
  }

  
};

const eqArrays = function(firstArr, secondArr) {
  for(let i = 0; i < firstArr.length; i++){
    let isEqual = true;
    if(firstArr[i] !== secondArr[i]){
      return false;
    }
  return true;
  }
};




console.log(eqArrays([1,2,3],[1,2,3]));

assertEqual (eqArrays([1,2,3],[1,2,3]),true);
