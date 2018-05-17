$(document).ready(function () {
    var xDefault = 10;
    var yDefault = 10;

    var myCanvas;
    var xMin = xDefault + 0;
    var yMin = yDefault + 0;
    var xMax = xDefault + 10;
    var yMax = yDefault + 10;

    myCanvas = document.getElementById("my-canvas");
    const ctx = myCanvas.getContext('2d');

    console.log(xMin, yMin);
    console.log(xMax, yMax);


    drawRectangle(xMin, yMin, xMax, yMax);

    function drawRectangle(x0, y0, x1, y1) {
        bresenham(x0, y0, x0, y1);
        bresenham(x0, y0, x1, y0);
        bresenham(x0, y0, x1, y0);
        
        // bresenham(x0, y0, x1, y1);
    }
});

