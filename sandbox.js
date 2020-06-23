

//. Q: Find the second largest number in a given array.
//. Params: We are given an array of whole, positive integers (no negative numbers or floats). We are to write //. a function and return the second largest integer.
{
  function secondLargest(arr){
    
  };
  console.log(secondLargest([2,1,5,3,45,23,34])); // 34
}// end block;

//.Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
//.Our goal for this Algorithm is to split arr (first argument) into smaller chunks of arrays with the length provided by size (second argument). There are 4 green checks (objectives) our code needs to pass in order to complete this Algorithm:
  //? bear in mind slice method
  //? bear in mind concat method
  {
    function chunkArrayInGroups(arr, size) {
       
     }
 
     //test
     console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)); //should return [[0, 1], [2, 3], [4, 5]].
     console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)); //should return [[0, 1, 2, 3], [4, 5]].
     console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)); //should return [[0, 1, 2], [3, 4, 5], [6]].
     console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)); //should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].


    }//end block

  
//Check if a string (first argument, str) ends with the given target string (second argument, target).
// With the use of substring method
{
  function confirmEnding(str, target) {
        if (str.substring(str.length - target.length) === target) return true;
        return false;
     }
   
   console.log(confirmEnding("Bastian", "astian")); // true
  }// end block
  
  // use of slice
  {
  function confirmEnding(str,target){
     if(str.slice(str.length-target.length) === target) return true;
     return false;
  }
  console.log(confirmEnding("Lambros", "bos")); // false
  
  
  }//end block

