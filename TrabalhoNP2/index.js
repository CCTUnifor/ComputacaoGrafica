var myCanvas = document.getElementById("my-canvas");;
const ctx = myCanvas.getContext('2d');

var xMinInput = $("#xMinInput")[0];
var yMinInput = $("#yMinInput")[0];
var xMaxInput = $("#xMaxInput")[0];
var yMaxInput = $("#yMaxInput")[0];

var xDefault = 65;
var yDefault = 15;

var xMin = 0;
var yMin = 0;
var xMax = 0;
var yMax = 0;
var lines = [];

function run() {
    initializeInputs();
    drawRectangle(xMin, yMin, xMax, yMax);
}

function randomLine() {
    var newLine = randomReta();
    lines.push(newLine);
    console.log(newLine);
}




function initializeInputs() {
    xMin = parseInt(xMinInput.value) + xDefault;
    yMin = parseInt(yMinInput.value) + yDefault;
    xMax = parseInt(xMaxInput.value) + xDefault;
    yMax = parseInt(yMaxInput.value) + yDefault;
}

function drawRectangle(x0, y0, x1, y1) {
    console.log("drawRectangle: [", x0, ", ", y0, "] [", x1, ", ", y1, "]");
    bresenham(x0, y0, x0, y1);
    bresenham(x0, y0, x1, y0);
    bresenham(x0, y1, x1, y1);
    bresenham(x1, y0, x1, y1);
}