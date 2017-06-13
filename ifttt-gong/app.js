// app code goes here
// matrix.init()....
//
// have fun

matrix.on('ring-bell', function() {
  matrix.servo(1, 45);
  setTimeout(function() {
    matrix.servo(0, 0);
  }, 500);
});