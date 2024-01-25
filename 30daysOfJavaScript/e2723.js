/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  const [res1, res2] = await Promise.all([promise1, promise2])
  return res1 + res2
}

addTwoPromises(
  new Promise((resolve) => setTimeout(() => resolve(2), 20)),
  new Promise((resolve) => setTimeout(() => resolve(5), 60))
).then((res) => console.log(res)) // 4
