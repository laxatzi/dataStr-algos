function findLongestWordLength(str) {
   //return str.length;
   const words = str.split(" ");

   const lengthOfMaxWord = words.map(word=> word.length ); // end of map
   
   return Math.max(...lengthOfMaxWord);

 } // end of func
 
 console.log(findLongestWordLength("Hi my name is Lampros"));
