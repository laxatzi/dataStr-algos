//. EXERCISE #21
// Intermediate Algorithm Scripting: Wherefore art thou
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

{
   function whatIsInAName(collection, source) {
      let sourceKey = Object.keys(source); // ['last']
    
      return collection.filter(el => {
        return sourceKey.every(key=> {
          return el.hasOwnProperty(key) && el[key] === source[key];
        });
      })
   }
  
   console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" },{first: 'Lambros'}], { last: "Capulet" })); // should return [{ first: "Tybalt", last: "Capulet" }].
 
 }//end block

    