function random() {
    return Math.random() * 100;
}

function randomReta(width, heigth) {
    return {
        x0: Math.random() * (width - 0) + 0,
        x1: Math.random() * (width - 0) + 0,
        y0: Math.random() * (heigth - 0) + 0,
        y1: Math.random() * (heigth - 0) + 0
    };
}