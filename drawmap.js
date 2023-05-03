/*function drawMap() {
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
}*/

/*function drawMap() {
    // Double forloop to draw
    for (let x = array2d.length - 1; x >= 0 ; x--) {
        for (let y = 0; y < array2d[0].length; y++) {
            if (array2d[x][y] >= THRESHOLD) {
                // Draw the rectangle
                cvs.fillStyle = 'rgba(255, 255, 255)';
                //cvs.fillRect(x, y, 1, 1);
                cvs.fillRect(y, x, 1, 1);
                // Phai rotate cai distance field de no ko anh huong toi clicking particle
            }
        }
    }
}*/

function drawMap() {  
    // Rotate array
      const rows = array1[0].length;
      const cols = array1.length;
      array2d = new Array(rows);
    
      for (let i = 0; i < rows; i++)
      {
        array2d[i] = new Array(cols);
        for (let j = 0; j < cols; j++)
        {
          array2d[i][j] = array1[j][i];  
        }
      }
    // Double forloop to draw
    for (let x = 0; x < array2d.length; x++) {
        for (let y = 0; y < array2d[0].length; y++) {
            if (array2d[x][y] >= THRESHOLD) {  
                cvs.fillStyle = 'rgba(255, 255, 255)';
                cvs.fillRect(x, y, 1, 1);
            }
        }
    }
}
