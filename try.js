x = 12;
if(true) {
  x + 2;
  x = 4;
}
console.log(x);

var globalScope = 'I\'m all up in your codes!';

if (true) {
  let globalScope = 'Not anymore, you\'re not!';
}
console.log(globalScope);

let myGlobalVar = "global";

const printMyVars = function() {
  let myLocalVar = "local";
  console.log("-- Inside printMyVars --");
  console.log("myLocalVar is:", myLocalVar);
  console.log("myGlobalVar is:", myGlobalVar);
}

printMyVars();

console.log('-- Outside of printMyVars now --');

let myVar = "global";

const myFunction = function() {
  let myVar = "local";

  console.log("inside myFunction, myVar is:", myVar); 
}

myFunction();

console.log("outside myFunction, myVar is:", myVar);  
