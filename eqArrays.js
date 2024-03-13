
const eqArrays = function(firstArr, secondArr) {   //takes two input arrays
 if(firstArr.length === secondArr.length){         //checkes their lengths
  let isEqual = true; 
  for(let i = 0; i < firstArr.length; i++){        //loops to check array elements
    if(firstArr[i] !== secondArr[i]){
      isEqual = false;
    }
  }
  return isEqual;
 } else {
  return false;
 }
};

module.exports = eqArrays;





