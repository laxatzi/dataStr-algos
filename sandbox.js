
// EXERCISE #19
//. Q: Remove Duplicate Elements from an Array
{
  let cities = ["Athens","Athens", "Thessaloniki", "Iraklion", "Drama", "Thessaloniki"];

//Remove Dups from an Array
 
function removeDups(arr){
      // return ;
  }

 // console.log(removeDups(cities)); // ["Athens", "Drama", "Iraklion", "Thessaloniki"]

}// end block



//. EXERCISE #22
// SumAllNums
(function () {
  'use strict';

//. We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
// The lowest number will not always come first.

//. For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
function sumAll([ a, b ] ) {
  
  //return;
}

 //console.log('sum is: ' + sumAll([5,1])); // 15
 //console.log('sum is: ' + sumAll([1,5])); // 15


})();

//. EXERCISE #23
// Intermediate Algorithm Scripting: Wherefore art thou
// Make a function that looks through an array of objects (first argument) and returns an array of 
// all objects that have matching name and value pairs (second argument).
// Each name and value pair of the source object has to be present in the object from the collection 
// if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null },
// { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" },
// then you must return the third object from the array (in the first argument), 
// because it contains the name and its value, that was passed on as the second argument.

{
  function whatIsInAName(objArray, ref) {
    let refKeys = Object.keys(ref); // 'last'
    return  objArray.filter(el => {
      // both the key and its corresponding value must exist within the object we are filtering through
      return refKeys.map(key => el.hasOwnProperty(key) && el[key]=== ref[key])
      // we reduce the mapped Boolean values to a single Boolean that indicates whether all srcKeys pass the conditions checked above.
      .reduce((a,b)=> a || b);
    });
    
  }
 
 console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }],
  { last: "Capulet" })); // should return [{ first: "Tybalt", last: "Capulet" }].

}//end block