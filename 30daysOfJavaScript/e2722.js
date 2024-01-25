// /**
//  * @param {Array} arr1
//  * @param {Array} arr2
//  * @return {Array}
//  */
// var join = function (arr1, arr2) {
//   var joinedArray = arr1
//   arr2.forEach((a2) => {
//     var objExistente = arr1.find((a1) => a1['id'] === a2.id)

//     if (!objExistente) joinedArray.push(a2)
//     else {
//       var index = joinedArray.indexOf(objExistente)
//       for (let prop in joinedArray[index]) {
//         if (a2.hasOwnProperty(prop)) joinedArray[index][prop] = a2[prop]
//       }
//       for (let prop in a2) {
//         if (!joinedArray[index].hasOwnProperty(prop))
//           joinedArray[index][prop] = a2[prop]
//       }
//     }
//   })

//   return joinedArray.sort((a, b) => a.id - b.id)
// }

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  const idMap = new Map()

  // Inicializa o mapa com objetos de arr1 usando o "id"
  arr1.forEach((obj) => {
    idMap.set(obj.id, obj)
  })

  // Atualiza ou adiciona objetos de arr2 usando o "id"
  arr2.forEach((obj) => {
    const existingObj = idMap.get(obj.id)

    if (!existingObj) {
      // Se não existe, adiciona ao mapa
      idMap.set(obj.id, obj)
    } else {
      // Se existe, mescla as propriedades
      for (const prop in obj) {
        existingObj[prop] = obj[prop]
      }
    }
  })

  // Converte os valores do mapa de volta para um array
  const joinedArray = Array.from(idMap.values())

  // Ordena o array com base no "id"
  joinedArray.sort((a, b) => a.id - b.id)

  return joinedArray
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

// console.log(
//   join(
//     [
//       { id: 1, x: 2, y: 3 },
//       { id: 2, x: 3, y: 6 },
//     ],
//     [
//       { id: 2, x: 10, y: 20 },
//       { id: 3, x: 0, y: 0 },
//     ]
//   )
// )

// console.log(
//   join(
//     [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }],
//     [{ id: 1, b: { c: 84 }, v: [1, 3] }]
//   )
// )

console.log(
  join(
    [
      { id: 1, x: 36, d: 26, f: 35 },
      { id: 3, c: 20, z: 75 },
    ],
    [{ id: 2, o: 48, z: 84, y: 61 }]
  )
)

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
