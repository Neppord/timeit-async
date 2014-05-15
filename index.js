var set = require("./set");

module.exports = function timeit(func, sets, reps, callback) {
  if (arguments.length === 2) {
    callback = sets;
    sets = 1;
    reps = 100;
  } else if (arguments.length === 3) {
    callback = reps;
    reps = sets;
    sets = 1
  }
  if (sets <= 1) {
    set(func, reps, function (time){
      callback([time]);
    });
  } else {
    set(func, reps, function (time) {
      timeit(func, sets - 1, reps, function (result) {
        callback([time].concat(result));
      });
    });
  }
}


