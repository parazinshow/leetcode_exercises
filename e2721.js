/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
  let results = []
  let completedCount = 0

  return new Promise((resolve, reject) => {
    functions.forEach((fn, index) => {
      fn()
        .then((res) => {
          results[index] = res
          completedCount++

          if (completedCount === functions.length) {
            resolve(results)
          }
        })
        .catch((reason) => {
          reject(reason)
        })
    })
  })
}

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */

const promise = promiseAll([
  () => new Promise((resolve) => setTimeout(() => resolve(4), 50)),
  () => new Promise((resolve) => setTimeout(() => resolve(10), 150)),
  () => new Promise((resolve) => setTimeout(() => resolve(16), 100)),
])
// const promise = promiseAll([
//   () => new Promise((resolve) => setTimeout(() => resolve(1), 200)),
//   () =>
//     new Promise((resolve, reject) => setTimeout(() => reject('Error'), 100)),
// ])
