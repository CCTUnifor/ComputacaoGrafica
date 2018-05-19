function bresenham(line, cor) {
    var aux = new Line(line.px, line.py, line.qx, line.qy);
    doBresenham(aux, cor);
}

function bresenhamDashed(line, cor) {
    var aux = new Line(line.px, line.py, line.qx, line.qy);
    doBresenham(aux, cor, true)
}

function doBresenham(line, cor, dashed) {
    var dx = line.qx - line.px;
    var dy = line.qy - line.py;
    var dx1 = 0, dy1 = 0, dx2 = 0, dy2 = 0;
    if (dx < 0) dx1 = -1; else if (dx > 0) dx1 = 1;
    if (dy < 0) dy1 = -1; else if (dy > 0) dy1 = 1;
    if (dx < 0) dx2 = -1; else if (dx > 0) dx2 = 1;
    var longest = Math.abs(dx);
    var shortest = Math.abs(dy);
    if (longest <= shortest) {
        longest = Math.abs(dy);
        shortest = Math.abs(dx);
        if (dy < 0) dy2 = -1; else if (dy > 0) dy2 = 1;
        dx2 = 0;
    }
    var numerator = longest / 2;
    for (var i = 0; i <= longest; i++) {
        if (!(!!dashed && i % 2 == 0))
            drawPixel(line.px, pyInvertido(line.py), cor);
        numerator += shortest;
        if (numerator >= longest) {
            numerator -= longest;
            line.px += dx1;
            line.py += dy1;
        } else {
            line.px += dx2;
            line.py += dy2;
        }
    }
}


function drawPixel(x, y, cor) {
    ctx.fillStyle = cor;
    ctx.fillRect(x, y, 1, 1);
}

function pyInvertido(py) { return (myCanvas.height - py) - 1; }
function qyInvertido() { return (myCanvas.height - qy) - 1; }