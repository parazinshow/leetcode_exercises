/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var insertTruthies = function (truthies, obj, chave, insertObj) {
  if (Array.isArray(obj)) truthies.push(insertObj)
  else truthies[chave] = insertObj
  return truthies
}

var compactObject = function (obj) {
  if (Array.isArray(obj)) var truthies = []
  else var truthies = {}

  for (var chave in obj) {
    if (typeof obj[chave] === 'object' && obj[chave] !== null) {
      truthies = insertTruthies(truthies, obj, chave, compactObject(obj[chave]))
      continue
    }
    if (obj[chave]) {
      truthies = insertTruthies(truthies, obj, chave, obj[chave])
    }
  }
  return truthies
}

// console.log(
//   compactObject([null, 0, 5, [null, 17, null, null], [false, 16, null]])
// )

console.log(compactObject([null, 3, false, [2, null, 1]]))

// console.log(
//   compactObject([null, 0, [5, null], 17, [null, null], false, 16, null])
// )

// console.log(
//   compactObject({
//     o: 11,
//     a: 68,
//     m: 18,
//     v: true,
//     b: false,
//     h: null,
//     r: false,
//     p: 93,
//     l: true,
//     k: '',
//     n: 79,
//     f: 18,
//     u: null,
//     j: null,
//     e: null,
//     z: {
//       d: true,
//       t: null,
//       o: 21,
//       w: null,
//       m: 82,
//       k: 35,
//       l: 26,
//       r: 45,
//       b: false,
//       z: 0,
//       i: null,
//       c: 33,
//       p: 69,
//       j: 27,
//       e: 53,
//       q: 97,
//       h: true,
//       a: true,
//       n: true,
//       f: 73,
//       u: null,
//     },
//     w: 12,
//     y: 0,
//     q: '',
//     t: null,
//     s: true,
//     x: false,
//     c: true,
//     i: false,
//     g: 29,
//   })
// )
