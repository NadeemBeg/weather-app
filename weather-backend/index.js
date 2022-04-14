require("dotenv").config();  // for .env file
const express = require("express");  // for using api creation 
const app = express();
const bodyParser = require("body-parser"); // for request data get
const cors = require("cors"); // cros platform 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//My routes
const weather = require("./routes/weather");

// //My Routes
app.use("/api", weather);


  //PORT
const port = process.env.PORT || 8000;

//Starting a server
app.listen(port, () => {
  console.log(`app is running at`,port);
});