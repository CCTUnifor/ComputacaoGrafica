var myCanvas = document.getElementById("my-canvas");;
const ctx = myCanvas.getContext('2d');

var xMinInput = $("#xMinInput")[0];
var yMinInput = $("#yMinInput")[0];
var xMaxInput = $("#xMaxInput")[0];
var yMaxInput = $("#yMaxInput")[0];
var nLinesInput = $("#nLinesInput")[0];

var xDefault = 65;
var yDefault = 15;

var xMin = 0;
var yMin = 0;
var xMax = 0;
var yMax = 0;
var lines = [];

const rectColor = "#007d1d";
const rectDashedColor = "#3800a5";
const insideColor = "#000000";
const outColor = "#ff0000";

function run() {
    clear();
    initializeInputs();
    drawRectangle(xMin, yMin, xMax, yMax);
}

function randomLines() {
    for (let i = 0; i < parseInt(nLinesInput.value); i++) {
        var newLine = randomReta(myCanvas.width, myCanvas.height);
        console.log(newLine);
        lines.push(newLine);

        clipping(newLine);
    }
}

function initializeInputs() {
    xMin = parseInt(xMinInput.value) + xDefault;
    yMin = parseInt(yMinInput.value) + yDefault;
    xMax = parseInt(xMaxInput.value) + xDefault;
    yMax = parseInt(yMaxInput.value) + yDefault;
}

function drawRectangle(x0, y0, x1, y1) {
    console.log("drawRectangle: [", x0, ", ", y0, "] [", x1, ", ", y1, "]");
    bresenham(x0, y0, x0, y1, rectColor);
    bresenham(x0, y0, x1, y0, rectColor);
    bresenham(x0, y1, x1, y1, rectColor);
    bresenham(x1, y0, x1, y1, rectColor);

    bresenhamDashed(x0, 0, x0, y0, rectDashedColor);
    bresenhamDashed(x0, y1, x0, myCanvas.height, rectDashedColor);

    bresenhamDashed(x1, 0, x1, y0, rectDashedColor);
    bresenhamDashed(x1, y1, x1, myCanvas.height, rectDashedColor);
    
    bresenhamDashed(0, y0, x0, y0, rectDashedColor);
    bresenhamDashed(x1, y0, myCanvas.width, y0, rectDashedColor);

    bresenhamDashed(0, y0, x0, y0, rectDashedColor);
    bresenhamDashed(x1, y1, myCanvas.width, y1, rectDashedColor);

    bresenhamDashed(0, y1, x0, y1, rectDashedColor);
    bresenhamDashed(x1, y1, myCanvas.width, y1, rectDashedColor);
}

function clear() {
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
}