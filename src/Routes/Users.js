const express = require("express");
const Users = express.Router();
const controller = require("../Controllers/Users");

Users
    .post("/", controller.setUsers)
    .get("/", controller.findAll)
    .get("/commit", controller.commit);

module.exports = Users;
