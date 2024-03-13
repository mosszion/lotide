

const middle = function(ary) { //takes array input

  if (ary.length < 3) {      //loops through the array
    return [];
  } else {
    let half = ary.length / 2;  //divide length into half
    if (ary.length % 2 === 0) {
      
      return [ary[half - 1],ary[half]];
    } else {
      return [ary[Math.floor(half)]];

    }
  }
};

module.exports = middle