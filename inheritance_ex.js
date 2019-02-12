Function.prototype.inherits = function (SuperClass) {
  // function surrogate() {}
  // surrogate.prototype = SuperClass.prototype;
  // this.prototype = new surrogate();
  // this.prototype.constructor = this;
  this.prototype = Object.create(SuperClass.prototype);
  this.prototype.constructor = this;

}

function MovingObject() {}

function Ship() { }
Ship.inherits(MovingObject);

function Asteroid() { }
Asteroid.inherits(MovingObject);

MovingObject.prototype.fly = function () { console.log("flying")};
let ship = new Ship;
ship.fly();
Ship.prototype.sail = function () { console.log("sailing")};


