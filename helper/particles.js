
let particles = []; // Array to store the particles

// Define a Particle class
class Particle {
    constructor(x, y, radius, color, velocityX, velocityY) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = {
            x: velocityX,
            y: velocityY,
        };
        this.outsideTime = 0;
    }

    draw() {
        cvs.beginPath();
        cvs.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        cvs.fillStyle = this.color;
        cvs.fill();
    }

    update() {
        this.draw();
        let xIndex = Math.floor(this.x * (array2d[0].length / canvas.width));
        let yIndex = Math.floor(this.y * (array2d.length / canvas.height));
        xIndex = Math.max(0, Math.min(xIndex, flowField.length - 1));
        yIndex = Math.max(0, Math.min(yIndex, flowField[0].length - 1));


        // Change this value to adjust the influence of the flow field
        const scale = 0.0001;
        const flow = flowField[xIndex][yIndex];
        this.velocity.x += flow.x * scale;
        this.velocity.y += flow.y * scale;

        if (!isInside(xIndex, yIndex)) {
            console.log("collision");
            this.outsideTime += 1 / 60; // Adjust the time
            // Find the neighboring wall points
            const wallPoints = findNeighboringWallPoints(xIndex, yIndex);
            if (wallPoints.length < 2) {
                // Not enough points to calculate a line, so just reverse direction
                this.velocity.x *= -1;
                this.velocity.y *= -1;
            } else {
                // Calculate the line between the first two wall points
                const dx = wallPoints[1].x - wallPoints[0].x;
                const dy = wallPoints[1].y - wallPoints[0].y;

                // Calculate theta
                const theta = Math.atan2(dy, dx);

                // Calculate reflected velocity
                const cos2Theta = Math.cos(2 * theta);
                const sin2Theta = Math.sin(2 * theta);
                const vx = this.velocity.x * cos2Theta + this.velocity.y * sin2Theta;
                const vy = this.velocity.x * sin2Theta - this.velocity.y * cos2Theta;
                this.velocity.x = vx;
                this.velocity.y = vy;

                // print the reflected angle
                const reflectedAngle = Math.atan2(this.velocity.y, this.velocity.x) - Math.atan2(dy, dx);
                console.log("reflected angle: ", reflectedAngle);
            }
        }



        this.x += this.velocity.x;
        this.y += this.velocity.y;

        const speedLimit = 2; // Change this value to adjust the maximum speed
        const speed = Math.sqrt(this.velocity.x ** 2 + this.velocity.y ** 2);
        if (speed > speedLimit) {
            this.velocity.x = (this.velocity.x / speed) * speedLimit;
            this.velocity.y = (this.velocity.y / speed) * speedLimit;
        }
    }
}

function isInside(x, y) {
    const xIndex = Math.min(Math.max(Math.floor(x * (array2d[0].length / canvas.width)), 0), array2d[0].length - 1);
    const yIndex = Math.min(Math.max(Math.floor(y * (array2d.length / canvas.height)), 0), array2d.length - 1);
    return (
        array2d[xIndex][yIndex] >= THRESHOLD
    );
}