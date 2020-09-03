    
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

{
  
  // function uniteUnique(arr) {
  //   let args = [...arguments];
  //   let merged = args.reduce((acc, cur)=> acc.concat(cur));
  //   let sortMerged = merged.sort((a,b)=> a -b);
  //      sortMerged.reduce((acc,cur)=> {
  //       if(cur !== acc[0]) acc.unshift(cur);
  //       return acc;
  //     }, [])
  //   }

  function uniteUnique(arr){
     let args = [...arguments];
     let newArr = args.reduce((acc, cur)=> {
       return acc.concat(
         cur.filter(el=> acc.indexOf(el)=== -1)
       )
     });
     return newArr;
  }
    
    console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); //

  }