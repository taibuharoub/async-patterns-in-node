const express = require("express");
const fs = require("fs");
const { resolve } = require("path");
const datafile = "server/data/clothing.json";
const router = express.Router();

/* GET all clothing */
router.route("/").get(function (req, res) {
  /* fs.readFile(datafile, "utf8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        let clothingData = JSON.parse(data);
        console.log("Returning clothing data");
        res.send(clothingData);
      }
    })
    
    console.log("Doing more work"); */

  /* //using callbacks as a parameter
   getClothingData((err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Returning clothing data");
        res.send(data);
      }
    });
    console.log("Doing more work"); */

  getClothingData()
    .then((data) => {
      console.log("Returning clothing data to browser");
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    })
    .finally(() => console.log("All done processing promise."));

    console.log("Doing more work");
});

//using callbacks as a parameter
/* function getClothingData(callback) {
  fs.readFile(datafile, "utf8", (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      let clothingData = JSON.parse(data);
      callback(null, clothingData)
    }
  })
}   */

function getClothingData() {
  return new Promise((resolve, reject) => {
    fs.readFile(datafile, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        let clothingData = JSON.parse(data);
        resolve(clothingData);
      }
    });
  });
}

module.exports = router;
