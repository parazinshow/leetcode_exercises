/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  let chunkedArr = []
  for (let i = 0; i < arr.length; i += size) {
    chunkedArr.push(arr.slice(i, i + size))
  }
  return chunkedArr
}

console.log(chunk([1, 2, 3, 4, 5], 1))
console.log(chunk([1, 9, 6, 3, 2], 3))
console.log(chunk([8, 5, 3, 2, 6], 6))
