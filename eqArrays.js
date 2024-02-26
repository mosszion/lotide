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
 if(firstArr.length === secondArr.length){
  let isEqual = true;
  for(let i = 0; i < firstArr.length; i++){
    if(firstArr[i] !== secondArr[i]){
      isEqual = false;
    }
  }
  return isEqual;
 } else {
  return false;
 }
};




console.log(eqArrays([1,2,3],[1,2,3]));

assertEqual (eqArrays([1,2,3],[1,2,3]),true);
