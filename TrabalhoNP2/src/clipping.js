
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
    console.log(`## CLIPPING ##`)
    console.log(`${line.toString()}`)

    while (!line.sameArea() && !line.isCenter()) {
        if (!line.codigoPIsCenter())
            line = doClip(line, "p", line.codigoP);
        else
            line = doClip(line, "q", line.codigoQ);
    }

    if (line.isCenter())
        bresenham(line, insideColor);
    else
        print(line, outColor);

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
    // console.log("Clip Left!")
    var newY = m * (xe - ponto1.x) + ponto1.y;
    var newLine = new Line(ponto1.x, ponto1.y, xe, newY);
    print(newLine, outColor);
    return new Line(xe, newY, ponto2.x, ponto2.y);
}

function clipRigth(m, ponto1, ponto2) {
    // console.log("Clip Rigth!")
    var newY = m * (xd - ponto1.x) + ponto1.y;
    var newLine = new Line(ponto1.x, ponto1.y, xd, newY);
    print(newLine, outColor);
    return new Line(xd, newY, ponto2.x, ponto2.y);
}

function clipBottom(m, ponto1, ponto2) {
    // console.log("Clip Bottom!")
    var newX = m * (yb - ponto1.y) + ponto1.x;
    var newLine = new Line(ponto1.x, ponto1.y, newX, yb);
    print(newLine, outColor);
    return new Line(ponto2.x, ponto2.y, newX, yb);
}

function clipTop(m, ponto1, ponto2) {
    // console.log("Clip Top!")
    var newX = m * (yc - ponto1.y) + ponto1.x;
    var newLine = new Line(ponto1.x, ponto1.y, newX, yc);
    print(newLine, outColor);
    return new Line(ponto2.x, ponto2.y, newX, yc);
}

function isLeft(codigo) { return codigo[3] == "1"; }
function isRight(codigo) { return codigo[2] == "1"; }
function isBottom(codigo) { return codigo[1] == "1"; }
function isTop(codigo) { return codigo[0] == "1"; }
function print(newLine, __color) {
    if (!ignoreInput.is(":checked"))
        bresenham(newLine, __color);
}

function pularLinha() {
    // console.log("\n")
}