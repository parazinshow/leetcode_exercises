var TimeLimitedCache = function () {
  this.keydCaches = new Map()
}

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  if (this.keydCaches.has(key)) {
    const existingCache = this.keydCaches.get(key)
    if (existingCache.duration > Date.now()) {
      this.keydCaches.set(key, {
        value: value,
        duration: Date.now() + duration,
      })
      return true
    }
    return false
  }
  this.keydCaches.set(key, { value: value, duration: Date.now() + duration })
  return false
}

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  var cache = this.keydCaches.get(key)
  if (cache && cache.duration > Date.now()) return cache.value
  return -1
}

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  var count = 0
  this.keydCaches.forEach((e) => {
    if (e.duration > Date.now()) {
      count++
    }
  })
  return count
}

const timeLimitedCache = new TimeLimitedCache()

console.log(timeLimitedCache.set(1, 42, 50))

setTimeout(() => {
  console.log(timeLimitedCache.set(1, 50, 100))
}, 40)

setTimeout(() => {
  console.log(timeLimitedCache.get(1))
}, 50)

setTimeout(() => {
  console.log(timeLimitedCache.get(1))
}, 120)

setTimeout(() => {
  console.log(timeLimitedCache.get(1))
}, 200)

setTimeout(() => {
  console.log(timeLimitedCache.count())
}, 250)
