function findNeighboringWallPoints(x, y) {
    //checks eight directions
    const neighbors = [
        { x: x - 1, y: y },
        { x: x + 1, y: y },
        { x: x, y: y - 1 },
        { x: x, y: y + 1 },
        { x: x - 1, y: y - 1 },
        { x: x + 1, y: y + 1 },
        { x: x - 1, y: y + 1 },
        { x: x + 1, y: y - 1 },
    ];

    const wallPoints = neighbors.filter(pt =>
        pt.x >= 0 && pt.y >= 0 &&
        pt.x < array2d.length &&
        pt.y < array2d[0].length &&
        array2d[pt.x][pt.y] < THRESHOLD
    );

    return wallPoints;
}