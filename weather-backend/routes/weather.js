const express = require("express");
const router = express.Router();
// import controller
const {
  checkWeather
} = require("../controllers/weather");

router.post(
    "/checkWeather",
    checkWeather
  );

  module.exports = router;