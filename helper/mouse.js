// click to create particles
let mouseDown = false;
let mouseprev = false;
let mouse = { x: undefined, y: undefined };
let canvas = document.getElementById("myCanvas");
let cvs = canvas.getContext("2d");
canvas.addEventListener('mousedown', function (event) {
    mouseDown = true;
});

canvas.addEventListener('mouseup', function (event) {
    mouseDown = false;
});

canvas.addEventListener('mousemove', function (event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY
});

function mouseClickGenerateParticles() {
    // if mouse click in the line segment, create a burst of particles
    if (mouseDown && !mouseprev) {
        mouseprev = true;
        console.log(mouse.x, mouse.y);
        if (isInside(mouse.x, mouse.y)) {
            for (let i = 0; i < 1; i++) {
                let color =
                    "rgb(" +
                    Math.random() * 255 +
                    ", " +
                    Math.random() * 255 +
                    ", " +
                    Math.random() * 255 +
                    ")";
                // Get the values of the velocity input fields
                let velocityX = parseFloat(document.getElementById('velocityX').value);
                let velocityY = parseFloat(document.getElementById('velocityY').value);

                // Pass the velocity values as arguments when creating a new particle
                particles.push(new Particle(mouse.x, mouse.y, 1, color, velocityX, velocityY));
            }
        }
    } else if (!mouseDown && mouseprev) {
        mouseprev = false;
    }
    // console.log(flowField[462][375][0]);
}