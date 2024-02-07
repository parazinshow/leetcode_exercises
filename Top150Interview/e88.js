/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = 0
  for (let index = m; index < nums1.length; index++) {
    if (nums1[index] == 0) nums1[index] = nums2[i++]
  }
  nums1.sort((a, b) => a - b)
}

merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3)

// console.log(merge((nums1 = [1]), (m = 1), (nums2 = []), (n = 0)))

// console.log(merge([0], 0, [1], 1))
