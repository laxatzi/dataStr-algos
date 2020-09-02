    
// Missing Letters
    // Find the missing letter in the passed letter range and return it.
    // If all letters are present in the range, return undefined.
  {
    function fearNoLetter(str){
      let control = str.charCodeAt(0); // 97
      let missing;
      str.split('').map((el, index)=> { // loop through arr after we created it by splitting 
        if(str.charCodeAt(index) === control ){ // if control and index are the same the sequence is all right
          ++control; // align with the next index
        }
        else {
          missing = String.fromCharCode(control);  // the sequence is lost, lets check where we are (its 100 = 'd') -- it returns a new string: "d"
        }
      })
      if(missing == undefined) return 'All letters are here!'; // if no missing (no gap in sequence) value is undefined so we order to return 
      // a message
      return missing; // d 
    }
    console.log(fearNoLetter('abce')); // "d" 
    console.log(fearNoLetter('abcdefghijklmnopqrstuvwxyz')); // undefined
  }
// #################################################################################

// #Mutations

  // Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
  // For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
  // The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
  // Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

  {
    function mutation(arr){
      return arr;
    }
    //Test
      // console.log(mutation(["hello", "hey"])); // false
      // console.log(mutation(["floor", "for"])); // true
      // console.log(mutation(["hello", "Hello"])); // true
  }


// Chunky MonkeyPassed

  // Write a function that splits an array (first argument) into groups the length of size (second argument) 
  // and returns them as a two-dimensional array.

{
  function chunkArrayInGroups(arr, size){
   
    return arr;
  }

  //  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5,6,7,8,9], 3));  //[[0, 1, 2], [3, 4, 5]]
  //  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));  //[[0, 1, 2, 3], [4, 5]]
 }

 // ##################################################################################################

// Missing Letters
    // Find the missing letter in the passed letter range and return it.
    // If all letters are present in the range, return undefined.
    {
      function fearNoLetter(str){
       let current = str.charCodeAt(0);
       let missing;
       str.split('').map((el, index)=> {
         if(str.charCodeAt(index) === current) ++current;
         else missing = String.fromCharCode(current);
       })
       if(missing === undefined) return 'No letter is missing from the row!';
        return missing; // d 
      }
      console.log(fearNoLetter('abce')); // "d" 
      console.log(fearNoLetter('abcdefghijklmnopqrstuvwxyz')); // undefined
    }

// algorithm 
  
  // store current
  // store missing  (empty)
  // make array
  // map array
  // compare index to charCode
  // conditions : if equal ascend by one
  // if not  ask for the string (fromCharCode) and store it in missing
  // return missing
