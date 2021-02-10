//. EXERCISE #21
// Intermediate Algorithm Scripting: Wherefore art thou
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

{
   function whatIsInAName(objectsArray, ref) {
    let sourceKey = Object.keys(ref); 
    return objectsArray.filter(obj => {
       return sourceKey.every(key => {
          return obj[key] === ref[key];
       });
    });
   }
  
   console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }],
    { last: "Capulet" })); // should return [{ first: "Tybalt", last: "Capulet" }].
 
 }//end block


 {
   function whatIsInAName(objArray, ref) {
     let refKeys = Object.keys(ref); // 'last'
     return  objArray.filter(el => {
       // both the key and its corresponding value must exist within the object we are filtering through
       return refKeys.map(key => el.hasOwnProperty(key) && el[key]=== ref[key])
       // we reduce the mapped Boolean values to a single Boolean that indicates whether all srcKeys pass the conditions checked above.
       .reduce((a,b)=> a && b);
     });
     
   }
  
  console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }],
   { last: "Capulet" })); // should return [{ first: "Tybalt", last: "Capulet" }].
 
 }//end block