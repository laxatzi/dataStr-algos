//Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

// Resolve the challenge with a while loop. 
{
function repeatStringNumTimes(str, num) {
   if(num <= 0) return '';
      const  strArr = [];
      while(strArr.length < num){
          strArr.push(str);
      }
      return strArr.join('');
  } // end func
console.log(repeatStringNumTimes("abc", 3)); // abcabcabc

} // end block


// Resolve the challenge with functional programming methods : recursion
{

function repeatStringNumTimes(str, num) {
   if(num <= 0) return '';
      return str + repeatStringNumTimes(str, num-1);
   }
 console.log( repeatStringNumTimes("def", 3)); //defdefdef

} // end block


// Resolve the challenge with the build in repeat method
{
  function repeatStringNumTimes(str, num){
      if(num <= 0) return '';
      return str.repeat(num);
   }
console.log(repeatStringNumTimes("ghi", 3)); //ghighighi

}