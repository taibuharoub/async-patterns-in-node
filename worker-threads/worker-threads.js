// Option 1
const { Worker } = require("worker_threads");

const firstWorker = new Worker(cpu_intensive.js);

//Option2

const secondWorker = new Worker(`
    console.log("Do some cpu-intensive stuff here..");
`, { eval: true});