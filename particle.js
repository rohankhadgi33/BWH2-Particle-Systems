// Define a Particle class
class Particle {
  constructor(x, y, radius, color) {
    let xRange = 1;
    let yRange = 1
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
    let xIndex = Math.floor(this.x);
    let yIndex = Math.floor(this.y);
    if (!isInside(xIndex, yIndex)) {
      // tangent line slope
      // perpendicular if slope times together is -1
      let slope = -this.velocity.x / this.velocity.y;
      let yIntercept = this.y - slope * this.x;
      // this.velocity.x = - this.velocity.x;
      // this.velocity.y = - this.velocity.y;
      // // console.log(yIndex, xIndex);

      // Draw the tangent line
      cvs.beginPath();
      cvs.moveTo(this.x - 10, slope * (this.x - 10) + yIntercept);
      cvs.lineTo(this.x + 10, slope * (this.x + 10) + yIntercept);
      cvs.strokeStyle = 'red';
      cvs.stroke();

      // Reflect the velocity vector across the tangent line
      let moving_angle = 30;
      let incidence_angle = Math.atan(this.velocity.y / this.velocity.x);
      let phi = 2 * (moving_angle) - incidence_angle;
      // new velocity vector
      let v = Math.sqrt(this.velocity.x ** 2 + this.velocity.y ** 2);
      this.velocity.x = v * Math.cos(phi);
      this.velocity.y = v * Math.sin(phi);
    }
    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }
}

function isInside(x, y) {
  return array2d[x][y] >= THRESHOLD;
}