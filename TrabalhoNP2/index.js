$(document).ready(function () {
    var xMinInput = $("#xMinInput");
    var yMinInput = $("#yMinInput");
    var xMaxInput = $("#xMaxInput");
    var yMaxInput = $("#yMaxInput");

    var xDefault = 100;
    var yDefault = 25;

    var xMin = 0;
    var yMin = 0;
    var xMax = 0;
    var yMax = 0;
    var myCanvas = document.getElementById("my-canvas");;
    const ctx = myCanvas.getContext('2d');
    
    initializeChanges();

    function generateNewRow() {

    }

    drawRectangle(xMin, yMin, xMax, yMax);


    function initializeChanges() {
        xMinInput.change(function () { xMin = xMinInput.value + xDefault; drawRectangle() })
        yMinInput.change(function () { yMin = yMinInput.value + yDefault; })
        xMaxInput.change(function () { xMax = xMaxInput.value + xDefault; })
        yMaxInput.change(function () { yMax = yMaxInput.value + yDefault; })
    }

    function drawRectangle(x0, y0, x1, y1) {
        bresenham(x0, y0, x0, y1);
        bresenham(x0, y0, x1, y0);
        bresenham(x0, y1, x1, y1);
        bresenham(x1, y0, x1, y1);
    }
});

