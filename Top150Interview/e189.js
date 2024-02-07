/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function (nums, k) {
  const n = nums.length
  k %= n // Reduzir k para o intervalo válido de rotação

  if (k === 0) return nums // Se k for zero, não é necessário rotacionar
  let arr = nums.splice(nums.length - k)
  nums.unshift(...arr)
}
// var rotate = function (nums, k) {
//   const n = nums.length
//   k %= n // Reduzir k para o intervalo válido de rotação

//   if (k === 0) return nums // Se k for zero, não é necessário rotacionar

//   let aux, temp, index
//   do {
//     aux = nums[nums.length - 1]
//     for (index = 0; index < nums.length; index++) {
//       temp = nums[index]
//       nums[index] = aux
//       aux = temp
//     }
//     k--
//   } while (k > 0)
// }

rotate((nums = [1, 2, 3, 4, 5, 6, 7]), (k = 2))
