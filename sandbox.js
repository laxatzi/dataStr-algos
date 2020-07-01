// EXERCISE #20
// Intermediate Algorithm Scripting: Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note
// You have to use the arguments object.

{

   function destroyer(arr) {
       let args = [...arguments];
       return arr.concat(args).filter(el => !args.includes(el));
      }

  console.log(destroyer(["tree", "hamburger", 53], "tree", 53)); // should return ["hamburger"]

}//end block