

//. Q: Find the second largest number in a given array.
//. Params: We are given an array of whole, positive integers (no negative numbers or floats). We are to write //. a function and return the second largest integer.
{
  function secondLargest(arr){
    let bothLarger = arr.sort((a,b)=> a-b).slice(-2);
    return Math.min(...bothLarger);
  };
  console.log(secondLargest([2,1,5,3,45,23,34])); // 34
}// end block;




   