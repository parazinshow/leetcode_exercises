/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  for (let index = 1; index < nums.length; index++) {
    if (nums[index] == nums[index + 1] && nums[index] == nums[index - 1]) {
      index--
      nums.splice(index, 1)
    }
  }
  nums.sort((a, b) => a - b)
  //console.log(nums)
}

let nums = [-3, -1, 0, 0, 0, 3, 3] // Input array

let k = removeDuplicates(nums) // Calls your implementation
// console.log(k)
// console.log(nums)
