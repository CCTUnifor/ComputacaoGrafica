var radius = 10;
var myCanvas;
var x0, x1, y0, y1, algTypeRadio, algType;

function rodarAlg() {
    var algTypeRadio = document.getElementsByName("alg");
    for (var i = 0; i < algTypeRadio.length; i++) {
        if (algTypeRadio[i].checked) {
            algType = +algTypeRadio[i].value;
        }
    }

    loadValues();
    switch(algType) {
        case 0:
            dda();
            break;
        case 1:
            bresenham();
            break;
        case 2:
            desenharCirculo();
            break;
    }
}

function loadValues() {
    x0 = +document.getElementById("x0").value;
    x1 = +document.getElementById("x1").value;
    y0 = +document.getElementById("y0").value;
    y1 = +document.getElementById("y1").value;

    radius = document.getElementById("radius");
    myCanvas = document.getElementById("my-canvas");
}

function dda() {
    var m = (y1 - y0) / (x1 - x0); 
    var y = 0;
    for (var x = x0; x <= x1; x++) {
        y = y0 + m * (x - x0);
        drawPixel(x, Math.round(y));
    }
}

function bresenham() {
    var dx, dy, incrE, incrNE, d, x, y;
    dx = x1 - x0;
    dy = y1 - y0;
    d = dy * 2 - dx;
    incrE = dy * 2;
    incrNE = (dy - dx) * 2;
    x = x0;
    y = y0;
    drawPixel(x, y);
    while (x < x1) {
        x++;
        if (d <= 0)
            d += incrE;
        else {
            d += incrNE;
            y = y + 1;
        }
        drawPixel(x, y);
    }
}

function desenharCirculo() {
    var x = 10;
    var y = +radius.value;
    var d = 1 - y;
    drawCirclePixel(x, y);
    while (y >= x) {
        if (d < 0) {
            d += (2 * x + 3);
        } else {
            d += 2 * (x - y) + 5;
            y--;
        }
        x++;
        drawCirclePixel(x, y);
    }
}

function drawCirclePixel(x, y) {
    drawPixel(x, y);
    drawPixel(y, x);
    drawPixel(y, -x);
    drawPixel(x, -y);
    drawPixel(-x, -y);
    drawPixel(-y, -x);
    drawPixel(-y, x);
    drawPixel(-x, y);
}

function drawPixel(x, y) {
    const ctx = myCanvas.getContext('2d');
    ctx.fillRect(x, y, 1, 1);
}
