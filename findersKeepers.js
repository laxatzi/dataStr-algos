// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.
{
// use the find method
  // find method is a way to 'find and return' the FIRST occurrence of an element in an array under a defined TESTING FUNCTION 
  // It only returns a SINGLE element. If more elements are required use filter method. If if no element satisfies testing function 'undefined' is returned.
  // Support for find method exceeds 95% (IE is the only major browser that do not support it)
function findElement(arr, func){
  return arr.find(func);
 
}

console.log(findElement([1,2,3,4], num=> num%2===0)); //2

}// end of block


 // Alt way
{
// Use the Array.indexOf() method
   // The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
   function findElement(arr, func){
      return arr[arr.map(func).indexOf(true)]; // we want to find a specific index of the arr so we pass index of true as an index of the arr
   }

   console.log(findElement([1,2,3,4], num=>num%2===0)); // 2
}// end of block
