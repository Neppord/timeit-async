module.exports = function (func, callback) {
  setImmediate(function () {
    var start = process.hrtime()
    func(function () {
      var diff = process.hrtime(start)
      callback(diff[0] * 1e9 + diff[1])
    })
  })
}
