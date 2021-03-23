/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

sumToN(5) // returns 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null
***********************************************************************/
function sumToN(num) {
  console.log(`I'm running the function and passing it ${num}`);
  if (num === 0) {
    console.log(`We've reached the base case of 0! Let's start going back up the stack.`)
    return num;

  } else if (num > 0) {
    let sum = sumToN(num -1);
    console.log(`This function call was initially passed ${num}, so I'm adding ${num} to the current total of ${sum} to make ${num + sum}`)
    return num + sum;

  } else if (num < 0) {
    return null;

  }


}



console.log(sumToN(5)) // returns 15
// console.log(sumToN(1))  // returns 1
// console.log(sumToN(9))  // returns 45
// console.log(sumToN(-8))  // returns null
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}
