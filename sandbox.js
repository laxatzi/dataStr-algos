    
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


//Title Case a Sentence

  //Return the provided string with the first letter of each word capitalized. 
  //Make sure the rest of the word is in lower case.

  //For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

  {
    function titleCase(str){
      let convert = str.toLowerCase().split(" ");
      return convert.map(el => el.substring(0,1).toUpperCase().concat(el.substring(1))).join(" ");
    }

    console.log(titleCase("I'm a little tea pot")); // I'm A Little Tea Pot
    console.log(titleCase("sHoRt AnD sToUt")); // Short and Stout
  }
