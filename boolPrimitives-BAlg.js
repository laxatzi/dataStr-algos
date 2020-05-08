//Check if a value is classified as a boolean primitive. Return true or false. Boolean primitives are true and false.
// My first not so clean solution
{
   function booWho(bool) {
      if(bool===true || bool===false) return true;
      return false;
    }
    
  console.log(booWho(null)); // false

}// end block

// A cleaner solution
{
   function booWho(boo){
      return typeof boo === 'boolean';
   }

   console.log(booWho(false)); //true
}

