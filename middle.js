
//This function should return middle of an array

const middle = function(ary) { //takes array input

  if (ary.length < 3) {      //loops through the array
    return [];
  } else {
    let half = ary.length / 2;  //divide length into half
    if (ary.length % 2 === 0) { //check if even number elements
      
      return [ary[half - 1],ary[half]]; //returnsnpm two middle values for even
    } else {
      return [ary[Math.floor(half)]];  //returns one middle for odd numbered

    }
  }
};

module.exports = middle