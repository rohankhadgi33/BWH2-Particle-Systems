let flowField = null; // Add this variable to store the generated flow field
function createFlowField(threeDArray) {
    const numRows = threeDArray.length;
    const numCols = threeDArray[0].length;

    const flowField = new Array(numRows);

    for (let i = 0; i < numRows; i++) {
        flowField[i] = new Array(numCols);
    }

    // Use the provided 3D array to set the vector values for each point in the flow field
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            const x = threeDArray[i][j][0];
            const y = threeDArray[i][j][1];
            const velocity = { x: x, y: y };
            flowField[i][j] = velocity;
        }
    }

    return flowField;
}