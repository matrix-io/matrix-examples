// app code goes here
// matrix.init()....
//
// have fun
var total = 0;
matrix.on('add-follow', function() {
  total++;

  var ang = Math.round(360 / 35);
  matrix.led({
    arc: total * ang,
    color: 'blue',
    start: 0
  }).render();

  total = ( total >= 35) ? 0 : total;
});