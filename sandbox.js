//EXERCISE #18
//. Q: Find the second largest number in a given array.
//. Params: We are given an array of whole, positive integers (no negative numbers or floats). We are to write
//. a function and return the second largest integer.
{
  function secondLargest(arr){
    let sorted = arr.sort((a,b)=> a-b);
    sorted.pop();
    return sorted.reduce((acc, current)=> {
      return current >= acc ? current : acc;
    }, 0)

  };

  console.log(secondLargest([2,5,6,67,109])); // 67

}// end block;





// EXERCISE #19
//. Q: Remove Duplicate Elements from an Array
{
  let cities = ["Athens","Athens", "Thessaloniki", "Iraklion", "Drama", "Thessaloniki"];

//Remove Dups from an Array
 
function removeDups(arr){
  //return;  
}

 //   console.log(cities.sort());
//  console.log(removeDuplicates(cities)); // ["Athens", "Drama", "Iraklion", "Thessaloniki"]

}// end block




// EXERCISE #20
//. Intermediate Algorithm Scripting: Diff Two Arrays (SYMETRIC DIFF)
//. Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
// In other words, return the symmetric difference of the two arrays.

//. Note
//. You can return the array with its elements in any order.

{

  function diffArray(arr1, arr2) {
    
   }

// console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
  //. should return ["diorite", "pink wool"].
}//block



// EXERCISE #21
// Intermediate Algorithm Scripting: Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note
// You have to use the arguments object.

{

   function destroyer(arr) {
      return something 
      }

//  console.log(destroyer(["tree", "hamburger", 53], "tree", 53)); // should return ["hamburger"]

}//end block




//. EXERCISE #22
// Intermediate Algorithm Scripting: Wherefore art thou
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

{
  function whatIsInAName(collection, source) {
   let sourceKey = Object.keys(source);
   
  }
 
 // console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })); // should return [{ first: "Tybalt", last: "Capulet" }].

}//end block



//. EXERCISE #23
// SumAllNums
(function () {
  'use strict';

//. We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

//. For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
function sumAll([ a, b ] ) {
  
}

// console.log('sum is: ' + sumAll([5,1])) // 10

})();

//. EXERCISE #24
// Intermediate Algorithm Scripting: Wherefore art thou
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

{
  function whatIsInAName(collection, source) {
 
  }
 
 // console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })); // should return [{ first: "Tybalt", last: "Capulet" }].

}//end block