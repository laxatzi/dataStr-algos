// Problem Explanation
// You will get an array that contains sub arrays of numbers and you need to return an array with the largest number from each of the sub arrays.

const largestOfFour = arr=> arr.map(item => Math.max(...item));  
 
console.log(largestOfFour([[13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));// [27,39, 1001];

// FCC solution
const largestOfFourRev = arr=> arr.map(Function.prototype.apply.bind(Math.max, null));

console.log(largestOfFourRev([[13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));// [27, 39, 1001];
