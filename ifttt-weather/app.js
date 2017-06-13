// app code goes here
// matrix.init()....
//
// have fun

var animInt;

matrix.on('start-clear', function() {
  clearInterval(animInt);
  matrix.led('lightblue').render();
  setTimeout(function() {
    matrix.led('black').render();
  }, 2500);
});
matrix.on('start-cloudy', function() {
  var r = 0;
  var r2 = 90;
  clearInterval(animInt);
  animInt = setInterval(function() {
    matrix.led([{
      arc: 35,
      start: 0 + r++,
      color: 'yellow'
    }, {
      arc: 15,
      start: 0 + r2--,
      color: 'yellow'
    }]).render();
  }, 1000);
})
matrix.on('start-snow', function() {
  var a = 0;
  clearInterval(animInt);
  animInt = setInterval(function() {
    a = (a > 180) ? 0 : a;
    matrix.led([{
      angle: a++,
      color: 'white'
    }]).render();
  }, 100)
})
matrix.on('start-rain', function() {
  var a = 0;
  clearInterval(animInt);
  animInt = setInterval(function() {
    a = (a > 180) ? 0 : a;
    matrix.led([{
      angle: a++,
      color: 'blue'
    }, {
      angle: a + 10,
      color: 'blue'
    }]).render();
  }, 100)
})