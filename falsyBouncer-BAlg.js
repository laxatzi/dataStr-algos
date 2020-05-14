//.Remove all falsy values from an array.

//.Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

//.Hint: Try converting each value to a Boolean.

const falsyBouncer = arr => arr.filter(elem => !!elem);

console.log(falsyBouncer([7, "ate", "", false, 9]));
