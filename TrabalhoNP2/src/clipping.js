function clipping(line) {
    // 1. Gerar os códigos de P e Q
    // 2. Inicializar inclinação da reta (m)
    // 3. Enquanto codigo de p e o codigo de q estiverem na mesma área
    //             e não estiverem na mesma área
    // line.x0, line.y0, line.x1, line.y1
    bresenham(line, insideColor);
}