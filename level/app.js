/*
This app uses the MATRIX Creator's gyroscope
and LEDs to show if the Creator is level by converting
gyroscope readings into vectors
*/

var options =
{
    refresh: 50,
    timeout: 15000
}
//uses and xy-plane and arctangent to determine which direction the
//Creator is tilting towards and how far it is tilting
    var quad;
    var amp;
    var angle;

matrix.init('gyroscope', options).then(function(data)
{
    var y = data.roll;
    var x = data.pitch;

    //determining which quadrant tilt is in and manipulating values
    //accordingly to work with arctangent correctly
    if(y >= 0 && x >= 0)
        quad = 1;
    else if(y >= 0 && x < 0)
    {
        quad = 2;
        x *= -1;
    }
    else if(x < 0)
    {
        quad = 3;
        y *= -1;
        x *= -1;
    }
    else
    {
        quad = 4;
        y *= -1;
    }

    //finding angle (from 0 to 90) of tilt
    angle = Math.atan(y/x) * 180 / Math.PI;

    //uses quadrant found above to light up the correct LEDs
    //due to the Creator's angle starting from 0 on the left
    //and rotating clockwise
    switch(quad)
    {
        case 1:
        {
            angle = 180 - angle;
            break;
        }
        //quad 2 is already accounted for
        case 3:
        {
            angle = 360 - angle;
            break;
        }
        case 4:
        {
            angle += 180;
            break;
        }
    }

    //amp is the magnitude of the tilt
    amp = Math.sqrt(Math.pow(y, 2) + Math.pow(x, 2));


    var shape =
    {
        arc: amp * 8,
        color: 'rgb(200, ' + (10 + (190 - 9.5 * amp)) + ', 0)',
        start: angle - amp * 4
    }
    
    //tolerance is here
    if(amp < 3)
    {
        //all lights green (is level)
        shape.color = 'rgb(0, 25, 0)'
        shape.arc = 360
    }

    matrix.led(shape).render();
});