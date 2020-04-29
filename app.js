require("dotenv/config");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const db = require("./src/Configs/conn");
const seque = require("./src/Configs/sequelize");
const router = require("./src/main");
const fs = require("fs");
const path = require("path");
const server = express();
const jsyml = require("js-yaml");
const swaggerUi = require("swagger-ui-express");

const servicePort = process.env.SERVICEPORT;
const swgFile = fs.readFileSync(path.join(__dirname, "./swagger.yaml"), "utf8");
const swgDocs = jsyml.safeLoad(swgFile);

server.use("/docs", swaggerUi.serve, swaggerUi.setup(swgDocs));
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(morgan("dev"));

// db.dbConnect();
server.use(router);

seque
    .authenticate()
    .then(() => {
        console.log("Connection has been established successfully.");
    })
    .catch((err) => {
        console.error("Unable to connect to the database:", err);
    });

server.listen(servicePort, () => {
    console.log(`Service running in port ${servicePort}`);
});
