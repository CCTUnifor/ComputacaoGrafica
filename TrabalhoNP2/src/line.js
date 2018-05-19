function Line(_px, _py, _qx, _qy) {
    px = _px;
    py = _py;
    qx = _qx;
    qy = _qy;

    var codigoP = "";
    var codigoQ = "";

    calcCodigos();

    function calcCodigos() {
        codigoP = codigo(px, py);
        codigoQ = codigo(qx, qy);
    }

    function codigo(x, y) {
        var cod = "0000";
        if (!rectangle) return cod;
        if (y > rectangle.qy)
            cod = cod.replaceAt(0, "1");
        else if (y < rectangle.py)
            cod = cod.replaceAt(1, "1");
        if (x > rectangle.qx)
            cod = cod.replaceAt(2, "1");
        else if (x < rectangle.px)
            cod = cod.replaceAt(3, "1");
        return cod;
    }

    function sameArea() {
        for (let i = 0; i < codigoP.length; i++) {
            const elementP = codigoP[i];
            const elementQ = codigoQ[i];
            if (elementP == 1 && elementQ == 1)
                return true;
        }
    }

    function isCenter() {
        return codigoPIsCenter() && codigoQIsCenter();
    }

    function codigoPIsCenter() {
        return codigoP == "0000";
    }

    function codigoQIsCenter() {
        return codigoQ == "0000";
    }

    function mx() {
        return (qy - py) /(qx - px);
    }

    function my() {
        return (qx - px) / (qy - py);
    }

    function toString() {
        return `p:[${px}, ${py}] Cp:[${codigoP}]\nq:[${qx}, ${qy}]Cq:[${codigoQ}]`;
    }

    return {
        px,
        py,
        qx,
        qy,
        pyInvertido,
        qyInvertido,
        calcCodigos,
        codigoP,
        codigoQ,
        mx,
        my,
        sameArea,
        codigoPIsCenter,
        codigoQIsCenter,
        isCenter,
        // mx,
        // my,
        toString,
    };
}

String.prototype.replaceAt = function (index, value) {
    return this.substr(0, index) + value + this.substr(index + value.length);
}