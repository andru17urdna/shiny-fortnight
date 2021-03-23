/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
***********************************************************************/

function addToTwelve(array){

  let total = array[0] + array[1];

  if(total === 12)
    return true;
    if (array.length <= 2)
    return false;
  //array[0] + array[1] //add 1 to each of them until the second value is the array length

  return  addToTwelve(array.slice(1));
  
}

console.log(addToTwelve([1, 3, 4, 7, 5])); // true
// addToTwelve([1, 3, 4, 7, 6]); // false
// addToTwelve([1, 11, 4, 7, 6]); // true
// addToTwelve([1, 12, 4, 7, 6]); // false
console.log(addToTwelve([1])); // false

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}
