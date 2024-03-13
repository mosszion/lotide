
const tail = function(word) { //takes input array
  if (word.length <= 1) {     //checks array elements
    return [];                //returns empty array 

  } else {
    const tailed = [];
  
    for (let i = 1; i < word.length; i++) {  //starts looping from i[1]
      tailed.push(word[i]);                  //pushes every word
    }
    return tailed;                           //returns tailed array

  }
  
 
};


module.exports = tail; 
