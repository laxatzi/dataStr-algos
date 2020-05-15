//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

// e.g truncateString("A-tisket a-tasket A green and yellow basket", 8); // "A-tisket..."
{
   function truncateString(str, num) {
     
     if(str.length > num) return str.slice(0, num).concat('...');
     return str;
    }
    //test
   console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));//"A-tisket..."
   console.log(truncateString('Lambros', 8));
 
 }//block
 
 //Or
 {
   const truncateString = (str, num)=>  str.length > num ? str.slice(0, num).concat('...') : str;
   // test
   console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));//"A-tisket..."
   console.log(truncateString('Stella', 8));
   
 }// block
