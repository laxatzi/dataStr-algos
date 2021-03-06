//.Write a function that splits an array (first argument) into groups the length of size 
// (second argument) and returns them as a two-dimensional array.
//.Our goal for this Algorithm is to split arr (first argument) into smaller chunks
// of arrays with the length provided by size (second argument). 
//There are 4 green checks (objectives) our code needs to pass in order to complete this Algorithm:
  
{
   function chunkArrayInGroups(arr, size) {
      if(arr.length <= size) return [arr];
      return [arr.slice(0,size)].concat(chunkArrayInGroups(arr.slice(size), size));
    }

    //test
    console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)); //should return [[0, 1], [2, 3], [4, 5]].
    console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)); //should return [[0, 1, 2, 3], [4, 5]].
    console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)); //should return [[0, 1, 2], [3, 4, 5], [6]].
    console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)); //should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].


}//block




