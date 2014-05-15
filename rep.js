module.exports = function (watch, func, callback) {
  setImmediate(function(){
    watch.start();
    func(function () {
      callback(watch.now());
    });
  });
}
