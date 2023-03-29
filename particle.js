// Define a Particle class
class Particle {
    constructor(x, y, radius, color) {
      let xRange = 2;
      let yRange = 2
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
      this.velocity = {
        x: Math.random() * xRange - xRange / 2,
        y: Math.random() * yRange - yRange / 2
      }
    }

    draw() {
      cvs.beginPath();
      cvs.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      cvs.fillStyle = this.color;
      cvs.fill();
    }

    update() {
      this.draw();
    }
}