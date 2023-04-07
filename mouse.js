// click to create particles
let canvas = document.getElementById("myCanvas");
let mouseDown = false;
let mouseprev = false;
let mouse = { x: undefined, y: undefined };

canvas.addEventListener('mousedown', function (event) {
    mouseDown = true;
});

canvas.addEventListener('mouseup', function (event) {
    mouseDown = false;
});

canvas.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y
});

// Generates particles on partcles
function mouseClickGenerateParticles() {
    // if mouse click in the line segment, create a brust of particles 
    if (mouseDown && !mouseprev) {
        var mouseprev = true;
        console.log(mouse.x, mouse.y);
        if (array2d[mouse.x][mouse.y] >= THRESHOLD) {
            for (let i = 0; i < 5; i++) {
                let color = 'rgb(' + Math.random() * 255 + ', ' + Math.random() * 255 + ', ' + Math.random() * 255 + ')';
                particles.push(new Particle(mouse.x, mouse.y, 1, color));
            }
        }
    } else if (!mouseDown && mouseprev) {
        mouseprev = false;
    }
}