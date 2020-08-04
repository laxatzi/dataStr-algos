    
// PIG LATIN
    // Pig Latin is a way of altering English Words. The rules are as follows:

    // - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

    // - If a word begins with a vowel, just add "way" at the end.


{
  function translatePigLatin(str) {
    return str.replace(/(^[aeoui])(\w*)/, '$1$2way').replace(/(^[^aeoui]+)(\w*)/, '$2$1ay')
  }
  
  // test here
   console.log(translatePigLatin("consonant"));  // onsonantcay
   console.log(translatePigLatin("grreen"));  // eengrray
   console.log(translatePigLatin('aubergine')); // aubergineway


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
        
       let regex = /^[A-Z]/;
       if(regex.test(before)) after = after.charAt(0).toUpperCase().concat(after.substring(1));
       else after = after.charAt(0).toLowerCase().concat(after.substring(1));
       return str.replace(before, after);
      
      }
   console.log(myReplace("His name is Tom", "Tom", "john")); // should return "His name is John".
   console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms")); // should return "Let us get back to more Algorithms".
   console.log(myReplace("What a nice dog!", "dog", "Fox")); // What a nice fox

  }//end block

  // Alternative algo (without test() method and regex)
  {

    function myReplace(str, before, after) {
      
      let indexBefore = str.indexOf(before);
      if(str[indexBefore] === str[indexBefore].toUpperCase()) after = after.charAt(0).toUpperCase().concat(after.substring(1));
      return str.replace(before, after);
    
    }
 console.log(myReplace("His name is Tom", "Tom", "john")); // should return "His name is John".
 console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms")); // should return "Let us get back to more Algorithms".
 console.log(myReplace("What a nice dog!", "dog", "Fox")); // What a nice fox

}//end block