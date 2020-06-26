
//. Q: Remove Duplicate Elements from an Array
{
  let cities = ["Athens","Athens", "Thessaloniki", "Iraklion", "Drama", "Thessaloniki"];

//Remove Dups from an Array
 
function removeDuplicates(arr){
     return arr.sort().reduce(function(acc, current){
        if(current !== acc[acc.length-1]) acc.push(current);
        return acc;
     }, []);
}

    console.log(cities.sort());
    console.log(removeDuplicates(cities)); // ["Athens", "Drama", "Iraklion", "Thessaloniki"]

 //OR with the Set() object method
    function noDuplicates(arr){
      return [...new Set(arr)];
    }
    console.log(noDuplicates(cities)); //  ["Athens", "Drama", "Iraklion", "Thessaloniki"]

}// end block


//.Remove all falsy values from an array.

//.Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

{
  
   
  //console.log(falsyBouncer([7, "ate", "", false, 9]));
  
  }//block

 // Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.

    // use the find method
      // find method is a way to 'find and return' the FIRST occurrence of an element in an array under a defined TESTING FUNCTION 
      // It only returns a SINGLE element. If more elements are required use filter method. If if no element satisfies testing function 'undefined' is returned.
      // Support for find method exceeds 95% (IE is the only major browser that do not support it)

//OR

    // Use the Array.indexOf() method


