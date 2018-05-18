function Line(_px, _py, _qx, _qy, ignore) {
    px = _px;
    py = !!ignore ? (myCanvas.height - _py) - 1 : _py;
    qx = _qx;
    qy = !!ignore ? (myCanvas.height - _qy) - 1 : _qy;
    _codigoP = codigo(px, py);
    _codigoQ = codigo(qx, qy);

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

    function toString() {
        return `p:[${px}, ${py}] Cp:[${_codigoP}]\nq:[${qx}, ${qy}]Cq:[${_codigoQ}]`;
    }

    return {
        px,
        py,
        qx,
        qy,
        codigoP: _codigoP,
        codigoQ: _codigoQ,
        toString
    };
}

String.prototype.replaceAt = function (index, value) {
    return this.substr(0, index) + value + this.substr(index + value.length);
}