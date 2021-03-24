/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples:

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

  function subsets(arr) {

    if (arr.length === 0) {
        return arr;

    }
    if (arr.length === 1) {
        return arr subsets(arr[] -1) //return the array and call subsets on an empty array

    }
    if (arr.length > 1)   {
        subsets(arr.slice(1)) // return the array and call subsets on a smaller array?
        return arr;
    }


  }

  function subsets(arr) {
    if(!arr.length) return [[]];
    let first = arr[0];
    let sSets = subsets(arr.slice(1));
    let groups = sSets.map((el) => [...el, first]);
    return [...sSets, ...groups];
  }





console.log(subsets([])) // [[]]
console.log(subsets([1])) // [[], [1]]
console.log(subsets([1, 2])) // [[], [1], [2], [1, 2]]
console.log(subsets([1, 2, 3])) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
