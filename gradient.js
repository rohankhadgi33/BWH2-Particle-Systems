// calculateGradient calculates the gradient for the distance field using the 
// central difference method described here:
// https://bartwronski.com/2021/02/28/computing-gradients-on-grids-forward-central-and-diagonal-differences/
// Whenever an index along a row/column edge is being handled, the given 
// row/edge is repeated so as to give the calculation a value that is not out
// of bounds.
function gradient() {
    if (array2d != null) {
        for (let x = 0; x < array2d.length; x++) {
            gradient2d[x] = [];
            for (let y = 0; y < array2d[x].length; y++) {
                if ((x == 0) && (y == 0)) {
                    // doing y - 1 and x - 1 here would be out of bounds
                    gradient2d[x][y] = ((array2d[x][y + 1] - array2d[x][y]) / 2) + ((array2d[x + 1][y] - array2d[x][y]) / 2);
                } else if ((x == array2d.length - 1) && (y == 0)) {
                    // doing x + 1 and y - 1 here would be out of bounds
                    gradient2d[x][y] = ((array2d[x][y + 1] - array2d[x][y]) / 2) + ((array2d[x][y] - array2d[x - 1][y]) / 2);
                } else if ((x == 0) && (y == array2d[x].length - 1)) {
                    // doing x - 1 and y + 1 here would be out of bounds
                    gradient2d[x][y] = ((array2d[x][y] - array2d[x][y - 1]) / 2) + ((array2d[x + 1][y] - array2d[x][y]) / 2);
                } else if ((x == array2d.length - 1) && (y == array2d[x].length - 1)) {
                    // doing x + 1 and y + 1 here would be out of bounds
                    gradient2d[x][y] = ((array2d[x][y] - array2d[x][y - 1]) / 2) + ((array2d[x][y] - array2d[x - 1][y]) / 2);
                } else if (x == 0) {
                    // doing x - 1 here would be out of bounds
                    gradient2d[x][y] = ((array2d[x][y + 1] - array2d[x][y - 1]) / 2) + ((array2d[x + 1][y] - array2d[x][y]) / 2);
                } else if (x == array2d.length - 1) {
                    // doing x + 1 here would be out of bounds
                    gradient2d[x][y] = ((array2d[x][y - 1] - array2d[x][y + 1]) / 2) + ((array2d[x][y] - array2d[x - 1][y]) / 2);
                } else if (y == 0) {
                    // doing y - 1 here would be out of bounds
                    gradient2d[x][y] = ((array2d[x][y + 1] - array2d[x][y]) / 2) + ((array2d[x + 1][y] - array2d[x - 1][y]) / 2);
                } else if (y == array2d[x].length - 1) {
                    // doing y + 1 here would be out of bounds
                    gradient2d[x][y] = ((array2d[x][y] - array2d[x][y - 1]) / 2) + ((array2d[x + 1][y] - array2d[x - 1][y]) / 2);
                } else {
                    gradient2d[x][y] = ((array2d[x][y + 1] - array2d[x][y - 1]) / 2) + ((array2d[x + 1][y] - array2d[x - 1][y]) / 2);
                }
                console.log('ok');
            }
        }
    }
}