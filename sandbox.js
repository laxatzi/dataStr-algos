
//.Return the length of the longest word in the provided sentence.Your response should be a number
{
  function findLongestWordLength(str) {
    let splitted = str.split(" ");
    return splitted.map(el => {
      return el.length;
    }).reduce((acc, current)=> {
      return current >= acc ? current : acc;
    })
  }

  console.log(findLongestWordLength("Hi my name is Lampros")); //7

}// block

{
  function findLongestWordLength(str){
  }

  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); //6

}//block


//. Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

//. Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

{
  function largestOfFour(arr) {
    }
  largestOfFour([ [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); //. [27,39, 1001];
}

// FCC solution
{
  function largestOfFour(arr){
  }
}
