function random() {
    return Math.random() * 100;
}

function randomReta(width, heigth) {
    return new Line(
        Math.random() * (width - 0) + 0,
        Math.random() * (width - 0) + 0,
        Math.random() * (heigth - 0) + 0,
        Math.random() * (heigth - 0) + 0
    )
}