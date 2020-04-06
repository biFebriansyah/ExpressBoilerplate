require("dotenv/config");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const db = require("./src/Configs/conn");
const router = require('./src/main');

const server = express();
const servicePort = process.env.SERVICEPORT;
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(morgan("dev"));
db.dbConnect();
server.use(router);

server.listen(servicePort, () => {
  console.log(`Service running in port ${servicePort}`);
});
