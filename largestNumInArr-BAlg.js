function largestOfFour(arr) {
   return arr.map(item => Math.max(...item));
   
 }

largestOfFour([ [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); //. [27,39, 1001];

// FCC solution

{
  function largestOfFour(arr){
    return arr.map(Function.prototype.apply.bind(Math.max, null));
  }
}

//. Code Explanation
  //. We build a special callback function(using the Function.bind method), that works just like Math.max** but also has Function.prototype.apply ability to take arrays as arguments.
  //. We start mapping through the main arrays items (sub-arrays). 
  //. We need a callback function to use in map so we can find the max number in each subarray.
  //. So we want to create a function that does the work of Math.max accepting input as an array (Math.max doesn't accept arrays by default).
  //. To do the work of accepting arguments as arrays we have the Function.prototype.apply method, BUT this method makes things complicated by invoking the context function.
  //. i.e Math.max.apply(null, [9, 8, 20]); will invoke something like a Math.max method. 
  //. In the example we are passing null as the context of the Function.prototype.apply method Math.max doesn't need any context.

    //. since arr.map expects a callback function and not just an expression, we created a function out of the previous expression by using the Function.bind method.
    //. Since Function.prototype.apply is a static method of the same Function object, we call Function.prototype.bind on Function.prototype.apply i.e Function.prototype.apply.bind 
    //. Now we pass the context of the Function.prototype.apply.bind function call (in this case we want Math.max so we can use its functionality).
    //. Since the embedded Function.prototype.apply method will also require a context as it's 1st argument, we need to pass it a bogus context.
    //. So we pass null as the second parameter to Function.prototype.apply.bind which gives a context to the Math.max method.
    //. Since Max.math is independent of any context, hence, it ignores the bogus context given by Function.prototype.apply method call.
    //. Thus, our Function.prototype.apply.bind(Max.math, null) makes a new function accepting the arr.map values i.e the sub-arrays. 

    //. (from stackOverflow) -- Function.prototype.apply.bind usages?

    //. Explanation - For the following code: Function.prototype.bind.apply(f,arguments) 
    //. Use the original (if exists) bind method over f with arguments (which its first item will be used as context to this)
    //. Question: In what scenarios would i use this code? 

    //. This is used to fix the first parameter of apply.
    //. For example, when you get the max value from an array you do: 
    //. var max_value = Math.max.apply(null, [1,2,3]);
    //. But you want to get the first parameter fixed to null, so you could create a new function with:
    //. var max = Function.prototype.apply.bind(Math.max, null);
    //. then you could just do var max_value = max([1,2,3]); // 3

    //. REFS
      //. The apply method calls a function with a given 'this' value and 'arguments' provided as an array.
      //. Syntax: function.apply(thisArg, [argsArray]);
      //. Parameters explained:
      //. thisArg
        //. Optional. The value of 'this' provided for the call to func. Note that 'this' may not be the actual value seen by the method. If the method is a function in non-strict mode code, null and undefined will be replaced with the global object and primitive values will be boxed.
      //. argsArray
        //. Optional. An array-like object, specifying the arguments with which func should be called, or null or undefined if no arguments should be provided to the function. 
        //. With apply() you can use an array-literal func.apply(this, ['a', 'b', 'c']); or an array object  func.apply(this, new Array('a', 'b', 'c'));
        //. You can also use the 'arguments' keyword* for the argsArray parameter. arguments is a local variable of a function. It can be used for all unspecified arguments of the call object. Thus you do not have to know the arguments of the called object, when you use the apply method. 
          //. You can use 'arguments' to pass all the arguments to the called object. The called object is then responsible for handling the arguments. 
        //. You can also use any kind of object which is array like, so in practice, this means it is going to have a property length and integer properties in the range (0..length-1). As an example you can use a NodeList or a custom object like {'length':2, '0':'eat', '1':'bananas'};

    //. Using apply to build-in functions
      //. Clever usage of apply allows you to use built-in functions for some tasks, that otherwise probably would have been written by looping. Example with Math.max:
      {
        // find max number in array
        let numbers = [1,3,5,7];
        // using Math.max
        let maxNumber = Math.max.apply(null, numbers);
        // This is equal to Math.max  (numbers[0], ...);
        // OR equal to Math.max(1,3,5,7)
      }

    //.  * arguments
      //. arguments is an array-like object accessible inside functions that contains the values of the arguments passed to the function
      //. array-like means that the 'arguments' has a length property and properties indexed zerobased but it doesn't have built-in methods like map and forEach. 

    {
      function func1(a,b,c){
        console.log(arguments[0]);//1
        console.log(arguments[1]);//3
      }
      func1(1,3,5); 
    }

     //. The 'arguments' object is local variable available within all NON-arrow functions. 
     //. You can refer to a functions arguments inside that function by using its 'arguments' object.
     //. It has entries for each argument the function was called within, with the first entry's index at 0

      //. For example:
      {
        arguments[0]; // first argument
        arguments[1]; // second argument
      }

    //. Each argument can also be set or reassigned:
    //. arguments[0] = 'another value';

    //. The arguments object is not an Array. It is similar but it has no properties except length. For example it does not have the pop method. 
    //. However it can be converted to a real Array.
    {
      let args = Array.prototype.slice.call(arguments);
      // using an array literal is shorter than above but it allocates an empty array.
      let args1 = [].slice.call(arguments);
    }
    //. As you can do with any Array-like object, you can use Array.from() method or spread operator to convert arguments to real array.

    {
      let args2 = Array.from(arguments);
      let args3 = [...arguments];
    }

    //. Type of arguments
    //. The typeof operator return 'object' when used with 'arguments'
      { 
        console.log(typeof arguments) // object 
      }
    //. The typeof individual arguments can be determined by indexing 'arguments'
      {
        console.log(typeof arguments[0]); // type of the first argument
      }    

    //. Example of rest, default and destructured parameters
    {
      function foo(...args){
        return args;
      }
      foo(1,3,5); // [1,3,5]
    }
    //. While the presence of rest, default, or destructured parameters does not alter the behavior of the arguments object in strict mode code, there is a subtle difference for non-strict code. When a non-strict function does contain rest, default, or destructured parameters, then the values in the arguments object do not track the values of the arguments. Instead, they reflect the arguments provided when the function was called.


  //. ** Math.max()
    //. It returns the largest of zero or more numbers
     //. Syntax: Math.max([value1[, value2[, ...]]]);
     //. value1, value2, ... (Numbers)
     //. If at least one of the arguments cannot be converted to a number, NaN is returned.

  //. Both spread(...) and apply will either fail or return the wrong result if the array has too many elements, because they try to pass the array elements as function parameters.
  //. Using too many parameters run the risk of exceeding the javascript engine's argument length limit.
  //. The consequence of applying a function with too many arguments(probably more that tens of thousands that is (probably close to  65500)), varies across engines.
  //. This is bacause the limit is unspecified. Some engines will throw an exception. More harmfully, some engines will arbitrary limit the numbers of arguments actually passed to the function.
  //. Example:
  //. If an engine has a limit of four arguments, it would be as if having the array myArr=[1,2,3,4,5]
  //. and only the arguments 1,2,3,4 had been passed to apply.

  //. *** kyle simpson blog post
    //. In both cases, passing either a or b to apply(..)'s second argument (or via the ... spread operator) means that the array is being spread out as arguments to the function.
    //. The first major problem is that we're effectively doubling the size (temporarily, of course!) of the thing being appended by essentially copying its contents to the stack for the function call. Moreover, different JS engines have different implementation-dependent limitations to the number of arguments that can be passed.
    //. So, if the array being added on has a million items in it, you'd almost certainly way exceed the size of the size of the stack allowed for that push(..) or unshift(..) call. Ugh. It'll work just fine for a few thousand elements, but you have to be careful not to exceed a reasonably safe limit.

    //. REDUCE

    //. Getting the maximum element of an array using the reduce method
      //. Array.reduce() can be used. It works by comparing each value:
      {
        let arr = [1,3,5];
        let max = arr.reduce(function(a,b){
          return Math.max(a,b)
        })

      }

    //


