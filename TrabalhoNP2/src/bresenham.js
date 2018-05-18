// var myCanvas = document.getElementById("my-canvas");;
// const ctx = myCanvas.getContext('2d');

function bresenham(x, y, x2, y2, cor) {
    var dx = x2 - x ;
    var dy = y2 - y ;
    var dx1 = 0, dy1 = 0, dx2 = 0, dy2 = 0 ;
    if (dx<0) dx1 = -1 ; else if (dx>0) dx1 = 1 ;
    if (dy<0) dy1 = -1 ; else if (dy>0) dy1 = 1 ;
    if (dx<0) dx2 = -1 ; else if (dx>0) dx2 = 1 ;
    var longest = Math.abs(dx) ;
    var shortest = Math.abs(dy) ;
    if (longest<=shortest) {
        longest = Math.abs(dy) ;
        shortest = Math.abs(dx) ;
        if (dy<0) dy2 = -1 ; else if (dy>0) dy2 = 1 ;
        dx2 = 0 ;            
    }
    var numerator = longest / 2 ;
    for (var i=0;i<=longest;i++) {
        drawPixel(x,y, cor) ;
        numerator += shortest ;
        if (numerator>=longest) {
            numerator -= longest ;
            x += dx1 ;
            y += dy1 ;
        } else {
            x += dx2 ;
            y += dy2 ;
        }
    }
}

function drawPixel(x, y, cor) {
    ctx.fillStyle = cor;
    ctx.fillRect(x, y, 1, 1);
}