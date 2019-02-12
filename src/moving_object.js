function MovingObject(option = {}) {
  this.pos = option.pos;
  this.vel = option.vel;
  this.radius = option.radius;
  this.color = option.color;
}

MovingObject.prototype.draw = function(ctx) {
  const canvas = document.getElementById('game-canvas');
  const context = canvas.getContext('2d');
  const centerX = this.pos[0];
  const centerY = this.pos[1];
}

module.exports = MovingObject;