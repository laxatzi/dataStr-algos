(function () {
   'use strict';

//. We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

//. For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
function sumAll([ a, b ] ) {
   let alterer = a - b < 0 ? 1 : -1;
   if(a === b) return a;
   return a + sumAll([a + alterer, b])
 }

console.log('sum is: ' + sumAll([5,1])) // 10

 })();

