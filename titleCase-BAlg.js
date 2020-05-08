//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// my solution
{
function titleCase(str) {
   const convertToArr = str.split(' ');
   const capitalize = convertToArr.map(elem=> {
       const cap = elem.charAt(0).toUpperCase();
       const rest = elem.slice(1).toLowerCase();
       return cap + rest;
    }) ;
    return capitalize.join(' ');
 }
 
 console.log(titleCase("Τι κάνετε, όλα καλά;")); //Τι Κάνετε, Όλα Καλά;

}// end of block

// alternative, cleaner solution using the replace method
  // The replace method returns a new string with some or all matches of a pattern replaced by a replacement.
  // The pattern can be a string or a regex, and the replacement can be a string or a function to be called for each match. It pattern is a string, only the first occurrence will be replaced.
{
   function titleCase(str){
      const convertToArr = str.toLowerCase().split(' ');
      const capitalize = convertToArr.map(elem=>{
         return elem.replace(elem.charAt(0), elem.charAt(0).toUpperCase());
      });
      return capitalize.join(' ');
   }
   console.log(titleCase("Τι κάνετε, όλα καλά;")); //Τι Κάνετε, Όλα Καλά;

}// end of block

// alternative, best solution
{
   function titleCase(str){
      return str.toLowerCase().replace(/(^|\s)\S/g, firstChar => firstChar.toUpperCase());
   }

   console.log(titleCase("Τι κάνετε, όλα καλά;")); //Τι Κάνετε, Όλα Καλά;
} // end block