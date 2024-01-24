class EventEmitter {
  constructor() {
    this.subs = new Map()
  }
  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */

  subscribe(eventName, callback) {
    if (!this.subs.has(eventName)) this.subs.set(eventName, [callback])
    else {
      var callbacks = this.subs.get(eventName)
      callbacks.push(callback)
      this.subs.set(eventName, callbacks)
    }

    return {
      unsubscribe: () => {
        let updateMap = this.subs
          .get(eventName)
          .filter((item) => item !== callback)
        this.subs.set(eventName, updateMap)
      },
    }
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName, args = []) {
    let events = []
    let arrayMap = this.subs.get(eventName)

    if (arrayMap) {
      for (let element of arrayMap) {
        events.push(element(...args))
      }
    }
    return events
  }
}

const emitter = new EventEmitter()
const sub1 = emitter.subscribe('firstEvent', (x) => x + 1)
const sub2 = emitter.subscribe('firstEvent', (x) => x + 2)
sub1.unsubscribe() // undefined
console.log(emitter.emit('firstEvent', [5])) // [7]
