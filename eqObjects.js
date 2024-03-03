
const assertEqual = function(actual, expected) {
 
  if (actual === expected) {

    console.log(`✅✅✅✅ Assertion Passed:  ${actual} === ${expected}`);

  } else {

    console.log(`❌❌❌❌ Assertion Failed:  ${actual} !== ${expected}`);
  }


};

const eqObjects = function (object1, object2) {

  const keyOfObject1 =Object.keys(object1);
  const keyOfObject2 =Object.keys(object2);
  let eqObject = true;
  if (keyOfObject1.length === keyOfObject2.length) {
   

    for (let key of keyOfObject1) {
      
      if (object1[key] === object2[key]){
        
      } else {
        eqObject = false;
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
eqObjects(shirtObject , anotherShirtObject); // => true
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);
