// Animation loop
function animate() {
    if (array2d != null && flowField != null) {
        // if (array1 != null && flowField != null) {
        requestAnimationFrame(animate);
        cvs.clearRect(0, 0, canvas.width, canvas.height);
        drawMap();
        mouseClickGenerateParticles();

        // Update particles
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
        }

        // Filter particles to remove those that have been outside for more than 1 / 6 sec
        particles = particles.filter(particle => particle.outsideTime <= 1 / 6);
    } else {
        requestAnimationFrame(animate);
    }
}