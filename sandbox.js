
//.Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
//.Our goal for this Algorithm is to split arr (first argument) into smaller chunks of arrays with the length provided by size (second argument). 
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

//. Q: Remove Duplicate Elements from an Array
{
  let cities = ["Athens","Athens", "Thessaloniki", "Iraklion", "Drama", "Thessaloniki"];

//Remove Dups from an Array
 
function removeDuplicates(arr){
  //return;  
}

    console.log(cities.sort());
    console.log(removeDuplicates(cities)); // ["Athens", "Drama", "Iraklion", "Thessaloniki"]

 //OR with the Set() object method
    function noDuplicates(arr){
      return [...new Set(arr)];
    }
    console.log(noDuplicates(cities)); //  ["Athens", "Drama", "Iraklion", "Thessaloniki"]
    }// end block



