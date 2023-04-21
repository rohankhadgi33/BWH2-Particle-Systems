function drawMap() {
    // Double forloop to draw
    for (let x = 0; x < array2d.length; x++) {
        for (let y = 0; y < array2d[x].length; y++) {
            if (array2d[x][y] >= THRESHOLD) {
                // Draw the rectangle
                cvs.fillStyle = 'rgba(255, 255, 255)';
                cvs.fillRect(x, y, 1, 1);
            }
        }
    }
}
