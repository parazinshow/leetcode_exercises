/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  var accum = init
  for (var i = 0; i < nums.length; i++) {
    accum = fn(accum, nums[i])
  }
  return accum
}

console.log(
  reduce(
    [1, 2, 3, 4],
    function sum(accum, curr) {
      return accum + curr
    },
    0
  )
)
console.log(
  reduce(
    [1, 2, 3, 4],
    function sum(accum, curr) {
      return accum + curr * curr
    },
    100
  )
)
console.log(
  reduce(
    [],
    function sum(accum, curr) {
      return 0
    },
    25
  )
)
