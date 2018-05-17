var myCanvas = document.getElementById("my-canvas");;
const ctx = myCanvas.getContext('2d');

function bresenham(x0, y0, x1, y1) {
    /*var dx, dy, incrE, incrNE, d, x, y;
    dx = x1 - x0;
    dy = y1 - y0;
    d = dy * 2 - dx;
    incrE = dy * 2;
    incrNE = (dy - dx) * 2;
    x = x0;
    y = y0;
    const m = dx > 0 ? dy / dx : 0;

    drawPixelBresenham(m, x, y);
    while (x < x1) {
        x++;
        if (d <= 0)
            d += incrE;
        else {
            d += incrNE;
            y = y + 1;
        }
        drawPixelBresenham(m, x, y);
    }*/
    var w = x1 - x;
    var h = y1 - y;
    var dx0 = 0, dy0 = 0, dx1 = 0, dy1 = 0;
    if (w < 0) dx0 = -1; else if (w > 0) dx0 = 1;
    if (h < 0) dy0 = -1; else if (h > 0) dy0 = 1;
    if (w < 0) dx1 = -1; else if (w > 0) dx1 = 1;

    var longest = Math.abs(w);
    var shortest = Math.abs(h);

    if (!(longest > shortest)) {
        longest = Math.abs(h);
        shortest = Math.abs(w);
        if (h < 0) dy1 = -1;
        else if (h > 0) dy1 = 1;
        dx1 = 0;
    }
    var numerator = longest >> 1;
    for (var i = 0; i <= longest; i++)
    {
        drawPixel(x, y, color);
        numerator += shortest;
        if (!(numerator < longest)) {
            numerator -= longest;
            x += dx0;
            y += dy0;
        } else {
            x += dx1;
            y += dy1;
        }
    }
}

function drawPixelBresenham(m, x, y) {
    if (ehEsquadraoUm(m))
        drawPixel(x, y);
    else if (ehEsquadraoDois(m))
        drawPixel(y, x);
    else if (ehEsquadraoTres(m))
        drawPixel(-y, x);
    else if (ehEsquadraoQuatro(m))
        drawPixel(-x, y);
    else if (ehEsquadraoCinco(m))
        drawPixel(-x, -y);
    else if (ehEsquadraoSeis(m))
        drawPixel(-y, -x);
    else if (ehEsquadraoSete(m))
        drawPixel(y, -x);
    else if (ehEsquadraoOito(m))
        drawPixel(x, -y);
    else
        drawPixel(x, y);

    function ehEsquadraoUm(m) { return m > 0 && m < 1 }
    function ehEsquadraoDois(m) { return m > 1 }
    function ehEsquadraoTres(m) { return m < -1 }
    function ehEsquadraoQuatro(m) { return m > -1 && m < 0 }
    function ehEsquadraoCinco(m) { return m > 0 && m < 1 }
    function ehEsquadraoSeis(m) { return m > 1 }
    function ehEsquadraoSete(m) { return m < -1 }
    function ehEsquadraoOito(m) { return m > -1 && m < 0 }
}

function drawPixel(x, y) {
    ctx.fillRect(x, y, 1, 1);
}
