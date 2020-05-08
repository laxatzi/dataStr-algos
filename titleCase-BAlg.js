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
 
 console.log(titleCase("Τι κάνετε όλα καλά;")); //Τι Κάνετε Όλα Καλά;

}// end of block

// alternative, cleaner solution using the replace method
{
   function titleCase(str){
      const convertToArr = str.toLowerCase().split(' ');
      const capitalize = convertToArr.map(elem=>{
         return elem.replace(elem.charAt(0), elem.charAt(0).toUpperCase());
      });
      return capitalize.join(' ');
   }
   console.log(titleCase("Τι κάνετε όλα καλά;")); //Τι Κάνετε Όλα Καλά;

}// end of block

