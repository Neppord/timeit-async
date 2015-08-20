var rep = require('./rep')

module.exports = function set (func, reps, callback) {
  if (reps <= 1) {
    rep(func, function (time) {
      callback(time)
    })
  } else {
    rep(func, function (time) {
      set(func, reps - 1, function (to_add) {
        callback([time[0] + to_add[0], time[1] + to_add[1]])
      })
    })
  }
}
