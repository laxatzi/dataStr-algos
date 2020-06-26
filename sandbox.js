

//.Remove all falsy values from an array.

//.Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

{
      const falsyBouncer = function(arr){
        return arr.filter(el =>  !!el); // show only truthy values
      }
      const truthyBouncer = function(arr){
        return arr.filter(el => !el); // show only falsy values
      }
   
  console.log(falsyBouncer([7, "ate", "", false, 9]));
  console.log(truthyBouncer([7, "ate", "", false, 9]));
  }//block

 // Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.

    // use the find method
      // find method is a way to 'find and return' the FIRST occurrence of an element in an array under a defined TESTING FUNCTION 
      // It only returns a SINGLE element. If more elements are required use filter method. If if no element satisfies testing function 'undefined' is returned.
      // Support for find method exceeds 95% (IE is the only major browser that do not support it)

//OR

    // Use the Array.indexOf() method


