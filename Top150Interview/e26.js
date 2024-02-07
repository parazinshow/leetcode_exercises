/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let uniques = []
  nums.forEach((e, index) => {
    if (!uniques.includes(e)) {
      nums[uniques.length] = nums[index]
      uniques.push(e)
    }
  })
  return uniques.length
}

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4] // Input array
let expectedNums = [0, 1, 2, 3, 4] // The expected answer with correct length

let k = removeDuplicates(nums) // Calls your implementation
console.log(k)
console.log(nums)
