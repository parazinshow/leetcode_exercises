/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    let init = x
    for (let i = functions.length - 1; i >= 0; i--) {
      init = functions[i](init)
    }
    return init
  }
}
var fn = null
fn = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x])
console.log(fn(4))

fn = compose([(x) => 10 * x, (x) => 10 * x, (x) => 10 * x])
console.log(fn(1))

fn = compose([])
console.log(fn(42))
