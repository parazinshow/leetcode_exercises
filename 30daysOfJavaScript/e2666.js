/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
  let count = 0
  return function (...args) {
    return count++ === 0 ? fn(...args) : undefined
  }
}

let fn = (a, b, c) => a + b + c
let onceFn = once(fn)
console.log(onceFn(1, 2, 3))
console.log(onceFn(2, 3, 6))

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
