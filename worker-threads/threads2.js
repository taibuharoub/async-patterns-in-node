//Sending data and messages to  worker threads
const { Worker, isMainThread, parentPort, workerData} = require("worker_threads");

if(isMainThread) {
    console.log("Starting the main Thread");

    const worker = new Worker(__filename, {
        workerData: {
            outputPrefix: "Received message",
            timeToWaste: 500
        }
    });

    worker.on("message", (msg) => {
        console.log(`Worker: ${msg}`);
    })

    worker.postMessage("Done with my work");

    console.log("Still in the main thread.");
} else {
    //handle message from parent
    parentPort.on("message", (msg) => {
        console.log(`${workerData.outputPrefix}: ${msg}`);
    })

    parentPort.postMessage("Getting started.")
    wasteTime(workerData.timeToWaste);
    parentPort.postMessage("In the Middle.");
    wasteTime(workerData.timeToWaste);
    parentPort.postMessage("All Done.")
}

function wasteTime(delay) {
    const end = Date.now() + delay;
    while (Date.now < end) {}
}