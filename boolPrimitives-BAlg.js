//Check if a value is classified as a boolean primitive. Return true or false. Boolean primitives are true and false.

// A cleaner solution
{
   function booWho(boo){
      return typeof boo === 'boolean';
   }

   console.log(booWho(false)); //true
}

