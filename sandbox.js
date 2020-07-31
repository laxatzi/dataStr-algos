
//. EXERCISE #22
// Spinal case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

{
  function spinalCase(str) {
    return;
  }
 
  // console.log(spinalCase("this Is Spinal Tap")); //   return "this-is-spinal-tap".
  // console.log(spinalCase("this_Is_Spinal_Tap")); //   return "this-is-spinal-tap".
  // console.log(spinalCase("thisIsSpinalTap")); //   return "this-is-spinal-tap".

}//end block


// PIG LATIN
    // Pig Latin is a way of altering English Words. The rules are as follows:

    // - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

    // - If a word begins with a vowel, just add "way" at the end.

{

function pigLatin(str) {
  let consonantCluster = str.match(/^[^aeiou]+/);

 return consonantCluster !== null ? str.replace(consonantCluster, '').concat(consonantCluster + 'ay') : str.concat('way');
}

console.log(pigLatin("grreen"));
console.log(pigLatin('aubergine'));

}//end block

// Alt way
{
  function translatePigLatin(str) {
    return str
      .replace(/^[aeiou]\w*/, "$&way")
      .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
  }
  
  // test here
  console.log(translatePigLatin("consonant"));
  console.log(pigLatin("grreen"));
console.log(pigLatin('aubergine'));


} // end block
// EXERCISE #19
    //. Q: Remove Duplicate Elements from an Array
    {
      let cities = ["Athens","Athens", "Thessaloniki", "Iraklion", "Drama", "Thessaloniki"];
    
    //Remove Dups from an Array
     
    function removeDups(arr){
      //return;
    }
      //  console.log(cities.sort());
      // console.log(removeDups(cities)); // ["Athens", "Drama", "Iraklion", "Thessaloniki"]
    
    }// end block
    
    