    


 // ##################################################################################################

// Missing Letters
    // Find the missing letter in the passed letter range and return it.
    // If all letters are present in the range, return undefined.
    // {
    //   function fearNoLetter(str){
    //    let current = str.charCodeAt(0); //97
    //    let missing;
    //    str.split('').map((el, index)=> {
    //      if(str.charCodeAt(index) === current) ++current;
    //      else missing = String.fromCharCode(current);
    //    })
    //    if(missing === undefined) return 'No letter is missing from the row!';
    //     return missing; // d 
    //   }
    //   console.log(fearNoLetter('abce')); // "d" 
    //   console.log(fearNoLetter('abcdefghijklmnopqrstuvwxyz')); // undefined
    // }

// algorithm 
  
  // store current
  // store missing  (empty)
  // make array
  // map array
  // compare index to charCode
  // conditions : if equal ascend by one
  // if not  ask for the string (fromCharCode) and store it in missing
  // return missing

{
  function uniteUnique(arr){
    let args = [...arguments];
    let mergedArray = args.reduce((acc, cur)=> {
      return acc.concat(cur.filter(el=> acc.indexOf(el) === -1));
    }, []);
    return mergedArray;
  }
    
    console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // [1,3,2,5,4]

  }

 

//#################################################################################

// SORTED UNION

  // Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

  // In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

  // The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

  // Check the assertion tests for examples.


{
    function uniteUnique(arr){
     
    }
      
      console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // [1,3,2,5,4]

}



 // #Mutations

    // Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
    // For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
    // The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
    // Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

  {
    function mutation(arr){
      return arr[1].toLowerCase().split('').map(el => arr[0].toLowerCase().indexOf(el) !== -1).reduce((a,b)=>a&&b);
    }
    //Test
       console.log(mutation(["hello", "hey"])); // false
       console.log(mutation(["Floor", "for"])); // true
       console.log(mutation(["hello", "Hello"])); // true
  }

// Chunky Monkey

  // Write a function that splits an array (first argument) into groups the length of size (second argument) 
  // and returns them as a two-dimensional array.

{
  function chunkArrayInGroups(arr, size){
    if(arr.length <= size) return [arr];
    return [arr.slice(0,size)].concat(chunkArrayInGroups(arr.slice(size), size));
  }

    console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5,6,7,8,9], 3));  //[[0, 1, 2], [3, 4, 5]]
    console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));  //[[0, 1, 2, 3], [4, 5]]
 }





