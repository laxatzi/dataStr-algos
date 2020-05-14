//.Return the factorial of the provided integer.

//.If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
//.Only integers greater than or equal to zero will be supplied to the function.

function factorialize(num) {
   if(num<=0) return 1;
   return num * factorialize(num -1);
 }
 
 console.log(factorialize(5)); // 120