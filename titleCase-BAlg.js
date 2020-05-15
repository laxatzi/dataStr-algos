//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// my solution
{

   const titleCase = str => str.toLowerCase().split(' ')
                .map(elem => elem.charAt(0).toUpperCase()+elem.slice(1))
                .join(' ');
    
   
 
 console.log(titleCase("Τι κάνετε, όλα καλά;")); //Τι Κάνετε, Όλα Καλά;
 
 }// end of block
 
 // alternative, cleaner solution using the replace method
  // The replace method returns a new string with some or all matches of a pattern replaced by a replacement.
  // The pattern can be a string or a regex, and the replacement can be a string or a function to be called for each match. It pattern is a string, only the first occurrence will be replaced.
 {
   const titleCase = str => str.toLowerCase().split(' ')
                              .map(elem => elem.replace(elem.charAt(0), elem.charAt(0).toUpperCase()))
                              .join(' ');
   
   console.log(titleCase("Τι κάνετε, όλα καλά;")); //Τι Κάνετε, Όλα Καλά;
 
 }// end of block
 
 // alternative, best solution
 {
   const titleCase = str=>  str.toLowerCase().replace(/(^|\s)\S/g, firstChar => firstChar.toUpperCase());
   
 
   console.log(titleCase("Τι κάνετε, όλα καλά;")); //Τι Κάνετε, Όλα Καλά;
 } // end block
 