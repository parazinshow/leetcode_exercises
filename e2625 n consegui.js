// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, [9, 10, 11], 12],
//   [13, 14, 15]
// ]

/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */

var flat = function (arr, n) {
  if (n === 0) return arr
  return recursaoDeArray(arr, n, 1)
}

function recursaoDeArray(arr, depthTotal, depthAtual, index = 0) {
  // let i = index
  // console.log(index == arr.length, '=>', arr)
  // if (index == arr.length) {
  //   depthAtual++
  // }

  // if (depthAtual > depthTotal) {
  //   return
  // } else {
  //   for (i; i < arr.length; i++) {
  //     if (typeof arr[i] != 'number') {
  //       auxIndex = i + arr[i].length
  //       arr.splice(i, 1, ...arr[i])
  //       recursaoDeArray(arr, depthTotal, auxIndex, depthAtual)
  //     }
  //   }
  // }

  let i = index
  console.log(index == arr.length, '=>', arr)
  if (index != arr.length) {
    for (i; i < arr.length; i++) {
      if (Array.isArray(arr[i]) && depthAtual <= depthTotal) {
        auxIndex = i + arr[i].length
        arr.splice(i, 1, ...arr[i])
        recursaoDeArray(arr, depthTotal, depthAtual, auxIndex)
      }
    }
  }
  console.log('--', arr)
  return arr
}

//console.log(
flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1)
// [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]
//)
