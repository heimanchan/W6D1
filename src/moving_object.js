function MovingObject (option = {pos: null, vel: null, radius: null, color: null}) {
  this.pos = option[pos];
  this.vel = option[vel];
  this.radius = option[radius];
  this.color = option[color];
}

module.exports = MovingObject;