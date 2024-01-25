/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  var groupedArr = {}
  this.forEach((e) => {
    if (groupedArr.hasOwnProperty(fn(e))) groupedArr[fn(e)].push(e)
    else groupedArr[fn(e)] = [e]
  })
  return groupedArr
}

console.log(
  [{ id: '1' }, { id: '1' }, { id: '2' }].groupBy(function (item) {
    return item.id
  })
) // {"1":[1],"2":[2],"3":[3]}
