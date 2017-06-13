// app code goes here
// matrix.init()....
//
// have fun
matrix.on('coming-home', function() {
  matrix.led('blue').render();
  setTimeout(function() {
    matrix.led('black').render();
  }, 60000);
});