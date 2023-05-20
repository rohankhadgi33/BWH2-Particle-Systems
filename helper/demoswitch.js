let showdemo = false;
document.getElementById("demoMode").addEventListener('change', function () {
    console.log("Checkbox changed");
    showdemo = this.checked;
    if (showdemo) {
        console.log("Activating demo mode");
        activateDemoMode();
    } else {
        console.log("Deactivating demo mode");
        deactivateDemoMode();
    }
});

function activateDemoMode() {
    // Get the indices of pixels with values greater than the threshold
    const validIndices = [];
    for (let i = 0; i < array2d.length; i++) {
        for (let j = 0; j < array2d[i].length; j++) {
            if (array2d[i][j] >= THRESHOLD) {
                validIndices.push({ y: i, x: j });
            }
        }
    }

    // Randomly select 500 indices from the validIndices array
    const selectedIndices = [];
    while (selectedIndices.length < 666 && validIndices.length > 0) {
        const randomIndex = Math.floor(Math.random() * validIndices.length);
        selectedIndices.push(validIndices[randomIndex]);
        validIndices.splice(randomIndex, 1);
    }

    // Generate particles at the selected indices
    for (const index of selectedIndices) {
        let randomXPixel = index.y * (canvas.width / array2d[0].length);
        let randomYPixel = index.x * (canvas.height / array2d.length);

        let color = "rgb(" + Math.random() * 255 + ", " + Math.random() * 255 + ", " + Math.random() * 255 + ")";
        let velocityX = Math.random() * 2 - 1; // Random number between -1 and 1
        let velocityY = Math.random() * 2 - 1; // Random number between -1 and 1

        particles.push(new Particle(randomXPixel, randomYPixel, 1, color, velocityX, velocityY));
    }
}

function deactivateDemoMode() {
    // Clear all particles
    particles = [];
}