/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
  for (var chave in obj) {
    //verifica se é array/objeto
    if (typeof obj[chave] === 'object' && obj[chave] !== null) {
      compactObject(obj[chave])
    }
    if (index + 1 >= Object.keys(obj).length) end = true
    if (Object.values(obj)[index]) {
      return end ? obj : compactObject(obj, index + 1)
    }
    if (Array.isArray(obj)) {
      obj.splice(index, 1)
      return end ? obj : compactObject(obj, index)
    }
    if (!Array.isArray(obj)) {
      delete obj[Object.keys(obj)[index]]
      return end ? obj : compactObject(obj, index)
    }
  }
}

// var compactObject = function (obj, index = 0) {
//   if (
//     Object.values(obj)[index] !== null &&
//     typeof Object.values(obj)[index] === 'object'
//   ) {
//     //verifica se é array/objeto
//     compactObject(Object.values(obj)[index])
//   }
//   var end = false
//   if (index + 1 >= Object.keys(obj).length) end = true
//   if (Object.values(obj)[index]) {
//     return end ? obj : compactObject(obj, index + 1)
//   }
//   if (Array.isArray(obj)) {
//     obj.splice(index, 1)
//     return end ? obj : compactObject(obj, index)
//   }
//   if (!Array.isArray(obj)) {
//     delete obj[Object.keys(obj)[index]]
//     return end ? obj : compactObject(obj, index)
//   }
// }

// console.log(
//   compactObject([null, 0, 5, [null, 17, null, null], [false, 16, null]])
// )
// console.log('/######################')
console.log(
  compactObject({ a: null, b: [false, 1], c: { oi: 3, tchau: null } })
)
