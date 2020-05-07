//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

// e.g truncateString("A-tisket a-tasket A green and yellow basket", 8); // "A-tisket..."

{
   function truncateString(str, num) {
      if(str.length-1 < num ) return str;
      else {
         const strToArr = str.split('');
         const rest = strToArr.slice(0,num);
         const restStr = rest.join('');
         const truncate = restStr+('...')

         return truncate;
      }
    }// end func

    // test 
    console.log(truncateString('Eloquent javascript is a wonderful programming book', 22));
    //Eloquent javascript is...

}// end block

