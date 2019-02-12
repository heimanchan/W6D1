console.log("Webpack is working!")

const MovingObject = require("./moving_object.js");

window.MovingObject = MovingObject;

console.dir(new MovingObject({pos: 5, vel: 6, radius: 4, color: "blue"}));