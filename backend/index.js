const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");
const cors = require("cors");
const usersRoute = require("./controllers/usersController");

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:3000" }));

app.listen(4000, console.log("Port Listen"));

app.use("/users", usersRoute);
