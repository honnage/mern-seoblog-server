const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const { readdirSync } = require("fs");
const connectDB = require("./config/mongodb");

// app
const app = express();

// connect database
connectDB();

// middleware
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());

app.use(cookieParser());

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("Server is Running on port " + port);
});
