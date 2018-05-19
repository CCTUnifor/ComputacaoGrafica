var myCanvas = document.getElementById("my-canvas");;
const ctx = myCanvas.getContext('2d');

var xMinInput = $("#xMinInput")[0];
var yMinInput = $("#yMinInput")[0];
var xMaxInput = $("#xMaxInput")[0];
var yMaxInput = $("#yMaxInput")[0];
var nLinesInput = $("#nLinesInput")[0];
var ignoreInput = $("#ignoreInput");
var time = $("#time")[0];

var xDefault = 90;
var yDefault = 25;

var rectangle = new Line(0, 0, 0, 0);
var lines = [];

const rectColor = "#007d1d";
const rectDashedColor = "#3800a5";
const insideColor = "#0000008a";
const outColor = "#ff0000";

function run() {
    clear();
    initializeInputs();
    drawRectangle(rectangle.px, rectangle.py, rectangle.qx, rectangle.qy);
}

function randomLines() {
    var t0 = performance.now();
    for (let i = 0; i < parseInt(nLinesInput.value); i++) {
        var newLine = randomReta(myCanvas.width, myCanvas.height);
        // console.log(newLine.toString());
        lines.push(newLine);

        clipping(newLine);
    }
    var t1 = performance.now();
    console.log("Time: " + (t1 - t0) + "ms");
    time.value = Math.round((t1 - t0) * 100) / 100 + "ms";
}

function initializeInputs() {
    rectangle = new Line(
        parseInt(xMinInput.value) + xDefault,
        parseInt(yMinInput.value) + yDefault,
        parseInt(xMaxInput.value) + xDefault,
        parseInt(yMaxInput.value) + yDefault
    );
}

function drawRectangle(x0, y0, x1, y1) {
    console.log("drawRectangle: [", x0, ", ", y0, "] [", x1, ", ", y1, "]");
    var ignoreCalcY = true;
    bresenham(new Line(x0, y0, x0, y1, ignoreCalcY), rectColor);
    bresenham(new Line(x0, y0, x1, y0, ignoreCalcY), rectColor);
    bresenham(new Line(x0, y1, x1, y1, ignoreCalcY), rectColor);
    bresenham(new Line(x1, y0, x1, y1, ignoreCalcY), rectColor);

    bresenhamDashed(new Line(x0, 0, x0, y0, ignoreCalcY), rectDashedColor);
    bresenhamDashed(new Line(x0, y1, x0, myCanvas.height, ignoreCalcY), rectDashedColor);

    bresenhamDashed(new Line(x1, 0, x1, y0, ignoreCalcY), rectDashedColor);
    bresenhamDashed(new Line(x1, y1, x1, myCanvas.height, ignoreCalcY), rectDashedColor);

    bresenhamDashed(new Line(0, y0, x0, y0, ignoreCalcY), rectDashedColor);
    bresenhamDashed(new Line(x1, y0, myCanvas.width, y0, ignoreCalcY), rectDashedColor);

    bresenhamDashed(new Line(0, y0, x0, y0, ignoreCalcY), rectDashedColor);
    bresenhamDashed(new Line(x1, y1, myCanvas.width, y1, ignoreCalcY), rectDashedColor);

    bresenhamDashed(new Line(0, y1, x0, y1, ignoreCalcY), rectDashedColor);
    bresenhamDashed(new Line(x1, y1, myCanvas.width, y1, ignoreCalcY), rectDashedColor);
}

function clear() {
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
}