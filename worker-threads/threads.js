//creating and receiving messages from the worker thread
const { Worker, isMainThread, parentPort} = require("worker_threads");

if(isMainThread) {
    console.log("Starting the main Thread");

    const worker = new Worker(__filename);

    worker.on("message", (msg) => {
        console.log(`Worker: ${msg}`);
    })

    console.log("Still in the main thread.");
} else {
    parentPort.postMessage("Getting started.")
    wasteTime(2000);
    parentPort.postMessage("In the Middle.");
    wasteTime(2000);
    parentPort.postMessage("All Done.")
}

function wasteTime(delay) {
    const end = Date.now() + delay;
    while (Date.now < end) {}
}