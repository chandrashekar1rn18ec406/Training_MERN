const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

let i = 0;

function increment() {
  i++;
  console.log(i);
}
setInterval(increment, 1000);

eventEmitter.on("start", increment);

eventEmitter.emit("start");
