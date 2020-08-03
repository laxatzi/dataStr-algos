
//. EXERCISE #22
// Spinal case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

{
  function spinalCase(str) {
    let regex = /\s+|_+/g;
    let re = /([a-z])([A-Z])/g;
    return str.replace(re, '$1 $2').replace(regex, '-').toLowerCase();
  }
   console.log(spinalCase("this Is Spinal Tap")); //   return "this-is-spinal-tap".
   console.log(spinalCase("this_Is_Spinal_Tap")); //   return "this-is-spinal-tap".
   console.log(spinalCase("thisIsSpinalTap")); //   return "this-is-spinal-tap".

}//end block


// EXERCISE #19
    //. Q: Remove Duplicate Elements from an Array
    // first algorithm 
    {
      let cities = ["Athens","Athens", "Thessaloniki", "Iraklion", "Drama", "Thessaloniki"];
    
    //Remove Dups from an Array
     
    function removeDups(arr){
      return [...new Set(arr)];
    }
      //  console.log(cities.sort());
       console.log(removeDups(cities)); // ["Athens", "Drama", "Iraklion", "Thessaloniki"]
    
    }// end block

    // second algorithm
    {
        let cities = ["London", "Paris", "Florence", "Valencia", "London", "Valencia"];

       function removeDups(arr){
          return arr.sort().reduce((acc, cur)=> {
            if(cur !== acc[0]) acc.unshift(cur);
            return acc;
          },[]);
       }

       console.log(removeDups(cities));

    }// end block
    
    
// PIG LATIN
    // Pig Latin is a way of altering English Words. The rules are as follows:

    // - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

    // - If a word begins with a vowel, just add "way" at the end.


{
  function translatePigLatin(str) {
    return str.replace(/(^[aeiou])(\w*)/, '$1$2way').replace(/(^[^aeiou]+)(\w*)/, '$2$1ay');
  }
  
  // test here
  console.log(translatePigLatin("consonant"));  // onsonantcay
  console.log(translatePigLatin("grreen"));  // eengrray
  console.log(translatePigLatin('aubergine')); // aubergineway


} // end block
