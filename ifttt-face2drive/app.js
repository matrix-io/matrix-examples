// app code goes here
// matrix.init()....
//
// have fun
var faceFound = false;
matrix.service('face').start().then(function(face) {
  faceFound = true;
});

setInterval(function() {
  if (faceFound) {
    matrix.emit('add-face');
  }
  faceFound = false;
}, 15000)