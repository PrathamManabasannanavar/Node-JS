// emit() --> executes the callback functions --> Synchronously
//But EventEmitter --> executed by Event loop --> ASynchronously
const EventEmitter = require('node:events');

const emitter = new EventEmitter();
emitter.on("newEventIntialise", (count)=>{
    console.log("inside on" + count);
});

emitter.on("newEventIntialise", ()=>{
    console.log("inside on");
});

emitter.emit("newEventIntialise", 2);
console.log("after emit");