module.exports = function (func, callback) {
  setImmediate(function () {
    var start = process.hrtime()
    func(function () {
      callback(process.hrtime(start))
    })
  })
}
