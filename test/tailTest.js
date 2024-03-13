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