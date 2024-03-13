
const tail = function(word) { //takes input array
  if (word.length <= 1) {     //checks array elements
    return [];                //returns empty array 

  } else {

    return word.slice(1)         //return slice from 1            

  }
  
 
};


module.exports = tail; 
