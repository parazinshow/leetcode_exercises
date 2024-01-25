/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
  return async function (...args) {
    const promise1 = fn(...args)
    const promise2 = new Promise((resolve, reject) => {
      setTimeout(() => reject('Time Limit Exceeded'), t)
    })

    return await Promise.race([promise1, promise2])
  }
}
var fn = async (n) => {
  await new Promise((res) => setTimeout(res, 100))
  return n * n
}
var inputs = [5]
var t = 150
const limited = timeLimit(fn, t)
limited(...inputs)
  .then((res) => console.log(res))
  .catch((rej) => console.log(rej))

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
