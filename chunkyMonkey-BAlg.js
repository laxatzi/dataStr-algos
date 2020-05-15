//.Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

{
   function chunkArrayInGroups(arr, size) {
      return 'original';
    }

    //test
    console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)); //should return [[0, 1], [2, 3], [4, 5]].
    console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)); //should return [[0, 1, 2, 3], [4, 5]].
    console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)); //should return [[0, 1, 2], [3, 4, 5], [6]].
    console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)); //should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].


}//block




