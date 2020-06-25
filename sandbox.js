
//.Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
//.Our goal for this Algorithm is to split arr (first argument) into smaller chunks of arrays with the length provided by size (second argument). 
  //? bear in mind slice method
  //? bear in mind concat method
  {
    function chunkArray(arr, size) {
      
     }
 
     //test
     console.log(chunkArray([0, 1, 2, 3, 4, 5, 6], 2)); //should return [[0, 1], [2, 3], [4, 5],[6]].

    }//end block


//. Q: Remove Duplicate Elements from an Array
{
  let cities = ["Athens","Athens", "Thessaloniki", "Iraklion", "Drama", "Thessaloniki"];

//Remove Dups from an Array
 
function removeDuplicates(arr){
  return ;
}

    console.log(cities.sort());
    console.log(removeDuplicates(cities)); // ["Athens", "Drama", "Iraklion", "Thessaloniki"]

 //OR with the Set() object method
    function noDuplicates(arr){
      return;
    }
    console.log(noDuplicates(cities)); //  ["Athens", "Drama", "Iraklion", "Thessaloniki"]

}// end block


//.Remove all falsy values from an array.

//.Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

{
  
   
  console.log(falsyBouncer([7, "ate", "", false, 9]));
  
  }//block

 // Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.

    // use the find method
      // find method is a way to 'find and return' the FIRST occurrence of an element in an array under a defined TESTING FUNCTION 
      // It only returns a SINGLE element. If more elements are required use filter method. If if no element satisfies testing function 'undefined' is returned.
      // Support for find method exceeds 95% (IE is the only major browser that do not support it)

//OR

    // Use the Array.indexOf() method


