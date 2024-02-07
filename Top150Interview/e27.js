/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  //o array é percorrido pelo foreach, trazendo para as primeiras posições do array em que nums[i] != val.
  let indexFiltrados = 0
  nums.forEach((e) => {
    if (e != val) {
      nums[indexFiltrados] = e
      indexFiltrados++
    }
  })
  return indexFiltrados
}

let nums = [0, 1, 2, 2, 3, 0, 4, 2] // Input array
let val = 2 // Value to remove
let expectedNums = [0, 1, 4, 0, 3] // The expected answer with correct length.
// It is sorted with no values equaling val.

let k = removeElement(nums, val) // Calls your implementation
