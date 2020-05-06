//Check if a string (first argument, str) ends with the given target string (second argument, target).

// With .endsWith() method

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
// With the use of substring method

function confirmEnding(str, target) {
   let endWith = str.substring(str.length - target.length);
   if(endWith === target) return true;
   return false;
 }
 
 console.log(confirmEnding("Bastian", "n")); // true


