/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15
***********************************************************************/

function sumArray(array){
    // console.log(`I'm running the function and passing it ${array}`);
  let sum = 0;
  if(array.length === 1){
    sum += array[0];
    // console.log(`We've reached the base case of the variable of ${array}! Let's start going back up the stack.`)
    return sum;
  }
  else{
      // console.log(`This function call was initially passed ${array}, so I'm adding the last element of the array to the current total of ${sum} to make ${array[array.length -1] + sum}`)
      sum += array[0]
    return sum + sumArray(array.slice(1));

  }
}


// function sumArray(array, sum = 0){ //sets default parameter
//   if(array.length === 1){
//     sum += array[0];
//     return sum;
//   }else{
//       sum += array[array.length -1]
//     return sumArray(array.slice(0, array.length-1), sum);

//   }
// }




console.log(sumArray([1, 2, 3])); //  6
console.log(sumArray([0, 1, -3])); //  -2
console.log(sumArray([1, 2, 3, 4, 5])); // 15

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}
