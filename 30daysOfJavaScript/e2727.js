/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  return Object.keys(obj).length ? false : true
}

console.log(isEmpty({ x: 5, y: 42 }))
console.log(isEmpty({}))
console.log(isEmpty([null, false, 0]))
