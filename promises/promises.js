/**
 * Eg one
 */

const { resolve } = require("core-js/es6/promise");
const { reject } = require("core-js/fn/promise");

function doAsyncWork(resolve, reject) {
    //perform async calls
    if (success) {
        resolve(data)
    } else {
        reject("Rejected")
    }
}
let myPromise = new Promise(doAsyncWork)

/**
 * Eg two
 */
let myPromise = new Promise((resolve, reject) => {
    //perform async calls
    if (success) {
        resolve(data)
    } else {
        reject("Rejected")
    }
})

/**
 * How to process the result of a promise 
 * will call afunction that returns a promise object
 */

MethodThatReturnsPromise()
    .then(data => console.log(data)) //called when promise is resolved
    .catch(err => console.log(err)) //called when promise is rejected
    .finally(() => console.log("All done!")) //called in both cases