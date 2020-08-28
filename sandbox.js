    
// PIG LATIN
    // Pig Latin is a way of altering English Words. The rules are as follows:

    // - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

    // - If a word begins with a vowel, just add "way" at the end.


{
  function translatePigLatin(str) {
    return str;
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
        return str;
      
      }
  //  console.log(myReplace("His name is Tom", "Tom", "john")); // should return "His name is John".
  //  console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms")); // should return "Let us get back to more Algorithms".
  //  console.log(myReplace("What a nice dog!", "dog", "Fox")); // What a nice fox

  }//end block

  // Alternative algo (without test() method and regex)
  {

    function myReplace(str, before, after) {
      
      return str;
    
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

  
  // Wherefore art thouPassed

    // Make a function that looks through an array of objects (first argument) and returns 
    // an array of all objects that have matching name and value pairs (second argument). 
    // Each name and value pair of the source object has to be present in the object from the collection 
    // if it is to be included in the returned array.

    // For example, if the first argument is [{ first: "Romeo", last: "Montague" }, 
    // { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, 
    // then you must return the third object from the array (the first argument),
    // because it contains the name and its value, that was passed on as the second argument.

    {
      function whatIsInAName(collection, source){
        //HINT the source key is the 'key' to the solution
        return source;
        }
      
        //TEST
          console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null },
          { first: "Tybalt", last: "Capulet" },{first: "Lambros"}] // end of collection
          , { last: "Capulet" }));  //[{ first: "Tybalt", last: "Capulet" }]

          console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3})); // []
    }
  

    //Spinal Tap Case

// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

{
  function spinalCase(str){
   return str.split(/\s|_|(?=[A-Z])/g).join('-').toLowerCase();
  }

  console.log(spinalCase("The_Andy_Griffith_Show")); //"this-is-spinal-tap"
  console.log(spinalCase("The Andy Griffith Show")); // //"this-is-spinal-tap"
  console.log(spinalCase("theAndyGriffithShow")); // "this-is-spinal-tap"
  console.log(spinalCase("TheAndy-Griffith_Show"))
}