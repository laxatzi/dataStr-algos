// You are given two arrays and an index.
// Use the array methods slice and splice to copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array
// Return the resulting array.
// The input arrays should REMAIN THE SAME after the function runs.
//   frankenSplice([1, 2, 3], [4, 5], 1); //  should return [4, 1, 2, 3, 5]


{
  function frankenSplice(arr1, arr2, n){
    let arr2copy = arr2.slice();
    arr2copy.splice(n, 0, ...arr1);
    return arr2copy;
  }
  
  console.log(frankenSplice([1, 2, 3], [4, 5], 1));   // [4, 1, 2, 3, 5]

}// end block


