//We've created an object, users, with some users in it and a function isEveryoneHere, which we pass the users object to as an argument. Finish writing this function so that it returns true only if the users object contains all four names, Alan, Jeff, Sarah, and Ryan, as keys, and false otherwise.

let users = {
   Alan: {
     age: 27,
     online: true
   },
   Jeff: {
     age: 32,
     online: true
   },
   Sarah: {
     age: 48,
     online: true
   },
   Ryan: {
     age: 19,
     online: true
   }
 };

 function isEveryoneHere(obj){
    if(
       obj.hasOwnProperty('Alan')&&
       obj.hasOwnProperty('Jeff')&&
       obj.hasOwnProperty('Sarah')&&
       obj.hasOwnProperty('Ryan')
    ){
      return true;
    }
    return false;
 }

 console.log(isEveryoneHere(users));

 // Do the  two statements produce the same output? Is there any reason to prefer one way over the other?
 /*
    Be careful they won't produce the same result
    "in" will also return "true" if "key" gets found somewhere in the "prototype chain", whereas "Object.hasOwnProperty" on that will only return "true" if "key" is available on that object directly (if "owns" the property)
 */

 function testObj(){
    this.name = "Dragon";
 }

 testObj.prototype.gender = "male";

// Lets create instance of testObj
 var o = new testObj();
// lets examine the object instance
 console.log(o.hasOwnProperty('name')); // true
 console.log('name' in o); // true

 console.log(o.hasOwnProperty('gender')); // false
 console.log('gender' in o); // true

 // Conclusion
/*
 1) "in" operator returns "true" always, if property is accessible by the object, directly or from the prototype
 2) "hasOwnProperty()" returns "true" ONLY if property exists on the instance, but not on its prototype

 If we want to check that some property exists on the prototype, logically we would say:
*/

console.log(('name' in o) && !o.hasOwnProperty('name')); // false
console.log(('gender' in o)&& !o.hasOwnProperty('gender')); //true

// So regarding to question if these two conditions produce the same result, the answer is obvious: "it depends"