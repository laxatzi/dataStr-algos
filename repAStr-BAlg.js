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


// Resolve the challenge with the build in repeat method caniuse global usage: 90.59%
{
  function repeatStringNumTimes(str, num){
     // Polyfill
   if (!String.prototype.repeat) {
      String.prototype.repeat = function(count) {
        'use strict';
        if (this == null)
          throw new TypeError('can\'t convert ' + this + ' to object');
    
        var str = '' + this;
        // To convert string to integer.
        count = +count;
        // Check NaN
        if (count != count)
          count = 0;
    
        if (count < 0)
          throw new RangeError('repeat count must be non-negative');
    
        if (count == Infinity)
          throw new RangeError('repeat count must be less than infinity');
    
        count = Math.floor(count);
        if (str.length == 0 || count == 0)
          return '';
    
        // Ensuring count is a 31-bit integer allows us to heavily optimize the
        // main part. But anyway, most current (August 2014) browsers can't handle
        // strings 1 << 28 chars or longer, so:
        if (str.length * count >= 1 << 28)
          throw new RangeError('repeat count must not overflow maximum string size');
    
        var maxCount = str.length * count;
        count = Math.floor(Math.log(count) / Math.log(2));
        while (count) {
           str += str;
           count--;
        }
        str += str.substring(0, maxCount - str.length);
        return str;
      }
    }
    // ES6
      else if(num <= 0) return '';
      return str.repeat(num);
   }
console.log(repeatStringNumTimes("ghi", 3)); //ghighighi

}