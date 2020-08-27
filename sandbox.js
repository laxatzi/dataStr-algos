    
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

// #Mutations

  // Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
  // For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
  // The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
  // Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

  {
    function mutation(arr){
      return;
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
    
  }

  //  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));  //[[0, 1, 2], [3, 4, 5]]
  //  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));  //[[0, 1, 2, 3], [4, 5]]
 }

//Diff Two Arrays

    // Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
    // In other words, return the symmetric difference of the two arrays.

    // Note
    // You can return the array with its elements in any order.
    {

      function diffArray(arr1, arr2){
        let concatArrays = arr1.concat(arr2);
        return concatArrays.filter(el => !arr1.includes(el) || !arr2.includes(el));
      }

      console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4])); // ["piglet", 4]
      console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); // [4];
    }