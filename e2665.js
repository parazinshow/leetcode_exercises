// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  var c = init
  return {
    increment: function () {
      return ++c
    },
    decrement: function () {
      return --c
    },
    reset: function () {
      c = init
      return init
    },
  }
}

const counter = createCounter(5)
console.log(counter.increment()) // 6
console.log(counter.reset()) // 5
console.log(counter.decrement()) // 4

// const counter = createCounter(0)
// console.log(counter.increment()) // 1
// console.log(counter.increment()) // 2
// console.log(counter.decrement()) // 1
// console.log(counter.reset()) // 0
// console.log(counter.reset()) // 0
