    
// PIG LATIN
    // Pig Latin is a way of altering English Words. The rules are as follows:

    // - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

    // - If a word begins with a vowel, just add "way" at the end.


{
  function translatePigLatin(str) {
  }
  
// test here
   //  console.log(translatePigLatin("consonant"));  // onsonantcay
   // console.log(translatePigLatin("grreen"));  // eengrray
   // console.log(translatePigLatin('aubergine')); // aubergineway


} // end block


// Search and Replace
    // Perform a search and replace on the sentence using the arguments provided and return the new sentence.

    // First argument is the sentence to perform the search and replace on.

    // Second argument is the word that you will be replacing (before).

    // Third argument is what you will be replacing the second argument with (after).

    // Note
    // Preserve the case of the first character in the original word when you are replacing it.
    // For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

    // Use Test() method

    {

      function myReplace(str, before, after) {
     
      
      }
  //  console.log(myReplace("His name is Tom", "Tom", "john")); // should return "His name is John".
  //  console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms")); // should return "Let us get back to more Algorithms".
  //  console.log(myReplace("What a nice dog!", "dog", "Fox")); // What a nice fox

  }//end block

  // Alternative algo (without test() method and regex)
  {

    function myReplace(str, before, after) {
      
      let indexBefore = str.indexOf(before);
      if(str[indexBefore] === str[indexBefore].toUpperCase()) after = after.charAt(0).toUpperCase().concat(after.substring(1));
      return str.replace(before, after);
    
    }
//  console.log(myReplace("His name is Tom", "Tom", "john")); // should return "His name is John".
//  console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms")); // should return "Let us get back to more Algorithms".
//  console.log(myReplace("What a nice dog!", "dog", "Fox")); // What a nice fox

}//end block

// Pair Elements

    // {

    //   function pairElement(str) {
    //     let dnaObj = {
    //       A : 'T',
    //       T : 'A',
    //       C : 'G',
    //       G : 'C'
    //     };

    //   let splited = str.split(''); 
    //   return splited.map(key =>[key, dnaObj[key]]);
      

    //   }
      
    //   console.log(pairElement("ATCGA")); // should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]

    // }//end block

// #################################################################################


//Finders KeepersPassed

  // Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. 
  // This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

  {
    // function findElement(arr, func) {
    //   return;

    // }
    // console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) ); //8
    // console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })); // undefined
  }


//Slice and Splice

    // You are given two arrays and an index.

    // Copy each element of the first array into the second array, in order.

    // Begin inserting elements at index n of the second array.

    // Return the resulting array. The input arrays should remain the same after the function runs.

    {
      function frankenSplice(arr1, arr2, num) {
       console.log('slice and splice')
      }

      console.log(frankenSplice([1, 2, 3], [4, 5], 1)); // [4, 1, 2, 3, 5]
      console.log(frankenSplice([1, 2], ["a", "b"], 1)); // ["a", 1, 2, "b"]
    }



// Falsy Bouncer

    // Remove all falsy values from an array.

    // Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

    // Hint: Try converting each value to a Boolean.

    {

      function bouncer(arr){
        console.log('something');
      }

      // console.log(bouncer([false, null, 0, NaN, undefined, ""])); // []
      // console.log(bouncer([null, NaN, 1, 2, undefined])); // [1,2]

    }


    // Where do I Belong

    // Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. 
    // The returned value should be a number.
    // For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
    // Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is
    // less than 20 (index 2) and greater than 5 (index 1).

    {
      function getIndexToIns(arr, num){
        arr.push(num);
        let sorted = arr.sort((a,b)=>a-b);
        return sorted.indexOf(num);
      }
      console.log(getIndexToIns([20, 3, 5], 19)); // 2
      console.log(getIndexToIns([1,2,3,4], 1.5)); // 1
    }

    //arr.splice(index, 0, item)