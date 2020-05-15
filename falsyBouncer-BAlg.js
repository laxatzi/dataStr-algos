//.Remove all falsy values from an array.

//.Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

//.Hint: Try converting each value to a Boolean.
{
const falsyBouncer = arr => arr.filter(elem => !!elem);

console.log(falsyBouncer([7, "ate", "", false, 9]));

}//block
// OR
{
   const falsyBouncer = arr => arr.filter(el => Boolean(el));
   console.log(bouncer([null, NaN, 1, 2, undefined,10])); // [1,2]

}