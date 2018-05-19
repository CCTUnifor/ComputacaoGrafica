
var xe;
var xd;
var yc;
var yb;

function clipping(line) {
    xe = rectangle.px;
    xd = rectangle.qx;
    yc = rectangle.qy;
    yb = rectangle.py;

    pularLinha();
    // line = new Line(35, 146, 280, 100); // ESQUERDA
    // line = new Line(200, 5, 35, 146); // DIREITA
    // line = new Line(xe + 5, myCanvas.height, myCanvas.width, 0); // BOTTOM
    // line = new Line(xd - 10, 0, xe + 5, myCanvas.height); // BOTTOM

    // line = new Line(176, 74, 215, 43); // BOTTOM
    // line = new Line(240, 148, 37, 6); // BOTTOM
    console.log(`## CLIPPING ##`)
    console.log(`${line.toString()}`)

    // 1. Gerar os códigos de P e Q                                     - OK
    // 2. Inicializar inclinação da reta (m) => m = (y - y0) / (x - x0) - OK
    // 3. Enquanto codigo de p e o codigo de q estiverem na mesma área  - 
    //             e não estiverem no centro
    // line.x0, line.y0, line.x1, line.

    // bresenham(line, insideColor); // TODO: REMOVER ESSE CODIGO
    while (!line.sameArea() && !line.isCenter()) {
        if (!line.codigoPIsCenter())
            line = doClip(line, "p", line.codigoP);
        else
            line = doClip(line, "q", line.codigoQ);
        // break;
    }

    if (line.isCenter())
        bresenham(line, insideColor);
    else
        bresenham(line, outColor);

    pularLinha();
}

function doClip(line, orientation, codigo) {
    var ponto1;
    var ponto2;

    if (orientation == "p") {
        ponto1 = new Ponto(line.px, line.py);
        ponto2 = new Ponto(line.qx, line.qy);
    }
    else {
        ponto1 = new Ponto(line.qx, line.qy);
        ponto2 = new Ponto(line.px, line.py);
    }

    if (isLeft(codigo))
        return clipLeft(line.mx(), ponto1, ponto2);
    if (isRight(codigo))
        return clipRigth(line.mx(), ponto1, ponto2);
    if (isBottom(codigo))
        return clipBottom(line.my(), ponto1, ponto2);
    if (isTop(codigo))
        return clipTop(line.my(), ponto1, ponto2);

    return;
}

function clipLeft(m, ponto1, ponto2) {
    console.log("Clip Left!")
    var newY = m * (xe - ponto1.x) + ponto1.y;
    var newLine = new Line(ponto1.x, ponto1.y, xe, newY);
    bresenham(newLine, outColor)
    return new Line(xe, newY, ponto2.x, ponto2.y);
}

function clipRigth(m, ponto1, ponto2) {
    console.log("Clip Rigth!")
    var newY = m * (xd - ponto1.x) + ponto1.y;
    var newLine = new Line(ponto1.x, ponto1.y, xd, newY);
    bresenham(newLine, outColor)
    return new Line(xd, newY, ponto2.x, ponto2.y);
}

function clipBottom(m, ponto1, ponto2) {
    console.log("Clip Bottom!")
    var newX = m * (yb - ponto1.y) + ponto1.x;
    var newLine = new Line(ponto1.x, ponto1.y, newX, yb);
    bresenham(newLine, outColor)
    return new Line(ponto2.x, ponto2.y, newX, yb);
}

function clipTop(m, ponto1, ponto2) {
    console.log("Clip Top!")
    var newX = m * (yc - ponto1.y) + ponto1.x;
    var newLine = new Line(ponto1.x, ponto1.y, newX, yc);
    bresenham(newLine, outColor)
    return new Line(ponto2.x, ponto2.y, newX, yc);
}

function isLeft(codigo) { return codigo[3] == "1"; }
function isRight(codigo) { return codigo[2] == "1"; }
function isBottom(codigo) { return codigo[1] == "1"; }
function isTop(codigo) { return codigo[0] == "1"; }

function pularLinha() {
    console.log("\n")
}