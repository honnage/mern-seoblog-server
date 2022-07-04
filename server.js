const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const { readdirSync } = require("fs");

// const mongoConnectDB = require("./config/connect_mongodb");
const mysqlConnectDB = require("./config/connect_mysqldb");
// const sequelizeConnectDB = require("./config/connect_sequelize");


// mysqlConnectDB.query("show tables", (eer, result) => {
//   console.log(result);
// });

// app
const app = express();

// connect database
// sequelizeConnectDB.sequeliz.sync().then(() =>{
//   console.log('Sequelize Connect Database Success!!')
// });

// mongoConnectDB();



// middleware
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());

app.use(cookieParser());

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("Server is Running on port " + port);
});
