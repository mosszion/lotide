const assertEqual = require ("../assertEqual"); //import assertEqual
const tail = require ('../tail'); //import tail

//Test cases

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0],"Lighthouse");
assertEqual(result[1],"Labs");


const words = ["Yo Yo", "Lighthouse", "Labs"];
const newWord = tail(words);
assertEqual(words.length, 3);
assertEqual(newWord.length, 2);

assertEqual(tail(["test"]).length, 0); // tail of array with one element only should be empty
assertEqual(tail([]).length, 0); // tail of an empty array should also be empty
