timeit = require("./index")

// running the function 100 times
timeit(function (done){setTimeout(done, 1)}, function (result) {
  console.log(result);
  // running the function 10 times
  timeit(function (done){setTimeout(done, 1)}, 10, function (result2) {
    console.log(result2);
    // running the function 100 times 10 times
    timeit(function (done){setTimeout(done, 1)}, 10, 100, console.log)
  });
});
