// app code goes here
// matrix.init()....
//
// have fun
var total = 0;
matrix.on('add-follow', function() {
  total++;

  var 1 ang = Math.round(360 / 35);
  matrix.render({
    arc: total * 1 ang,
    color: 'blue'
  }).render();
});