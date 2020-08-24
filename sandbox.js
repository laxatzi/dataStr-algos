    
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




// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Only integers greater than or equal to zero will be supplied to the function.

{
  function factorialize(num){
    if(num === 0) return 1;
    return num * factorialize(num -1);
  }
  console.log(factorialize(7)); // 5040
}//end block
