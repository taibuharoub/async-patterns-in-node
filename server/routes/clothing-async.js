const express = require("express");
const fs = require("fs");
const fsPromises = require("fs").promises;
const datafile = "server/data/clothing.json";
const router = express.Router();

/* GET all clothing */
router.route("/").get(async function (req, res) {
  
    try {
      let data = await getClothingData();
      console.log("Returning async data.");
      res.send(data);
    } catch (err) {
      res.status(500).send(err);
    }
});


async function getClothingData() {
  let rawData = await fsPromises.readFile(datafile, "utf-8")
  let clothingData = JSON.parse(rawData);

  console.log(clothingData);

  return clothingData;
}

module.exports = router;
