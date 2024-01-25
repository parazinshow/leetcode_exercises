/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  var joinedMap = new Map(arr1)

  arr1.forEach((obj) => {
    joinedMap.set(obj.id, obj)
  })

  var joinedArray = arr1
  arr2.forEach((a2) => {
    var objExistente = arr1.find((a1) => a1['id'] === a2.id)
    if (!objExistente) joinedMap.set(a2.id, a2)
    else {
      // var index = joinedArray.indexOf(objExistente)
      // for (let prop in joinedArray[index]) {
      //   if (a2.hasOwnProperty(prop)) joinedArray[index][prop] = a2[prop]
      // }
      // for (let prop in a2) {
      //   if (!joinedArray[index].hasOwnProperty(prop))
      //     joinedArray[index][prop] = a2[prop]
      // }
    }
  })

  return joinedArray.sort((a, b) => a.id - b.id)
}

// console.log(
//   join(
//     [
//       { id: 1, x: 1 },
//       { id: 2, x: 9 },
//     ],
//     [{ id: 3, x: 5 }]
//   )
// )

console.log(
  join(
    [
      { id: 1, x: 2, y: 3 },
      { id: 2, x: 3, y: 6 },
    ],
    [
      { id: 2, x: 10, y: 20 },
      { id: 3, x: 0, y: 0 },
    ]
  )
)

// console.log(
//   join(
//     [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }],
//     [{ id: 1, b: { c: 84 }, v: [1, 3] }]
//   )
// )

// console.log(
//   join(
//     [
//       { id: 1, x: 36, d: 26, f: 35 },
//       { id: 3, c: 20, z: 75 },
//     ],
//     [{ id: 2, o: 48, z: 84, y: 61 }]
//   )
// )

// console.log(
//   join(
//     [
//       { id: 1, x: 1 },
//       { id: 2, x: 9 },
//     ],
//     [{ id: 3, x: 5 }],
//     [
//       { id: 1, x: 2, y: 3 },
//       { id: 2, x: 3, y: 6 },
//     ],
//     [
//       { id: 2, x: 10, y: 20 },
//       { id: 3, x: 0, y: 0 },
//     ],
//     [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }],
//     [{ id: 1, b: { c: 84 }, v: [1, 3] }],
//     [{ id: 1, x: 6 }],
//     [
//       { id: 1, x: 15, y: 7 },
//       { id: 2, x: 9, y: 18 },
//     ]
//   )
// )
