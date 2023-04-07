// Animation loop
function animate() {
    requestAnimationFrame(animate);
    if (array2d != null) {
        cvs.clearRect(0, 0, canvas.width, canvas.height);
        drawMap();
        mouseClickGenerateParticles();

        // Update particles
        for (let i = 0; i < particles.length; i++) {
            let p = particles[i];
            p.update();
        }
    }
}