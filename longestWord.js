function findLongestWordLength(str) {
   //return str.length;
   const words = str.split(" ");
 
   const lengthOfMaxWord=words.map(word=> {
       let maxLength = 1;
 
     if(word.length > maxLength){
       maxLength = word.length;
     }
     return maxLength;
   });
   return lengthOfMaxWord;
 }
 console.log(findLongestWordLength("A quick browny fox"));