const express = require("express");
const Users = require("./Routes/Users");

const MainRouters = express.Router();

MainRouters.use("/users", Users);

module.exports = MainRouters;
