// app code goes here
// matrix.init()....
//
// have fun
matrix.sensor('humidity').then(function(t) {
  if (t.value > 80) {
    matrix.emit('high-humidity');
  }
})