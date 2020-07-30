
//. EXERCISE #22
// Spinal case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
    // Switching words in a string
   // The following script switches the words in the string. 
   // For the replacement text, the script uses capturing groups and the $1 and $2 replacement patterns.

        // let re = /(\w+)\s(\w+)/;
        // let str = 'John Smith';
        // let newstr = str.replace(re, '$2, $1');
        // console.log(newstr);  // Smith, John
        // This logs 'Smith, John'.
        {

            function spinalCase(str) {
             
              const regex = /\s|_/g;
              const s = str.replace(/([a-z])([A-Z])/g, '$1 $2'); // Whenever low is followed by upper we create a gap
              return s.replace(regex, '-').toLowerCase();
            }
           
         console.log(spinalCase("thisIsSpinalTap")); //   return "this-is-spinal-tap".
          
         console.log(spinalCase('The_Andy_Griffith_Show')); // return "the-andy-griffith-show"
          
         console.log(spinalCase('This Is Spinal Tap')); // return "this-is-spinal-tap"
          
          
          }//end block

// Second method
{
    function spinalCase(str){
        return str.split(/\s|_|(?=[A-Z])/g).join("-").toLowerCase();
    }

// TEST
    console.log(spinalCase("thisIsSpinalTap")); //   return "this-is-spinal-tap".
          
    console.log(spinalCase('The_Andy_Griffith_Show')); // return "the-andy-griffith-show"
    
    console.log(spinalCase('This Is Spinal Tap')); // return "this-is-spinal-tap"

} // end block
