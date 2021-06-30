const EventEmitter = require("events");

let myEventEmitter = new EventEmitter();

myEventEmitter.on("wroteCode", () => {
    console.log("Somebody wrote some code!");
});

myEventEmitter.on("wroteCode", () => {
    console.log("Busy building Node apps!");
})

myEventEmitter.emit("wroteCode");

/***
 * its also possible to pass parameters
 * to event listeners
 * the value of that parameter is specified 
 * when the event is emitted
 */

myEventEmitter.on("wroteCode", (language) => {
    console.log(`Somebody wrote some ${language} code!`);
})

myEventEmitter.emit("wroteCode", "JavaScript"); 