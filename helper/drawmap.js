function drawMap() {
    // Double for loop to draw
    for (let x = 0; x < array2d.length; x++) {
        for (let y = 0; y < array2d[x].length; y++) {
            if (array2d[x][y] >= THRESHOLD) {
                // Draw the rectangle
                cvs.fillStyle = "rgba(255, 255, 255)";
                cvs.fillRect(x, y, 1, 1);
            }
            // every 10 pixels, across the x and y axis, draw the direction of the
            // gradient vector for the given pixel
            if (showVectors && (x % 10 == 0) && (y % 10 == 0)) {
                cvs.beginPath();
                cvs.moveTo(x, y);
                cvs.lineTo(x + (10 * flowField[x][y].x), y + (10 * flowField[x][y].y));
                cvs.strokeStyle = 'red';
                cvs.stroke();
            }
        }
    }
}