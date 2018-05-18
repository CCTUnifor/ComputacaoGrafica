function random() {
    return Math.random() * 100;
}

function randomReta(maxWidth, maxHeigth) {
    return new Line(
        Math.floor(Math.random() * (maxWidth - 0 + 1)) + 0,
        Math.floor(Math.random() * (maxHeigth - 0 + 1)) + 0,
        Math.floor(Math.random() * (maxWidth - 0 + 1)) + 0,
        Math.floor(Math.random() * (maxHeigth - 0 + 1)) + 0
    )
}