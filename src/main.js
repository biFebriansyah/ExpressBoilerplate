const express = require("express");
const students = require("./Routes/Students");

const MainRouters = express.Router();

MainRouters.use("/students", students);

module.exports = MainRouters;
