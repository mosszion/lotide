
const assertEqual = function(actual, expected) {
 
  if (actual === expected) {

    console.log(`✅✅✅✅ Assertion Passed:  ${actual} === ${expected}`);

  } else {

    console.log(`❌❌❌❌ Assertion Failed:  ${actual} !== ${expected}`);
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
// checks if two objects have the same keys and values
// if not returns false
const eqObjects = function (object1, object2) {    //takes two object inputs

  const keyOfObject1 =Object.keys(object1);
  const keyOfObject2 =Object.keys(object2);
  let eqObject = true;
  if (keyOfObject1.length === keyOfObject2.length) {  //checks length of both objects
   

    for (let key of keyOfObject1) {
      //check if there is an array value
      if (Array.isArray(object1[key]) && Array.isArray(object2[key]))
      { if (eqArrays(object1[key], object2[key])){

      } else {
        eqObject = false;
      }

      } else { // if primitive value use this code
        if (object1[key] === object2[key]){
        
        } else {
          eqObject = false;
        }

      }
      
     
   
     
      }
      
      
  
    
    return eqObject;
 
  } else {
    return false;
  }
}
  
  console.log(eqObjects({a:1,b:2,c:5}, {c:8,a:1,b:2}));

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); 

assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); 
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); 
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject),true);
const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); 
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject),false);


module.exports = eqObjects;