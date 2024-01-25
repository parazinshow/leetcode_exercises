// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

// The fn function takes one or two arguments:

// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

// Please solve it without the built-in Array.filter method.

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  filteredArr = []
  for (var i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) filteredArr.push(arr[i])
  }
  return filteredArr
}

function greaterThan10(n) {
  return n > 10
}

function firstIndex(n, i) {
  return i === 0
}

function plusOne(n) {
  return n + 1
}

console.log(filter([0, 10, 20, 30], greaterThan10)) // [20, 30]
console.log(filter([1, 2, 3], firstIndex)) // [1]
console.log(filter([-2, -1, 0, 1, 2], plusOne)) // [-2,0,1,2]
