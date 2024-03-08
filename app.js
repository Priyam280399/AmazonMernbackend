require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require('./db/conn.js');
const mongoose = require("mongoose");
const DefaultData = require("./defaultdata");
const cors = require("cors");
const router = require("./routes/router");
const cookieParser = require("cookie-parser");
app.use(express.json());
app.use(cookieParser(""));
app.use(bodyParser.json());

app.use(cors());
app.use(router);
require('./db/conn');

const products = require("./models/productsSchema");
const port = 8005;

app.listen(port,()=>{
    console.log(`server is running on port number ${port}`);

});

DefaultData();