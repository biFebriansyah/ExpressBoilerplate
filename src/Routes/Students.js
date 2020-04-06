const express = require("express");
const Students = express.Router();
const controller = require("../Controllers/Students");

Students
    .post("/", controller.setStudnets)
    .get("/", controller.getStudents)

module.exports = Students
