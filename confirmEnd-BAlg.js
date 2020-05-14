//Check if a string (first argument, str) ends with the given target string (second argument, target).

// With .endsWith() method
{
  function confirmEnd(str, target){
   //Polyfill
   if (!String.prototype.endsWith) {
      String.prototype.endsWith = function(search, this_len) {
         if (this_len === undefined || this_len > this.length) {
            this_len = this.length;
         }
         return this.substring(this_len - search.length, this_len) === search;
      };
   }     
   // ES6
   return str.endsWith(target);
  }

console.log(confirmEnd("Lambros", "os")); // true
}// end block

// With the use of substring method

{
function confirmEnding(str, target) {
  return str.substring(str.length - target.length) === target;
   }
 
 console.log(confirmEnding("Bastian", "n")); // true
}// end block

// use of slice
{
function confirmEnding(str,target){
   return str.slice(str.length - target.length) === target;
}
console.log(confirmEnding("Bastian", "n")); // true

}//end block

// go to hint for regex solution

