//We have defined a function, 'quickCheck', that takes an array and an element as arguments. Modify the function using 'indexOf()' so that it return 'true' if the passed element exists in the array, and 'false' if not.

function quickCheck(arr, el){
   if(arr.indexOf(el) == -1){
      return false;
   }else{
      return true;
   }
}

// console.log(quickCheck(['onions', 'leeks', 'lentils'], 'mushrooms'));
