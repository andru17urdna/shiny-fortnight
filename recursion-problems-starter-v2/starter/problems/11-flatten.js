/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

// function flatten(array){
//   let returnarray = [];

//   if (Array.isArray(array[1])){
//     returnarray.push(array[0]);
//     return array[1];
//   }
//   else{
//     returnarray = [array[0], ...flatten(array.slice(1))];
//     return returnarray;
//   }
// }

function flatten(array){
  let returnarray = [];
  if (Array.isArray(array[array.length-1])){
    array =  [...array.slice(0, array.length-1), ...array[array.length-1]];
    return flatten(array)
  }
  return array;

}




console.log(flatten([])); // []
console.log(flatten([1, 2])); // [1, 2]
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
