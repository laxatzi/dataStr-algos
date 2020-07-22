
// EXERCISE #19
//. Q: Remove Duplicate Elements from an Array
{
  let cities = ["Athens","Athens", "Thessaloniki", "Iraklion", "Drama", "Thessaloniki"];

//Remove Dups from an Array
 
function removeDups(arr){
  return new Set(arr);
  
  }

 // console.log(removeDups(cities)); // ["Athens", "Drama", "Iraklion", "Thessaloniki"]

}// end block




// EXERCISE #20
//. Intermediate Algorithm Scripting: Diff Two Arrays (SYMETRIC DIFF)
//. Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
// In other words, return the symmetric difference of the two arrays.

//. Note
//. You can return the array with its elements in any order.

{

  function symetricDiff(arr1, arr2) {
    let concatenated = arr1.concat(arr2);
    return concatenated.filter(el => !arr1.includes(el) || !arr2.includes(el));
  }  

 console.log(symetricDiff(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
 //. should return ["diorite", "pink wool"].

}//block



// EXERCISE #21
// Intermediate Algorithm Scripting: Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
// Remove all elements from the initial array that are of the same value as these arguments.

// Note
// You have to use the arguments object.

{

   function destroyer(arr) {
     let args = [...arguments];
     return args[0].filter(el => !args.includes(el));
      }

  //console.log(destroyer(["tree", "hamburger", 53], "tree", 53)); // should return ["hamburger"]

}//end block



//. EXERCISE #22
// SumAllNums
(function () {
  'use strict';

//. We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

//. For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
function sumAll([ a, b ] ) {
  
}

// console.log('sum is: ' + sumAll([5,1])) // 10

})();

//. EXERCISE #23
// Intermediate Algorithm Scripting: Wherefore art thou
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

{
  function whatIsInAName(collection, source) {
 
  }
 
 // console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })); // should return [{ first: "Tybalt", last: "Capulet" }].

}//end block