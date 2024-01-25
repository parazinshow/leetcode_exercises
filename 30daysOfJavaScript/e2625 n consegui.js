/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */

let i = 0
var flat = function (arr, n, depthAtual = 0, index = 0) {
  if (n === 0) return arr
  if (depthAtual === 0) depthAtual += 1
  if (index === arr.length) {
    depthAtual++
    if (depthAtual <= n) index = 0
  }
  console.log(
    'index =>',
    index,
    'arr.length=>',
    arr.length,
    'depthAtual=>',
    depthAtual
  )
  i = index
  if (index != arr.length) {
    for (i; i < arr.length; i++) {
      console.log(arr[i])
      if (Array.isArray(arr[i]) && depthAtual <= n) {
        auxIndex = i + arr[i].length
        arr.splice(i, 1, ...arr[i])
        return flat(arr, n, depthAtual, auxIndex)
      }
    }
  }

  return arr
}

//console.log(
console.log(
  flat(
    [
      [1, 2],
      [3, [4, [5, [6]]], 7],
      [8, 9, 10],
    ],
    2
  )
)
// [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]
//)
